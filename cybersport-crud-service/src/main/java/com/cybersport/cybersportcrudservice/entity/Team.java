package com.cybersport.cybersportcrudservice.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
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
@Table(name = "team")
public class Team {
    @Id
    @GeneratedValue
    @Column(name = "team_id", unique = true)
    private UUID teamId;
    @NotBlank(message="{Name is invalid}")
    @Size(min = 2, max = 30, message="{size is invalid}")
    @Column(name = "team_name", unique = true)
    private String teamName;
    @OneToMany
    @Column(name = "team_user")
    private List<User> teamUser;
    @Column(name = "team_description")
    private String teamDescription;
    @NotBlank(message="{Subject is invalid}")
    @Column(name = "team_subject")
    private String teamSubject;
    @Column(name = "team_photo")
    private String teamPhoto;
    @NotBlank(message="{Login is invalid}")
    @Size(min = 1, max = 30, message="{size is invalid}")
    @Column(name = "team_nickname", unique = true)
    private String teamLogin;
    @NotBlank(message="{password is invalid}")
    @Column(name = "team_password")
    private String teamPassword;
    @Column(name = "team_win")
    private int teamWinCount;
    @Column(name = "team_loss")
    private int teamLossCount;
    @Column(name = "team_rate")
    private int teamRate;
}
