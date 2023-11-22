package com.cybersport.cybersportcrudservice.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
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
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue
    @Column(name = "user_id", unique = true)
    private UUID userId;
    @NotBlank(message="{First name is invalid}")
    @Size(min = 2, max = 30, message="{size is invalid}")
    @Column(name = "user_first_name")
    private String userFirstName;
    @NotBlank(message="{Last name is invalid}")
    @Size(min = 2, max = 30, message="{size is invalid}")
    @Column(name = "user_last_name")
    private String userLastName;
    @Size(min = 2, max = 30, message="{size is invalid}")
    @Column(name = "user_patronymic")
    private String userPatronymic;
    @Column(name = "user_sex")
    private boolean userSex;
    @NotBlank(message="{Nickname is invalid}")
    @Size(min = 1, max = 30, message="{size is invalid}")
    @Column(name = "user_nickname", unique = true)
    private String userNickname;
    @NotBlank(message="{Role is invalid}")
    @Column(name = "user_role")
    private String userRole;
    @NotNull(message="{birthday is invalid}")
    @Column(name = "user_bday")
    @JsonFormat(pattern = "yyyy-MM-dd")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Past
    private LocalDate userBDay;
    @NotBlank
    @Column(name = "user_contact")
    private List<String> userContact;
    @NotBlank
    @Column(name = "user_gto", unique = true)
    private String userGto;
}
