// // Only handle connection to MongoDB
// const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.Vite_MONGODB_CONNECTION_STRING || "";  // Use 'VITE' instead of 'Vite'
// const client = new MongoClient(uri);

// const connectToDatabase = async () => {
//     try {
//         await client.connect();
//         console.log('Connected to MongoDB');
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//     }
// };

// module.exports = { connectToDatabase, client };  // Export 'client' for reuse in other files
const mongoose = require('mongoose')
const connectToDatabase = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(uri)
        .then(() => console.log('connected to mongoDB :file_cabinet:'))
        .catch((err) => {
            console.error('failed to connect with mongo');
            console.error(err);
        });
    }
module.exports = connectToDatabase;