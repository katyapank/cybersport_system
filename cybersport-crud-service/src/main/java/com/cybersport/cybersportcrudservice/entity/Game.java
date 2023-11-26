package com.cybersport.cybersportcrudservice.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.List;
import java.util.UUID;

@Getter
@Data
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "games")
public class Game {
    @Id
    @GeneratedValue
    @Column(name = "game_id", unique = true)
    private UUID gameId;
    @NotNull
    @NotBlank(message="{name of the game is invalid}")
    @Size(min = 2, max = 30, message="{size is invalid}")
    @Column(name = "game_name", unique = true)
    private String gameName;
    @NotBlank(message="{genre of the game is invalid}")
    @Size(min = 2, max = 30, message="{genre is invalid}")
    @Column(name = "game_genre")
    private String gameGenre;
    @JsonFormat(shape = JsonFormat.Shape.ARRAY)
    @Column(name = "game_add_features")
    private List<String> gameAddFeatures;
    @JsonFormat(shape = JsonFormat.Shape.ARRAY)
    @Column(name = "game_add_weights")
    private List<String> gameAddWeights;
    @NotBlank(message="{command size is invalid}")
    @Column(name = "game_command_size")
    private String gameCommandSize;

}