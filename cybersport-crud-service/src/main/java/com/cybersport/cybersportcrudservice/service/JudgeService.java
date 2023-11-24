package com.cybersport.cybersportcrudservice.service;

import com.cybersport.cybersportcrudservice.entity.Judge;
import com.cybersport.cybersportcrudservice.entity.Team;
import com.cybersport.cybersportcrudservice.exception.TeamNotFoundException;
import com.cybersport.cybersportcrudservice.repository.JudgeRepository;
import com.cybersport.cybersportcrudservice.utilsSecurity.Crypt;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@AllArgsConstructor
@RequiredArgsConstructor
public class JudgeService {
    @Autowired
    JudgeRepository judgeRepository;
    /**Тестовый метод**/
    public List<Judge> getAllJudge(){
        return judgeRepository.findAll();
    }
    public Judge getJudgeByToken(String jws){
        int i = jws.lastIndexOf('.');
        String withoutSignature = jws.substring(0, i + 1);
        Claims claims = (Claims)Jwts.parser().parse(withoutSignature).getBody();
        String login = (String) claims.get("login");
        return judgeRepository.findByJudgeLogin(login).get();
    }
    @Transactional
    public Map<String, Object> loginJudge(Map<String, String> judge){
        String login = judge.get("judgeLogin");
        Optional<Judge> person = judgeRepository.findByJudgeLogin(login);
        String password = person.get().getJudgePassword();

        if (!Crypt.verifyAndUpdateHash(judge.get("judgePassword"), password))
            throw new TeamNotFoundException("Password invalid");

        String token = Jwts.builder()
                .setSubject("judge")
                .claim("kid", "id")
                .claim("login", person.get().getJudgeLogin())
                .claim("subject", person.get().getJudgeSubject())
                .claim("nickname", person.get().getJudgeNickname())
                .setExpiration(new Date(System.currentTimeMillis() + 1800000000))
                .compact();
        Map<String, Object> map = Map.of("token", token);
        Map<String, Object> newMap = new HashMap<>(map);
        newMap.put("judgeId", person.get().getJudgeId());
        newMap.put("judgeFirstName", person.get().getJudgeFirstName());
        newMap.put("judgeLastName", person.get().getJudgeLastName());
        newMap.put("judgePatronymic", person.get().getJudgePatronymic());
        newMap.put("judgeNickname", person.get().getJudgeNickname());
        newMap.put("judgePost", person.get().getJudgePost());
        newMap.put("judgeRank", person.get().getJudgeRank());
        newMap.put("judgeSubject", person.get().getJudgeSubject());
        newMap.put("judgeBDay", person.get().getJudgeBDay());
        newMap.put("judgeContact", person.get().getJudgeContact());
        newMap.put("judgePhoto", person.get().getJudgePhoto());
        newMap.put("judgeLogin", person.get().getJudgeLogin());
        newMap.put("judgePassword", judge.get("judgePassword"));
        return newMap;
    }
}
