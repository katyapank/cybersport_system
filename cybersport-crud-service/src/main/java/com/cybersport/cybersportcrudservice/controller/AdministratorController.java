package com.cybersport.cybersportcrudservice.controller;

import com.cybersport.cybersportcrudservice.entity.Administrator;
import com.cybersport.cybersportcrudservice.entity.Judge;
import com.cybersport.cybersportcrudservice.service.AdministratorService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = "api/admin")
public class AdministratorController {
    @Autowired
    private AdministratorService adminService;
    @GetMapping
    public List<Administrator> getAllAdmins(){
        return adminService.getAllAdmins();
    }
    @PostMapping("/registration")
    public UUID registrationAdmin(@RequestBody @Valid Administrator admin){
        return adminService.registrationAdmin(admin);
    }
    @PostMapping("/judge/registration")
    public UUID registrationJudge(@RequestBody @Valid Judge judge){
        return adminService.registrationJudge(judge);
    }
}
