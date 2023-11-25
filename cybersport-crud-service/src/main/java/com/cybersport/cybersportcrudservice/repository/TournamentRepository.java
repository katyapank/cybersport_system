package com.cybersport.cybersportcrudservice.repository;

import com.cybersport.cybersportcrudservice.entity.Tournament;
import com.cybersport.cybersportcrudservice.entity.dto.ResultTableDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface TournamentRepository extends JpaRepository<Tournament, UUID> {
    @Query(nativeQuery = true)
    List<ResultTableDto> findResultTable(UUID tournament_id);
}
