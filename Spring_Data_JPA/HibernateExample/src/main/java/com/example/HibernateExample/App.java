package com.example.HibernateExample;

public class App {
    public static void main(String[] args) {
        EmployeeDAO dao = new EmployeeDAO();

        Employee emp = new Employee();
        emp.setName("Tarun");
        emp.setRole("Developer");

        dao.addEmployee(emp);
        System.out.println("Employee saved!");
    }
}
