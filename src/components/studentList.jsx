import styles from './studentList.module.css'
import React from 'react';
import studentsData from './../data/students.json'; // Adjust the import path based on your project structure

function StudentList() {
  return (
    <div className={styles.student} >
      <h2>Student List</h2>
      <ul>
        {studentsData.map((student) => (
          <li key={student.id}>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Courses: {student.courses.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
  
  export default StudentList;
