package com.example.SpringDataJPAExample.controller;

import com.example.SpringDataJPAExample.entity.Employee;
import com.example.SpringDataJPAExample.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping
    public ResponseEntity<?> createEmployee(@RequestBody Employee employee) {
        employeeService.addEmployee(employee);
        return ResponseEntity.ok("Employee added successfully");
    }
}
