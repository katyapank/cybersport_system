"use client";

import React, {useState} from "react";
import styled from "styled-components";
import Image from "next/image";
import {useForm} from "react-hook-form";
import Player from "@/app/(auth)/register/player";
import {useLoginTeamMutation, useRegisterTeamMutation} from "@/redux/team/team.api";
import ILoginTeam from "@/types/team/login-team.type";
import IPlayer from "@/types/player.type";
import {useRouter} from "next/navigation";

const Main = styled.main`
  display: flex;
  justify-content: center;
`;

const Container = styled.main`
  width: 1270px;
  margin: 83px 24px 32px;
  min-height: 100lvh;
`;

const Grids = styled.div`
  display: flex;
  gap: 24px;
`;

const GridSection = styled.section`
  margin-top: 48px;
  width: 100%;
`;

const GridSectionH3 = styled.h3`
  padding: 0 0 24px 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const GridElements = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 70px;
  align-items: center;
`;

const InfoWrapper = styled.div`
  width: 60%
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  justify-content: space-between
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #ccc;
`;

const Input = styled.input`
  border-radius: 5px;
  height: 50px;
  padding: 20px;
  background: #1A1A20
`;

const TextAreaWrapper = styled.div`
  border-left: 3px solid #8973FF;
  padding-left: 10px;
  width: 100%;
  margin-top: 20px;
  color: #ccc
`;

const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 90px;
  border-radius: 5px;
  padding: 15px;
  background: #1A1A20
`;

const AddButton = styled.div`
  width: 150px;
  color: #8973FF;
  padding: 6px 8px;
  border: 2px solid #8973FF;
  cursor: pointer;
  border-radius: 10px;
  text-align: center;
  margin-top: 3px;
`;

const ButtonSubmit = styled.button`
  width: 200px;
  color: #8973FF;
  padding: 6px 8px;
  border: 2px solid #8973FF;
  cursor: pointer;
  border-radius: 10px;
  text-align: center;
  margin: 20px 0 0 calc(100% - 200px);
`;

export default function Home() {
    const [players, setPlayers] = useState<IPlayer[]>([]);

    const handleAddPlayer = (): void => {
        setPlayers([...players,
            {
                userLastName: '',
                userFirstName: '',
                userPatronymic: '',
                userSex: false,
                userNickname: '',
                userRole: '',
                userBDay: '',
                userContact: [''],
                userGto: ''
            },
        ]);
    };

    const handleDeletePlayer = (index: number): void => {
        let temp: IPlayer[] = players.slice();
        temp.splice(index, 1);
        setPlayers(temp);
    };

    const changePlayer = (index: number, name: string, value: any): void => {
        let temp: IPlayer[] = players.slice();
        if (Object.keys(temp[index]).includes(name)) {
            if (name === "userSex") value = !(value && (value[0] === 'м' || value[0] === 'п'))
            temp[index][name] = value;
            setPlayers(temp);
        }
    };

    const {
        register, handleSubmit
    } = useForm({
        defaultValues: {
            teamName: '', teamDescription: '', teamSubject: '', teamLogin: '', teamPassword: '', teamPassword2: ''
        }, reValidateMode: "onChange"
    });

    const [registerTeam, {isError: isErrorRegister, isLoading: isLoadingRegister}] = useRegisterTeamMutation();
    const [loginTeam, {isError: isErrorLogin, isLoading: isLoadingLogin}] = useLoginTeamMutation();

    const router = useRouter()

    const onSubmit = async (values: any): Promise<void> => {
        await registerTeam({...values, teamUser: players}).finally(
            async (): Promise<void> => {
                const {data}: { data: ILoginTeam } = await loginTeam({
                    teamLogin: values.teamLogin,
                    teamPassword: values.teamPassword
                }) as { data: ILoginTeam };
                window.localStorage.setItem('teamToken', data.token)
                router.push('/')
            }
        )
    }

    return (
        <Main>
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InfoContainer>
                        <ImageWrapper>
                            <Image src="/default_logo.png" alt="team_logo" width={250} height={250}/>
                        </ImageWrapper>
                        <InfoWrapper>
                                <InputWrapper>
                                    <Input placeholder="Название команды" maxLength={29} required
                                           {...register("teamName")}/>
                                    *
                                </InputWrapper>
                            <TextAreaWrapper>
                                <TextArea placeholder="Описание команды (до 200 символов)" maxLength={200}
                                          {...register("teamDescription")}/>
                            </TextAreaWrapper>
                        </InfoWrapper>
                    </InfoContainer>
                    <InputContainer>
                        <InputWrapper>
                            <Input placeholder="Субъект РФ" maxLength={29} required
                                   {...register("teamSubject")}/>
                            *
                        </InputWrapper>
                        <InputWrapper>
                            <Input placeholder="Логин" required
                                   {...register("teamLogin")}/>
                            *
                        </InputWrapper>
                        <InputWrapper>
                            <Input placeholder="Придумайте пароль" type="password" required
                                   {...register("teamPassword")}/>
                            *
                        </InputWrapper>
                        <InputWrapper>
                            <Input placeholder="Повторите пароль" type="password" required
                                   {...register("teamPassword2")}/>
                            *
                        </InputWrapper>
                    </InputContainer>
                    <Grids>
                        <GridSection>
                            <GridSectionH3>
                                {"Состав команды "}
                                <AddButton onClick={handleAddPlayer}>Добавить участника</AddButton>
                            </GridSectionH3>
                            <GridElements>
                                {
                                    players.map((player: IPlayer, index: number) => (
                                        <Player key={index} index={index} player={player}
                                                onDelete={() => handleDeletePlayer(index)}
                                                onUpdate={changePlayer}/>
                                    ))
                                }
                            </GridElements>
                        </GridSection>
                    </Grids>
                    <ButtonSubmit type="submit">Зарегистрировать</ButtonSubmit>
                </form>
            </Container>
        </Main>
    );
}
