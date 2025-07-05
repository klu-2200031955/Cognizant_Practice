package com.example.HibernateExample;

import org.hibernate.*;
import org.hibernate.cfg.Configuration;

public class EmployeeDAO {
    private static SessionFactory factory;

    static {
        factory = new Configuration().configure().buildSessionFactory();
    }

    public Integer addEmployee(Employee employee) {
        Session session = factory.openSession();
        Transaction tx = null;
        Integer employeeId = null;
        try {
            tx = session.beginTransaction();
            employeeId = (Integer) session.save(employee);
            tx.commit();
        } catch (Exception e) {
            if (tx != null) tx.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
        return employeeId;
    }
}
