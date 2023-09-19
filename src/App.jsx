import React from 'react';
import './App.css'; 
import StudentList from './components/studentList'
import CourseList from './components/courseList'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My School</h1>
      </header>
      <main>
        <div className="App-container">
          <StudentList />
          <CourseList />
        </div>
      </main>
    </div>
  );
}

export default App;

