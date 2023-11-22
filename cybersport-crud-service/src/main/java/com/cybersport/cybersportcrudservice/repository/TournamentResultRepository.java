package com.cybersport.cybersportcrudservice.repository;

import com.cybersport.cybersportcrudservice.entity.TournamentResult;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TournamentResultRepository extends JpaRepository<TournamentResult, UUID> {
}
