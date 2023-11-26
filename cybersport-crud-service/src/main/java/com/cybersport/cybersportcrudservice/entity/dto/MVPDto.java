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

    List<Integer> gameMetrics;
    List<Integer> gameT1P1;
    List<Integer> gameT1P2;
    List<Integer> gameT1P3;
    List<Integer> gameT1P4;
    List<Integer> gameT1P5;
    List<Integer> gameT2P1;
    List<Integer> gameT2P2;
    List<Integer> gameT2P3;
    List<Integer> gameT2P4;
    List<Integer> gameT2P5;
}
