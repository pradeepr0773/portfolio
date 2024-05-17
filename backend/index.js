// app.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/contact'; // Use the same database name as mentioned earlier
mongoose.connect(mongoURI );

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define Mongoose Schemas and Models
const FormDataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
});

const FormData = mongoose.model('FormData', FormDataSchema);

app.post('/submit', async (req, res) => {
    const { name, email, subject } = req.body;

    const formData = new FormData({ name, email, subject });

    try {
        await formData.save();
        res.status(200).send('Form data submitted successfully');
    } catch (error) {
        console.error('Error submitting form data:', error);
        res.status(500).send('Error submitting form data');
    }
});
// Define Mongoose Schema and Model for Project
const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    skills: { type: String, required: true },
});

const Project = mongoose.model('Project', projectSchema);

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the form submission page');
});

// Get all projects
app.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find({}, 'name skills');
        res.json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ message: 'Error fetching projects' });
    }
});

// Get a single project by ID
app.get('/projects/:id', async (req, res) => {
    const projectId = req.params.id;
    try {
        const project = await Project.findById(projectId);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(project);
    } catch (error) {
        console.error('Error fetching project by ID:', error);
        res.status(500).json({ message: 'Error fetching project' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
