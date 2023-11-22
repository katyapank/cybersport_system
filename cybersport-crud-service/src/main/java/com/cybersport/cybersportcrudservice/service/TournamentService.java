package com.cybersport.cybersportcrudservice.service;

import com.cybersport.cybersportcrudservice.repository.TournamentRepository;
import com.cybersport.cybersportcrudservice.repository.TournamentResultRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
@RequiredArgsConstructor
public class TournamentService {
    @Autowired
    TournamentRepository tournamentRepository;
    @Autowired
    TournamentResultRepository tournamentResultRepository;

}
