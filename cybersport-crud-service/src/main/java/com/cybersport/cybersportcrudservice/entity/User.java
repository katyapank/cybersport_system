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
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue
    @Column(name = "user_id", unique = true)
    private UUID userId;
    @Column(name = "user_password")
    private String userPassword;

    @Column(name = "user_first_name")
    private String userFirstName;

    @Column(name = "user_last_name")
    private String userLastName;

    @Column(name = "user_email", unique = true)
    private String userEmail;
}
