package com.cybersport.cybersportcrudservice.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.util.UUID;

@Getter
@Data
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "tournament_results")
public class TournamentResult {
    @Id
    @GeneratedValue
    @Column(name = "tournament_result_id", unique = true)
    private UUID tournamentResultId;
    @JsonFormat(shape = JsonFormat.Shape.ARRAY)
    @Column(name = "tournament_add_features")
    private List<String> tournamentAddFeatures;
    @JsonFormat(shape = JsonFormat.Shape.ARRAY)
    @Column(name = "tournament_values")
    private List<String> tournamentValues;
}
