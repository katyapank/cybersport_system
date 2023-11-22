package com.cybersport.cybersportcrudservice.service;

import com.cybersport.cybersportcrudservice.repository.GameRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
@RequiredArgsConstructor
public class GameService {
    @Autowired
    GameRepository gameRepository;

}
