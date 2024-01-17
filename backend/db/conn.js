const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_CONNECTION_STRING;
const client = new MongoClient(uri);

const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = { connectToDatabase };
