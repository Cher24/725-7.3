const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Importing Routes
let projectsRoute = require('./Routes/projects');
app.use('/api/projects', projectsRoute);

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
