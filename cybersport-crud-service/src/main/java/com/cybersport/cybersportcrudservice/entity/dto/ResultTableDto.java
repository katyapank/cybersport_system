package com.cybersport.cybersportcrudservice.entity.dto;

import lombok.*;

import java.time.LocalDate;
import java.util.UUID;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class ResultTableDto {
    private UUID teamId;
    private Integer winCount;
    private String teamName;
    private String teamRegion;
    private UUID userId;
    private String userNickname;
    private String userName;
    private String userSecName;
    private String userThirdName;
    private String userRole;
    private Boolean userSex;
    private LocalDate userBday;
}
