package com.cybersport.cybersportcrudservice.repository;

import com.cybersport.cybersportcrudservice.entity.Team;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TeamRepository extends JpaRepository<Team, UUID> {
}
