package com.cybersport.cybersportcrudservice.repository;

import com.cybersport.cybersportcrudservice.entity.Match;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;
import java.util.UUID;

public interface MatchRepository extends JpaRepository<Match, UUID> {
    @Query(value = "SELECT * FROM matches o WHERE o.match_judge=?1", nativeQuery = true)
    Optional<Match> findMatchByJudgeId(UUID id);

    //@Query(value = "SELECT * from ")
}
