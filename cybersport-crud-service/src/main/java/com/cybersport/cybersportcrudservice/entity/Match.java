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
import java.util.List;
import java.util.UUID;

@Getter
@Data
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
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
    @Column(name = "match_result_features_team1")
    private List<String> matchResultFeaturesTeam1;
    @JsonFormat(shape = JsonFormat.Shape.ARRAY)
    @Column(name = "match_result_features_team2")
    private List<String> matchResultFeaturesTeam2;
}
