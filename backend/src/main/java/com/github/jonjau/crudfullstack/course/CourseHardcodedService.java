package com.github.jonjau.crudfullstack.course;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

/**
 * CourseHardcodedService
 */
@Service
public class CourseHardcodedService {

    private static List<Course> courses = new ArrayList<>();
    private static long idCounter = 0;

    // a static block is only run once
    static {
    courses.add(new Course(++idCounter, "in28minutes",
        "Learn Full stack with Spring Boot and Angular"));
    courses.add(new Course(++idCounter, "in28minutes",
        "Learn Full stack with Spring Boot and React"));
    courses.add(new Course(++idCounter, "in28minutes",
        "Master Microservices with Spring Boot and Spring Cloud"));
    courses.add(new Course(++idCounter, "in28minutes",
        "Deploy Spring Boot Microservices to Cloud with Docker"));
    }

    public List<Course> findAll() {
        return courses;
    }
}