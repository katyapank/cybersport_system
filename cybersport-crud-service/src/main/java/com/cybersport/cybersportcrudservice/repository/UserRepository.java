package com.cybersport.cybersportcrudservice.repository;

import com.cybersport.cybersportcrudservice.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
}
