package com.cybersport.cybersportcrudservice.entity.dto;

import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class MVPDto {
    List<String> gameFeatures;
    List<String> gameMetrics;
    List<String> gameT1P1;
    List<String> gameT1P2;
    List<String> gameT1P3;
    List<String> gameT1P4;
    List<String> gameT1P5;
    List<String> gameT2P1;
    List<String> gameT2P2;
    List<String> gameT2P3;
    List<String> gameT2P4;
    List<String> gameT2P5;
}
