import React from "react";
import styled from "styled-components";
import IPlayer from "@/types/player.type";

const PlayerContainer = styled.div<{ color: string }>`
  padding: 0 10px;
  height: 76px;
  background: ${(props) => props.color};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 2px
`;

const Input = styled.input`
  border-radius: 5px;
  height: 50px;
  width: calc(12.5% - 2px);
  padding: 0 2px;
  background: #222
`;

const DeleteButton = styled.div`
  color: #8973FF;
  cursor: pointer;
  text-align: center;
  width: 12.5%;
`;

interface PlayerProps {
    index: number
    player: IPlayer
    onDelete: () => void,
    onUpdate: Function
}

export default function Player({index, player, onDelete, onUpdate}: PlayerProps) {
    return (
        <PlayerContainer color={index % 2 ? "#15151A" : "#1A1A20"}>
            <Input placeholder="Никнейм*" required value={player.userNickname}
                   onChange={(e) => onUpdate(index, "userNickname", e.target.value)}/>
            <Input placeholder="ФИО*" required
                   onChange={(e) => {
                       onUpdate(index, "userLastName", e.target.value.split(' ')[0] ?
                           e.target.value.split(' ')[0] : '')
                       onUpdate(index, "userFirstName", e.target.value.split(' ')[1] ?
                           e.target.value.split(' ')[1] : '')
                       onUpdate(index, "userPatronymic", e.target.value.split(' ')[2] ?
                           e.target.value.split(' ')[2] : '')
                   }}/>
            <Input placeholder="Пол*" required
                   onChange={(e) => onUpdate(index, "userSex", e.target.value)}/>
            <Input placeholder="Дата рождения*" required
                   onChange={(e) => onUpdate(index, "userBDay", e.target.value)}/>
            <Input placeholder="Роль*" required
                   onChange={(e) => onUpdate(index, "userRole", e.target.value)}/>
            <Input placeholder="Номер телефона*" required
                   onChange={(e) => onUpdate(index, "userContact", [e.target.value])}/>
            <Input placeholder="ГТО*" required
                   onChange={(e) => onUpdate(index, "userGto", e.target.value)}/>
            <DeleteButton onClick={onDelete}>(удалить)</DeleteButton>
        </PlayerContainer>
    )
}