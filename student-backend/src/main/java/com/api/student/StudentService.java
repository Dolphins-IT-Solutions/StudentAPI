package com.api.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepo studentRepo;

    public List<Student> getAllStudents(){
        return studentRepo.findAll();
    }

     public Student addStudent(Student student){
        return studentRepo.save(student);
     }

     public Student updateStudent(Student student){
        return studentRepo.save(student);
     }

     public void deleteStudent(Long id){
        studentRepo.deleteById(id);
     }
}
