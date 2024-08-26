const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://chermod2011:mWF9GqomiyBEpLpo@cluster0.e8lf4.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Function to get projects (CRUD - Read)
const getProjects = async () => {
    await client.connect();
    const database = client.db('sample_restaurants');  // Change to your actual database name
    const collection = database.collection('restaurants'); // Change to your actual collection name
    const projects = await collection.find().toArray();
    await client.close();
    return projects;
};

// Function to create a project (CRUD - Create)
const createProject = async (projectData) => {
    await client.connect();
    const database = client.db('sample_restaurants');
    const collection = database.collection('restaurants');
    const result = await collection.insertOne(projectData);
    await client.close();
    return result.ops[0];
};

module.exports = {
    getProjects,
    createProject,
};
