//External lib import here
const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient } = require('mongodb');


//Initialized an app
const app = express();
const port = process.env.PORT || 5000;


//middleware 
app.use(cors())
app.use(express.json())

/*=========================== Mongo Db Connect =====================*/

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nbyjf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function run() {
  try {
      await client.connect();
      const database = client.db('doctors_portal');
      const appointmentsCollection = database.collection('appointments');
      const userCollection = database.collection('users');

      //Appointments GET API
      app.get('/appointments', async (req, res) => {
          const email = req.query.email;

          const date = new Date(req.query.date).toLocaleDateString();

          const query = { patient_email: email}

          const cursor = appointmentsCollection.find(query);
          const appointments = await cursor.toArray();
          res.json(appointments);

      })
      
      //Appointment POST API
      app.post('/appointments', async (req, res) => {
          const appointment = req.body;
          const result = await appointmentsCollection.insertOne(appointment);
          res.json(result)
      });

      //User POST API
      app.post('/users', async(req, res)=>{
        const user = req.body;
        const result = await userCollection.insertOne(user)
        res.json(user)
      })
      //Special user get
      app.get('/users/:email', async(req, res)=>{
        const email = req.params.email;
        const query = {email: email};
        const user = await userCollection.findOne(query)
        let isAdmin = false;
        if(user?.role === 'admin'){
          isAdmin =true
        }
        res.json({admin: isAdmin})
      })

      //User PUT Method
      app.put('/users', async(req, res)=>{
        const user = req.body;
        const filter = {email: user.email};
        const options = { upsert: true };
        const updateDoc = {$set: user}

        const result = await userCollection.updateOne(filter, updateDoc, options)

        res.json(result)
      })

      //Admin Role Update
      app.put('/users/admin', async (req, res)=>{
        const user = req.body;
        // console.log(user.email, 'put')
        const filter = {email: user.email};

        const updateDoc = {$set: {role: 'admin'}}

        const result = await userCollection.updateOne(filter, updateDoc)

        res.json(result)
      })
  }
  finally {
      // await client.close();
  }
}


run().catch(console.dir);
/*=======================================================================*/


//Initialized a Router
app.get('/', (req, res) => {
  res.send('<h1>Hello Server</h1>')
})

app.listen(port, () => {
  console.log(`Server is running,  http://localhost:${port}`)
})