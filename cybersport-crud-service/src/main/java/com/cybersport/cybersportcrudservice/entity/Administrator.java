package com.cybersport.cybersportcrudservice.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.UUID;
@Getter
@Data
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "admin")
public class Administrator {
    @Id
    @GeneratedValue
    @Column(name = "admin_id", unique = true)
    private UUID adminId;
    @NotBlank(message="{First name is invalid}")
    @Size(min = 2, max = 30, message="{size is invalid}")
    @Column(name = "admin_first_name")
    private String adminFirstName;
    @NotBlank(message="{Last name is invalid}")
    @Size(min = 2, max = 30, message="{size is invalid}")
    @Column(name = "admin_last_name")
    private String adminLastName;
    @Size(min = 2, max = 30, message="{size is invalid}")
    @Column(name = "admin_patronymic")
    private String adminPatronymic;
    @NotBlank(message="{Login is invalid}")
    @Size(min = 1, max = 30, message="{size is invalid}")
    @Column(name = "admin_nickname", unique = true)
    private String adminLogin;
    @NotBlank(message="{password is invalid}")
    @Column(name = "admin_password")
    private String adminPassword;
}
