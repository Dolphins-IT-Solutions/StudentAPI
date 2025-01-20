package com.api.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/students")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/view")
    public List<Student> getAllStudents(){
        return studentService.getAllStudents();
    }

    @PostMapping("/add")
    public Student addStudent(@RequestBody Student student){
        return studentService.addStudent(student);
    }

    @PutMapping("/update")
    public Student updateStudent(@RequestBody Student student){
        return studentService.updateStudent(student);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteStudent(@PathVariable Long id){
        studentService.deleteStudent(id);
    }
}
