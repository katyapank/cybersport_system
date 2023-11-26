package com.cybersport.cybersportcrudservice.service;

import com.cybersport.cybersportcrudservice.entity.Team;
import com.cybersport.cybersportcrudservice.entity.User;
import com.cybersport.cybersportcrudservice.exception.TeamNotFoundException;
import com.cybersport.cybersportcrudservice.repository.TeamRepository;
import com.cybersport.cybersportcrudservice.repository.UserRepository;
import com.cybersport.cybersportcrudservice.utilsSecurity.Crypt;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@AllArgsConstructor
@RequiredArgsConstructor
public class TeamService {
    @Autowired
    TeamRepository teamRepository;
    @Autowired
    UserRepository userRepository;
    public List<Team> getAllTeams(){
        return teamRepository.findAll();
    }
    public Optional<Team> getTeamById(UUID id){
        return teamRepository.findById(id);
    }
    public Optional<Team> getTeamByName(String name){
        return teamRepository.findByTeamName(name);
    }
    public Team getTeamByToken(String jws){
        int i = jws.lastIndexOf('.');
        String withoutSignature = jws.substring(0, i + 1);
        Claims claims = (Claims)Jwts.parser().parse(withoutSignature).getBody();
        String login = (String) claims.get("login");
        return teamRepository.findByTeamLogin(login).get();
    }
    @Transactional
    public UUID registrationTeam(Team team){
        List<User> users = team.getTeamUser();
        userRepository.saveAll(users);
        team.setTeamUser(users);
        team.setTeamPassword(Crypt.hash(team.getTeamPassword()));
        team.setTeamLossCount(0);
        team.setTeamWinCount(0);
        return teamRepository.save(team).getTeamId();
    }
    @Transactional
    public Map<String, Object> loginTeam(Map<String, String> team){
        String login = team.get("teamLogin");
        Optional<Team> person = teamRepository.findByTeamLogin(login);
        System.out.println(login);
        String password = person.get().getTeamPassword();

        if (!Crypt.verifyAndUpdateHash(team.get("teamPassword"), password))
            throw new TeamNotFoundException("Password invalid");

        String token = Jwts.builder()
                .setSubject("team")
                .claim("kid", "id")
                .claim("login", person.get().getTeamLogin())
                .claim("subject", person.get().getTeamSubject())
                .setExpiration(new Date(System.currentTimeMillis() + 1800000000))
                .compact();
        Map<String, Object> map = Map.of("token", token);
        Map<String, Object> newMap = new HashMap<>(map);
        newMap.put("teamId", person.get().getTeamId());
        newMap.put("teamName", person.get().getTeamName());
        newMap.put("teamUser", person.get().getTeamUser());
        newMap.put("teamDescription", person.get().getTeamDescription());
        newMap.put("teamSubject", person.get().getTeamSubject());
        newMap.put("teamPhoto", person.get().getTeamPhoto());
        newMap.put("teamLogin", person.get().getTeamLogin());
        newMap.put("teamPassword", team.get("teamPassword"));
        newMap.put("teamWinCount", person.get().getTeamWinCount());
        newMap.put("teamLossCount", person.get().getTeamLossCount());
        return newMap;
    }
    @Transactional
    public ResponseEntity<Team> editTeam(String token, Team team) {
        Team team1 = getTeamByToken(token);
        team1.setTeamName(team.getTeamName());
        team.setTeamUser(team.getTeamUser());
        team1.setTeamDescription(team.getTeamDescription());
        team1.setTeamSubject(team.getTeamSubject());
        team1.setTeamPhoto(team.getTeamPhoto());
        team1.setTeamLogin(team.getTeamLogin());
        team1.setTeamPassword(team.getTeamPassword());
        team1.setTeamWinCount((team.getTeamWinCount()));
        team1.setTeamLossCount((team.getTeamLossCount()));
        return ResponseEntity.ok().build();
    }
}
