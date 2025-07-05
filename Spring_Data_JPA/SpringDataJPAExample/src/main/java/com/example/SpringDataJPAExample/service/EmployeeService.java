package com.example.SpringDataJPAExample.service;

import com.example.SpringDataJPAExample.entity.Employee;
import com.example.SpringDataJPAExample.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    public void addEmployee(Employee employee) {
        employeeRepository.save(employee);
    }
}
