package com.cybersport.cybersportcrudservice.controller;

import com.cybersport.cybersportcrudservice.service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/team")
public class TeamController {
    @Autowired
    private TeamService teamService;
}
