const projectService = require('../Services/projectService');

// Controller function to get projects (restaurants)
const getProjects = async (req, res) => {
    try {
        const projects = await projectService.getProjects();
        res.json(projects);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving projects');
    }
};

// Controller function to create a project (restaurant)
const createProject = async (req, res) => {
    try {
        const project = await projectService.createProject(req.body);
        res.json(project);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error creating project');
    }
};

module.exports = {
    getProjects,
    createProject,
};
