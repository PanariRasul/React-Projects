import React from 'react';
import CourseList from './components/CourseList';
import UserList from './components/UserList';
import EnrollForm from './components/EnrollForm';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Personalized Learning Management System</h1>
            <h2>Courses</h2>
            <CourseList />
            <h2>Users</h2>
            <UserList />
            <h2>Enroll in Course</h2>
            <EnrollForm />
        </div>
    );
}

export default App;
