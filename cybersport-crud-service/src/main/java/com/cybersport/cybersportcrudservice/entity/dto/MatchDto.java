package com.cybersport.cybersportcrudservice.entity.dto;

import com.cybersport.cybersportcrudservice.entity.Judge;
import com.cybersport.cybersportcrudservice.entity.Team;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class MatchDto {
    private UUID matchId;
    private String matchGame;
    private String matchName;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate matchStartDay;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate matchEndDay;
    private UUID matchTournament;
    private String matchTeam1;
    private String matchTeam2;
    private String matchDescription;
    private Integer matchScoreTeam1;
    private Integer matchScoreTeam2;
    private List<Judge> matchJudge;
    private Boolean matchIsEnded;
    private Team matchWinner;
    private List<String> matchResultFeaturesTeam1;
    private List<String> matchResultFeaturesTeam2;
}
