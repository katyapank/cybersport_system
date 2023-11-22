package com.cybersport.cybersportcrudservice.service;

import com.cybersport.cybersportcrudservice.repository.TeamRepository;
import com.cybersport.cybersportcrudservice.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
@RequiredArgsConstructor
public class TeamService {
    @Autowired
    TeamRepository teamRepository;
    @Autowired
    UserRepository userRepository;
}
