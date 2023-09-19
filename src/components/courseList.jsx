import styles from './courseList.module.css'
import React, { useState } from 'react'
import coursesData from './../data/courses.json'

function CourseList() {
    const [filter, setFilter] = useState('')
  
    const filteredCourses = coursesData.filter((course) =>
      course.instructor.toLowerCase().includes(filter.toLowerCase())
    );
  
    return (
      <div className={styles.course}>
        <h2>Course Information</h2>
        <input
          type="text"
          placeholder="Filter by Instructor"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />


        <ul>
          {filteredCourses.map((course, index) => (
            <li key={index}>
              <p>Name: {course.name}</p>
              <p>Instructor: {course.instructor}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default CourseList

  