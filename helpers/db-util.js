import { MongoClient } from 'mongodb';
export const connectDataBase = async () => {
    const client = await MongoClient.connect(
        'mongodb+srv://kaydrechsler:Y5IH8O6AjMAQM0tU@cluster0.pma8psh.mongodb.net/events?retryWrites=true&w=majority&appName=Cluster0'
    );

    return client;
};

export const insertDocument = async (client, collection, document) => {
    const db = client.db();

    const result = await await db.collection(collection).insertOne(document);

    return result;
};

export const getAllDocuments = async (client, collection, sort, filter = {}) => {
    const db = client.db();

    const documents = await db
        .collection(collection)
        .find(filter)
        .sort(sort)
        .toArray();

    return documents;
};