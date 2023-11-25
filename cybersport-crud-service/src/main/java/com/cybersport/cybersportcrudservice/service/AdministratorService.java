package com.cybersport.cybersportcrudservice.service;

import com.cybersport.cybersportcrudservice.entity.Administrator;
import com.cybersport.cybersportcrudservice.entity.Judge;
import com.cybersport.cybersportcrudservice.exception.TeamNotFoundException;
import com.cybersport.cybersportcrudservice.repository.AdministratorRepository;
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
public class AdministratorService {
    @Autowired
    AdministratorRepository adminRepository;
    @Autowired
    JudgeRepository judgeRepository;
    /**Тестовый метод**/
    public List<Administrator> getAllAdmins(){
        return adminRepository.findAll();
    }
    public Administrator getAdminByToken(String jws){
        int i = jws.lastIndexOf('.');
        String withoutSignature = jws.substring(0, i + 1);
        Claims claims = (Claims)Jwts.parser().parse(withoutSignature).getBody();
        String login = (String) claims.get("login");
        return adminRepository.findByAdminLogin(login).get();
    }
    @Transactional
    public UUID registrationAdmin(Administrator admin) {
        admin.setAdminPassword(Crypt.hash(admin.getAdminPassword()));
        return adminRepository.save(admin).getAdminId();
    }
    @Transactional
    public Map<String, Object> loginAdmin(Map<String, String> admin){
        String login = admin.get("adminLogin");
        Optional<Administrator> person = adminRepository.findByAdminLogin(login);
        String password = person.get().getAdminPassword();

        if (!Crypt.verifyAndUpdateHash(admin.get("adminPassword"), password))
            throw new TeamNotFoundException("Password invalid");

        String token = Jwts.builder()
                .setSubject("judge")
                .claim("kid", "id")
                .claim("login", person.get().getAdminLogin())
                .setExpiration(new Date(System.currentTimeMillis() + 1800000000))
                .compact();
        Map<String, Object> map = Map.of("token", token);
        Map<String, Object> newMap = new HashMap<>(map);
        newMap.put("adminId", person.get().getAdminId());
        newMap.put("adminFirstName", person.get().getAdminFirstName());
        newMap.put("adminLastName", person.get().getAdminLastName());
        newMap.put("adminPatronymic", person.get().getAdminPatronymic());
        newMap.put("adminLogin", person.get().getAdminLogin());
        newMap.put("adminPassword", admin.get("adminPassword"));
        return newMap;
    }
    @Transactional
    public UUID registrationJudge(Judge judge) {
        judge.setJudgePassword(Crypt.hash(judge.getJudgePassword()));
        return judgeRepository.save(judge).getJudgeId();
    }

}
