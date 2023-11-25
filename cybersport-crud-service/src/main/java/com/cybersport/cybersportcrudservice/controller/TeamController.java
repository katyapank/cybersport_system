package com.cybersport.cybersportcrudservice.controller;

import com.cybersport.cybersportcrudservice.entity.Team;
import com.cybersport.cybersportcrudservice.service.TeamService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping(path = "api/team")
public class TeamController {
    @Autowired
    private TeamService teamService;
    @GetMapping
    public List<Team> getAllTeams(){
        return teamService.getAllTeams();
    }
    @GetMapping("/search/{id}")
    public Optional<Team> getTeamById(@PathVariable("id") UUID id){
        return teamService.getTeamById(id);
    }
    @GetMapping("/{token}")
    public Team getTeamByToken(@PathVariable String token){
        return teamService.getTeamByToken(token);
    }
    @PostMapping("/registration")
    public UUID registrationTeam(@RequestBody @Valid Team team){
        return teamService.registrationTeam(team);
    }
    @PostMapping("/login")
    public Map<String, Object> loginUser(@RequestBody @Valid Map<String, String> team){
        return teamService.loginTeam(team);
    }
    @PatchMapping("/{token}")
    public ResponseEntity<Team> editTeam(@PathVariable String token, @RequestBody @Valid Team team){
        return teamService.editTeam(token, team);
    }
}
