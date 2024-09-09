// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Database Connection
// mongoose.connect('mongodb://localhost:27017/lms', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log(err));

// // Routes
// const usersRouter = require('./routes/users');
// const coursesRouter = require('./routes/courses');
// app.use('/users', usersRouter);
// app.use('/courses', coursesRouter);

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();

// Routes
const usersRouter = require('./routes/users');
const coursesRouter = require('./routes/courses');
app.use('/users', usersRouter);
app.use('/courses', coursesRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
