import React, { useState, useEffect } from 'react';

function EnrollForm() {
    const [courses, setCourses] = useState([]);
    const [students, setStudents] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [selectedStudent, setSelectedStudent] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(response => response.json())
            .then(data => setCourses(data));

        fetch('http://localhost:5000/users')
            .then(response => response.json())
            .then(data => setStudents(data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/courses/enroll', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ courseId: selectedCourse, studentId: selectedStudent })
        })
            .then(response => response.json())
            .then(data => {
                alert('Enrollment successful!');
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Course:</label>
                <select onChange={(e) => setSelectedCourse(e.target.value)} value={selectedCourse}>
                    <option value="">Select a course</option>
                    {courses.map(course => (
                        <option key={course._id} value={course._id}>{course.title}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Student:</label>
                <select onChange={(e) => setSelectedStudent(e.target.value)} value={selectedStudent}>
                    <option value="">Select a student</option>
                    {students.map(student => (
                        <option key={student._id} value={student._id}>{student.name}</option>
                    ))}
                </select>
            </div>
            <button type="submit">Enroll</button>
        </form>
    );
}

export default EnrollForm;
