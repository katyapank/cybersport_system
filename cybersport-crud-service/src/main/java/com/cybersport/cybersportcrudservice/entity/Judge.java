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
@Table(name = "judge")
public class Judge {
    @Id
    @GeneratedValue
    @Column(name = "judge_id", unique = true)
    private UUID judgeId;
    @NotBlank(message="{First name is invalid}")
    @Size(min = 2, max = 30, message="{size is invalid}")
    @Column(name = "judge_first_name")
    private String judgeFirstName;
    @NotBlank(message="{Last name is invalid}")
    @Size(min = 2, max = 30, message="{size is invalid}")
    @Column(name = "judge_last_name")
    private String judgeLastName;
    @Size(min = 2, max = 30, message="{size is invalid}")
    @Column(name = "judge_patronymic")
    private String judgePatronymic;
    @NotBlank(message="{Nickname is invalid}")
    @Size(min = 1, max = 30, message="{size is invalid}")
    @Column(name = "judge_nickname", unique = true)
    private String judgeNickname;
    @NotBlank(message="{Last name is invalid}")
    @Column(name = "judge_post")
    private String judgePost;
    @NotNull
    @Column(name = "judge_rank")
    private Integer judgeRank;
    @NotBlank(message="{Subject is invalid}")
    @Column(name = "judge_subject")
    private String judgeSubject;
    @NotNull(message="{birthday is invalid}")
    @Column(name = "judge_bday")
    @JsonFormat(pattern = "yyyy-MM-dd")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Past
    private LocalDate judgeBDay;
    @NotBlank
    @Column(name = "judge_contact")
    private List<String> judgeContact;
    @Column(name = "judge_photo")
    private String judgePhoto;
    @NotBlank(message="{Login is invalid}")
    @Size(min = 1, max = 30, message="{size is invalid}")
    @Column(name = "judge_login", unique = true)
    private String judgeLogin;
    @NotBlank(message="{password is invalid}")
    @Column(name = "judge_password")
    private String judgePassword;
}
