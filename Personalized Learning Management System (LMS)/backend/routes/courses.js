// const express = require('express');
// const router = express.Router();
// const Course = require('../models/Course');
// const User = require('../models/User');

// // Get all courses
// router.get('/', async (req, res) => {
//     try {
//         const courses = await Course.find().populate('instructor').populate('students');
//         res.json(courses);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// // Create a new course
// router.post('/', async (req, res) => {
//     const course = new Course(req.body);
//     try {
//         const newCourse = await course.save();
//         res.status(201).json(newCourse);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// // Enroll a student in a course
// router.post('/enroll', async (req, res) => {
//     const { courseId, studentId } = req.body;
//     try {
//         const course = await Course.findById(courseId);
//         const student = await User.findById(studentId);

//         if (!course || !student) {
//             return res.status(404).json({ message: 'Course or Student not found' });
//         }

//         course.students.push(studentId);
//         await course.save();

//         res.json(course);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// module.exports = router;

const Course = require("../models/Course");

const seedCourses = async () => {
    const courses = [
        {
            title: "Introduction to Web Development",
            description: "Learn the basics of HTML, CSS, and JavaScript to start your journey into web development.",
            instructor: "John Doe",
            category: "Web Development",
            duration: 10,
            lessons: 15,
            level: "Beginner",
            price: 49.99,
            language: "English",
            rating: 4.8,
            studentsEnrolled: 1200
        },
        {
            title: "React for Beginners",
            description: "Learn React from scratch, including JSX, components, props, and state.",
            instructor: "Jane Smith",
            category: "Frontend Development",
            duration: 12,
            lessons: 20,
            level: "Intermediate",
            price: 59.99,
            language: "English",
            rating: 4.7,
            studentsEnrolled: 900
        }
        // Add more course objects as needed
    ];

    try {
        await Course.insertMany(courses);
        console.log('Courses seeded successfully!');
    } catch (err) {
        console.error('Error seeding courses:', err.message);
    }
};

seedCourses();
