package com.cybersport.cybersportcrudservice.service;

import com.cybersport.cybersportcrudservice.entity.Administrator;
import com.cybersport.cybersportcrudservice.entity.Judge;
import com.cybersport.cybersportcrudservice.repository.AdministratorRepository;
import com.cybersport.cybersportcrudservice.repository.JudgeRepository;
import com.cybersport.cybersportcrudservice.utilsSecurity.Crypt;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

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
    @Transactional
    public UUID registrationAdmin(Administrator admin) {
        admin.setAdminPassword(Crypt.hash(admin.getAdminPassword()));
        return adminRepository.save(admin).getAdminId();
    }
    @Transactional
    public UUID registrationJudge(Judge judge) {
        judge.setJudgePassword(Crypt.hash(judge.getJudgePassword()));
        return judgeRepository.save(judge).getJudgeId();
    }

}
