package com.cybersport.cybersportcrudservice.controller;

import com.cybersport.cybersportcrudservice.entity.Judge;
import com.cybersport.cybersportcrudservice.service.JudgeService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(path = "api/judge")
public class JudgeController {
    @Autowired
    private JudgeService judgeService;
    @GetMapping
    public List<Judge> getAllJudge(){
        return judgeService.getAllJudge();
    }
    @GetMapping("/{token}")
    public Judge getJudgeByToken(@PathVariable String token){
        return judgeService.getJudgeByToken(token);
    }
    @PostMapping("/login")
    public Map<String, Object> loginJudge(@RequestBody @Valid Map<String, String> judge){
        return judgeService.loginJudge(judge);
    }
}
