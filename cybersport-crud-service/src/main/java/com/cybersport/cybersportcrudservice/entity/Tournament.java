package com.cybersport.cybersportcrudservice.entity;

import com.cybersport.cybersportcrudservice.entity.dto.ResultTableDto;
import com.cybersport.cybersportcrudservice.entity.enums.TournamentStage;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Getter
@Data
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@SqlResultSetMapping(
        name = "Mapping.ResultTableDto",
        classes = {
                @ConstructorResult(
                        targetClass =  com.cybersport.cybersportcrudservice.entity.dto.ResultTableDto.class,
                        columns = {
                                @ColumnResult(name = "teamId", type = UUID.class),
                                @ColumnResult(name = "winCount", type = Integer.class),
                                @ColumnResult(name = "teamName", type = String.class),
                                @ColumnResult(name = "teamRegion", type = String.class),
                                @ColumnResult(name = "userID", type = UUID.class),
                                @ColumnResult(name = "userNickname", type = String.class),
                                @ColumnResult(name = "userName", type = String.class),
                                @ColumnResult(name = "userSecName", type = String.class),
                                @ColumnResult(name = "userThirdName", type = String.class),
                                @ColumnResult(name = "userRole", type = String.class),
                                @ColumnResult(name = "userSex", type = Boolean.class),
                                @ColumnResult(name = "userBday", type = LocalDate.class)
                        }
                )
        }
)
@NamedNativeQueries(value = {
        @NamedNativeQuery(name = "Tournament.findResultTable", query = "SELECT team.team_id teamId, winCount, team.team_name as teamName, team.team_subject as teamRegion, users.user_id as userId, users.user_nickname as userNickname, users.user_first_name as userName, users.user_last_name as userSecName, users.user_patronymic as userThirdName, users.user_role as userRole, users.user_sex as userSex, users.user_bday as userBday FROM (SELECT matches.match_winner as WIN, count(matches.match_winner) as winCount FROM tournaments join matches on tournaments.tournament_id = matches.match_tournament_tournament_id  where matches.match_is_ended = true and tournaments.tournament_id =?1 group by matches.match_winner  ORDER BY matches.match_winner ASC) right join team on WIN = team.team_id join team_team_user  on team_team_user.team_team_id = team.team_id join users on users.user_id = team_team_user.team_user_user_id", resultSetMapping = "Mapping.ResultTableDto")
})
@Table(name = "tournaments")
public class Tournament {
    @Id
    @GeneratedValue
    @Column(name = "tournament_id", unique = true)
    private UUID tournamentId;
    @NotBlank(message="{name of the tournament is invalid}")
    @Size(min = 2, max = 30, message="{size is invalid}")
    @Column(name = "tournament_name")
    private String tournamentName;
    @ManyToOne
    @NotNull
    @JoinColumn
    private Game tournamentGame;
    @NotNull(message="{start day of tournament is invalid}")
    @Column(name = "tournament_start_day")
    @JsonFormat(pattern = "yyyy-MM-dd")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate tournamentStartDay;
    @Column(name = "tournament_end_day")
    @JsonFormat(pattern = "yyyy-MM-dd")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate tournamentEndDay;
    @Column(name = "tournament_description")
    private String tournamentDescription;
    @OneToMany
    @Column(name = "tournament_judge")
    private List<Judge> tournamentJudge;
    @Column
    @Enumerated(EnumType.STRING)
    private TournamentStage tournamentStage;
    @OneToMany
    @Column(name = "tournament_team_list")
    private List<Team> tournamentTeamList;
    @OneToMany
    @Column(name = "tournament_winners")
    private List<Team> tournamentWinners;
    @ElementCollection
    @MapKeyColumn(name = "tournament_stage")
    @Column(name = "tournament_date")
    @CollectionTable(name = "tournament_dates")
    @JsonPropertyOrder({"tournamentStage", "date"})
    private Map<TournamentStage, LocalDate> tournamentDates;
    @Column(name = "tournament_matrix", columnDefinition="text")
    private String tournamentMatrix;


}
