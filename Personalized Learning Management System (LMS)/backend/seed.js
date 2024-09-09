const mongoose = require('mongoose');
const User = require('./models/User');
const Course = require('./models/Course');
const connectDB = require('./config/db');

// Dummy data
const users = [
    { name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'student' },
    { name: 'Bob Smith', email: 'bob.smith@example.com', role: 'instructor' }
];

const courses = [
    { title: 'Introduction to Computer Science', description: 'Learn the basics of computer science and programming.', instructor: 'Bob Smith', students: [] },
    { title: 'Advanced JavaScript', description: 'Deep dive into JavaScript concepts and modern practices.', instructor: 'Bob Smith', students: [] }
];

// Seed function
const seedDB = async () => {
    await connectDB();

    await User.deleteMany({});
    await Course.deleteMany({});

    await User.insertMany(users);
    await Course.insertMany(courses);

    console.log('Database seeded!');
    mongoose.connection.close();
};

seedDB();
