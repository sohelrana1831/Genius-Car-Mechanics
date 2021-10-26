const express = require('express');
const cors = require('cors')
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.esrwv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();

        const database = client.db("carMechanics");
        const servicesCollection = database.collection("services");
        // GET API
        app.get('/services', async(req, res) => {
            const cursor = servicesCollection.find({});
            const services = await cursor.toArray();
            res.send(services)
        });
        // GET SINGLE API
        app.get('/services/:id', async(req, res) => {
            const id = req.params.id;
            console.log("get id", id)
            const query = { _id: ObjectId(id) }
            const service = await servicesCollection.findOne(query);
            res.json(service)
        });
        // POST API
        app.post('/services', async(req, res) => {
            const service = req.body;

            const result = await servicesCollection.insertOne(service)

            res.json(result)
        });

        // DELETE SINGLE API
        app.delete('/services/:id', async(req, res) => {
            const id = req.params.id;
            console.log("get id", id)
            const query = { _id: ObjectId(id) }
            const service = await servicesCollection.deleteOne(query);
            res.json(service)
        });

    } finally {
        // await client.close();
    }
}
run().catch(console.dir);


app.get('', (req, res) => {
    res.send("Hello, Server")
});

app.listen(port, () => {
    console.log(`Serves is listening http://localhost:${port}`);
})