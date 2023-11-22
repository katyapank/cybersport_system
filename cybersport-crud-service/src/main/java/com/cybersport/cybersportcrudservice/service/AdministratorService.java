package com.cybersport.cybersportcrudservice.service;

import com.cybersport.cybersportcrudservice.entity.Administrator;
import com.cybersport.cybersportcrudservice.repository.AdministratorRepository;
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

    /**Тестовый метод**/
    public List<Administrator> getAllAdmins(){
        return adminRepository.findAll();
    }
    @Transactional
    public UUID addAdmin(Administrator admin) {
        admin.setAdminPassword(Crypt.hash(admin.getAdminPassword()));
        return adminRepository.save(admin).getAdminId();
    }
}
