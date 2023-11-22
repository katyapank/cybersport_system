package com.cybersport.cybersportcrudservice.service;

import com.cybersport.cybersportcrudservice.entity.Judge;
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
public class JudgeService {
    @Autowired
    JudgeRepository judgeRepository;
    /**Тестовый метод**/
    public List<Judge> getAllJudge(){
        return judgeRepository.findAll();
    }
    @Transactional
    public UUID addJudge(Judge judge) {
        judge.setJudgePassword(Crypt.hash(judge.getJudgePassword()));
        return judgeRepository.save(judge).getJudgeId();
    }
}
