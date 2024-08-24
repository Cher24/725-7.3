const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// MongoDB connection URI
const uri = 'mongodb+srv://chermod2011:mWF9GqomiyBEpLpo@cluster0.e8lf4.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(cors());
app.use(express.json());

// Route to get restaurants by cuisine
app.get('/restaurants/:cuisine', async (req, res) => {
    const cuisineType = req.params.cuisine;

    try {
        await client.connect();
        const database = client.db('sample_restaurants');  // Change to your actual database name
        const collection = database.collection('restaurants'); // Change to your actual collection name

        // Query to find restaurants by cuisine type
        const query = { cuisine: cuisineType };
        const restaurants = await collection.find(query).toArray();

        res.json(restaurants);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving restaurants');
    } finally {
        await client.close();
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
