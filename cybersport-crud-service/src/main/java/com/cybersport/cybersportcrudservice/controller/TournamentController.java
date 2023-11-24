package com.cybersport.cybersportcrudservice.controller;

import com.cybersport.cybersportcrudservice.service.TournamentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/tournament")
public class TournamentController {
    @Autowired
    private TournamentService tournamentService;


}
