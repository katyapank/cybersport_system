package com.cybersport.cybersportcrudservice.entity;

import jakarta.persistence.*;
import lombok.*;

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

    @Column(name = "game_name", unique = true)
    private String gameName;

    @Column(name = "game_genre")
    private String gameGenre;


}