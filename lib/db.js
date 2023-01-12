import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
    const client = await MongoClient.connect('mongodb+srv://pampam:dZ5qAusaempN@cluster0.7olgyox.mongodb.net/auth-demo?retryWrites=true&w=majority');

    return client;
};