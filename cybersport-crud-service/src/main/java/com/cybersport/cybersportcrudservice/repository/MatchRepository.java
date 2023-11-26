package com.cybersport.cybersportcrudservice.repository;

import com.cybersport.cybersportcrudservice.entity.Match;
import com.cybersport.cybersportcrudservice.entity.dto.MVPDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;
import java.util.UUID;

public interface MatchRepository extends JpaRepository<Match, UUID> {
    @Query(value = "SELECT * FROM matches o WHERE o.match_judge=?1", nativeQuery = true)
    Optional<Match> findMatchByJudgeId(UUID id);


    @Query(value = "SELECT new com.cybersport.cybersportcrudservice.entity.dto.MVPDto(games.gameAddFeatures as gameFeatures, games.gameAddWeights as gameMetrics,\n" +
            "matches.matchTeam1P1 as gameT1P1, matches.matchTeam1P2 as gameT1P2, matches.matchTeam1P3 as gameT1P3, matches.matchTeam1P4 as gameT1P4, matches.matchTeam1P5 as gameT1P5,\n" +
            "matches.matchTeam2P1 as gameT2P1, matches.matchTeam2P2 as gameT2P2, matches.matchTeam2P3 as gameT2P3, matches.matchTeam2P4 as gameT2P4, matches.matchTeam2P5 as gameT2P5) \n" +
            "FROM Match matches join Game games on matches.matchGame = games where matches.matchId = ?1")
    MVPDto findResultMVP(UUID id);
}
