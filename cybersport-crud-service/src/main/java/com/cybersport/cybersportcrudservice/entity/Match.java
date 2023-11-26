package com.cybersport.cybersportcrudservice.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Getter
@Data
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@SqlResultSetMapping(
        name = "Mapping.MVPTableDto",
        classes = {
                @ConstructorResult(
                        targetClass =  com.cybersport.cybersportcrudservice.entity.dto.MVPDto.class,
                        columns = {
                                @ColumnResult(name = "gameFeatures", type = ArrayList.class),
                                @ColumnResult(name = "gameMetrics", type = ArrayList.class),
                                @ColumnResult(name = "gameT1P1", type = ArrayList.class),
                                @ColumnResult(name = "gameT1P2", type = ArrayList.class),
                                @ColumnResult(name = "gameT1P3", type = ArrayList.class),
                                @ColumnResult(name = "gameT1P4", type = ArrayList.class),
                                @ColumnResult(name = "gameT1P5", type = ArrayList.class),
                                @ColumnResult(name = "gameT2P1", type = ArrayList.class),
                                @ColumnResult(name = "gameT2P2", type = ArrayList.class),
                                @ColumnResult(name = "gameT2P3", type = ArrayList.class),
                                @ColumnResult(name = "gameT2P4", type = ArrayList.class),
                                @ColumnResult(name = "gameT2P5", type = ArrayList.class)
                        }
                )
        }
)
@NamedNativeQuery(name = "Match.findResultMVP", query = "SELECT games.game_add_features as gameFeatures, games.game_add_weights as gameMetrics,\n" +
        "matches.match_result_metrics_team1_p1 as gameT1P1, matches.match_result_metrics_team1_p2 as gameT1P2, matches.match_result_metrics_team1_p3 as gameT1P3, matches.match_result_metrics_team1_p4 as gameT1P4, matches.match_result_metrics_team1_p5 as gameT1P5,\n" +
        "matches.match_result_metrics_team2_p1 as gameT2P1, matches.match_result_metrics_team2_p2 as gameT2P2, matches.match_result_metrics_team2_p3 as gameT2P3, matches.match_result_metrics_team2_p4 as gameT2P4, matches.match_result_metrics_team2_p5 as gameT2P5 \n" +
        "FROM matches join games on matches.match_game_game_id = games.game_id where matches.match_id = ?1", resultSetMapping = "Mapping.MVPDto")

@Table(name = "matches")
public class Match {
    @Id
    @GeneratedValue
    @Column(name = "match_id", unique = true)
    private UUID matchId;
    @ManyToOne
    @NotNull
    @JoinColumn
    private Game matchGame;
    @NotBlank(message="{name of the match is invalid}")
    @Size(min = 2, max = 30, message="{size is invalid}")
    @Column(name = "match_name")
    private String matchName;
    @NotNull(message="{start day of match is invalid}")
    @Column(name = "match_start_day")
    @JsonFormat(pattern = "yyyy-MM-dd")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate matchStartDay;
    @Column(name = "match_end_day")
    @JsonFormat(pattern = "yyyy-MM-dd")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate matchEndDay;
    @ManyToOne
    @NotNull
    @JoinColumn
    private Tournament matchTournament;
    @ManyToOne
    @JoinColumn(name = "match_team1")
    private Team matchTeam1;
    @ManyToOne
    @JoinColumn
    private Team matchTeam2;
    @Column(name = "match_description")
    private String matchDescription;
    @Column(name = "match_mvp")
    private String matchMvp;
    @Column(name = "match_score_team1")
    private Integer matchScoreTeam1;
    @Column(name = "match_score_team2")
    private Integer matchScoreTeam2;
    @OneToMany
    @Column(name = "match_judge")
    private List<Judge> matchJudge;
    @Column(name = "match_is_ended")
    //Дефолтное значение?
    private Boolean matchIsEnded;
    @ManyToOne
    @JoinColumn(name = "match_winner")
    private Team matchWinner;
    @JsonFormat(shape = JsonFormat.Shape.ARRAY)
    @Column(name = "match_result_metrics_team1_p1")
    private List<String> matchTeam1P1;
    @JsonFormat(shape = JsonFormat.Shape.ARRAY)
    @Column(name = "match_result_metrics_team1_p2")
    private List<String> matchTeam1P2;
    @JsonFormat(shape = JsonFormat.Shape.ARRAY)
    @Column(name = "match_result_metrics_team1_p3")
    private List<String> matchTeam1P3;
    @JsonFormat(shape = JsonFormat.Shape.ARRAY)
    @Column(name = "match_result_metrics_team1_p4")
    private List<String> matchTeam1P4;
    @JsonFormat(shape = JsonFormat.Shape.ARRAY)
    @Column(name = "match_result_metrics_team1_p5")
    private List<String> matchTeam1P5;
    @JsonFormat(shape = JsonFormat.Shape.ARRAY)
    @Column(name = "match_result_metrics_team2_p1")
    private List<String> matchTeam2P1;
    @JsonFormat(shape = JsonFormat.Shape.ARRAY)
    @Column(name = "match_result_metrics_team2_p2")
    private List<String> matchTeam2P2;
    @JsonFormat(shape = JsonFormat.Shape.ARRAY)
    @Column(name = "match_result_metrics_team2_p3")
    private List<String> matchTeam2P3;
    @JsonFormat(shape = JsonFormat.Shape.ARRAY)
    @Column(name = "match_result_metrics_team2_p4")
    private List<String> matchTeam2P4;
    @JsonFormat(shape = JsonFormat.Shape.ARRAY)
    @Column(name = "match_result_metrics_team2_p5")
    private List<String> matchTeam2P5;
}
