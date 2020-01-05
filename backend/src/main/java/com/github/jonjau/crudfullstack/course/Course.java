package com.github.jonjau.crudfullstack.course;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

/**
 * Course
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Course {

	private Long id;
    private String username;
    private String description;
}