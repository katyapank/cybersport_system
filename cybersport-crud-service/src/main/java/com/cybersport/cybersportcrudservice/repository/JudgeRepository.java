package com.cybersport.cybersportcrudservice.repository;

import com.cybersport.cybersportcrudservice.entity.Judge;
import com.cybersport.cybersportcrudservice.entity.Team;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface JudgeRepository extends JpaRepository<Judge, UUID> {
    Optional<Judge> findByJudgeLogin(String judgeLogin);
}
