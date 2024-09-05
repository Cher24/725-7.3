const express = require('express');
const router = express.Router();
const projectsController = require('../Controllers/projectsController');


// Route to get all projects (restaurants)
router.get('/', (req, res) => {
    projectsController.getProjects(req, res);
});

// Route to add a new project (restaurant)
router.post('/', (req, res) => {
    projectsController.createProject(req, res);
});

// Example route with /myprojects
router.get('/myprojects', (req, res) => {
    res.send('This is the /api/projects/myprojects route');
});

module.exports = router;
