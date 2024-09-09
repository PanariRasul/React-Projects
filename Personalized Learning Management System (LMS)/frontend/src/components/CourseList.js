import React, { useState, useEffect } from 'react';

function CourseList() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(response => response.json())
            .then(data => setCourses(data));
    }, []);

    return (
        <ul>
            {courses.map(course => (
                <li key={course._id}>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <p>Instructor: {course.instructor.name}</p>
                    <p>Students enrolled: {course.students.length}</p>
                </li>
            ))}
        </ul>
    );
}

export default CourseList;
