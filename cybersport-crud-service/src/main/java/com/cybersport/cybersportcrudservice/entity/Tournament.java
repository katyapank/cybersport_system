package com.cybersport.cybersportcrudservice.entity;

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
    @JsonFormat(shape = JsonFormat.Shape.ARRAY)
    @JsonPropertyOrder({"tournamentStage", "date"})
    private Map<TournamentStage, LocalDate> tournamentDates;
    @Column(name = "tournament_matrix", columnDefinition="text")
    private String tournamentMatrix;


}
