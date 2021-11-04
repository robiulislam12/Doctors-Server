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


async function run(){

  try{
      await client.connect();
      console.log('connect successfully')
  }
  finally{
    // await client.close()
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