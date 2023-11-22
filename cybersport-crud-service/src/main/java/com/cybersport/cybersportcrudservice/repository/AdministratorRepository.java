package com.cybersport.cybersportcrudservice.repository;

import com.cybersport.cybersportcrudservice.entity.Administrator;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AdministratorRepository extends JpaRepository<Administrator, UUID> {
}
