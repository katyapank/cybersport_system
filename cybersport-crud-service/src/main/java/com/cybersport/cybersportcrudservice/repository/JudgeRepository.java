package com.cybersport.cybersportcrudservice.repository;

import com.cybersport.cybersportcrudservice.entity.Judge;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface JudgeRepository extends JpaRepository<Judge, UUID> {
}
