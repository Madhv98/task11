import './courseList.module.css'
import React, { useState } from 'react'
import coursesData from './../data/courses.json'// Adjust the import path based on your project structure

function CourseList() {
    const [filter, setFilter] = useState('')
  
    // Filter the courses based on instructor names
    const filteredCourses = coursesData.filter((course) =>
      course.instructor.toLowerCase().includes(filter.toLowerCase())
    );
  
    return (
      <div>
        <h2>Course List</h2>
        <input
          type="text"
          placeholder="Filter by Instructor"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <ul>
          {filteredCourses.map((course) => (
            <li key={course.id}>
              <p>Name: {course.name}</p>
              <p>Instructor: {course.instructor}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default CourseList
