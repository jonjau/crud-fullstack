package com.github.jonjau.crudfullstack.course;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 * CourseController
 */
@CrossOrigin(origins = { "http://localhost:3000" })
@RestController
public class CourseController {

    @Autowired
    private CourseHardcodedService courseManagementService;

    @GetMapping("/instructors/{username}/courses")
    public List<Course> getAllCourses(@PathVariable String username) {
        return courseManagementService.findAll();
    }

    @DeleteMapping("/instructors/{username}/courses/{id}")
    public ResponseEntity<Void> deleteCourse(
            @PathVariable String username,
            @PathVariable long id) {
        
        Course course = courseManagementService.deleteById(id);

        if (course != null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/instructors/{username}/courses/{id}")
    public Course getCourse(
            @PathVariable String username,
            @PathVariable long id) {
        
        return courseManagementService.findById(id);
    }
}