
const express = require('express');
 const cors= require('cors');
 require('dotenv').config()
 const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
 const app = express();
const port =process.env.PORT ||5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.z89qnzj.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    
    const productCollection = client.db("shopyDB").collection("product");
    const bandCollection = client.db("shopyDB").collection("brand");
    const cartCollection = client.db("shopyDB").collection("cart");

// get brand  for mongodb server
app.get('/brand',async(req,res)=>{
  const cursor=bandCollection.find();
  const result=await cursor.toArray();
  // console.log(result)
  res.send(result);
});
// get single brand  for mongodb server
app.get('/product/:brandName',async(req,res)=>{
  const brandName = req.params.brandName;
  const cursor = productCollection.find({ brandName });
  const result = await cursor.toArray();
  res.send(result);  
});


  app.post('/addProduct', async (req, res) => {
      const newProduct = req.body;
      // console.log(newProduct);
      const result = await productCollection.insertOne(newProduct);
      res.send(result);
})

//single product data for mongodb server
app.get('/singleProduct/:id',async(req,res)=>{
  const id=req.params.id;
  const query={_id:new ObjectId(id)}
  const result=await productCollection.findOne(query);
  // console.log(result)
  res.send(result);
})
// //single product data for mongodb server
// app.get('/product/:id',async(req,res)=>{
//   const id=req.params.id;
//   const query={_id:new ObjectId(id)}
//   const result=await productCollection.findOne(query);
//   console.log(result)
//   res.send(result);
// })

app.put('/update/:id', async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const updateProduct = req.body;

  const update = {
    $set: {
      name: updateProduct.name,
      brandName: updateProduct.brandName,
      type: updateProduct.type,
      rating: updateProduct.rating,
      price: updateProduct.price,
      image: updateProduct.image,
      description: updateProduct.description,
    },
  };

  const options = { upsert: false };
  const result = await productCollection.updateOne(filter, update, options);
  res.send(result);
});

//add to cart product with email
app.post('/addToCart', async(req, res) => {
  const cardProduct = req.body;
  const result = await cartCollection.insertOne(cardProduct);
  console.log(result);
  res.send(result);
})
// show productfor user email 
app.get('/getCartItems/:userEmail', async (req, res) => {
  const userEmail = req.params.userEmail;
  const query = { email: userEmail };
  const cursor = cartCollection.find(query);
  const result = await cursor.toArray();
  res.json(result);
});
//delete data for mongodb server
app.delete('/delete/:id',async(req,res)=>{
  const id=req.params.id;
  const query={_id:id}
  const result=await cartCollection.deleteOne(query);
  console.log(result);
  res.send(result);

})


    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Shopy server is running');
  })
  
  app.listen(port, () => {
    console.log(`Shopy server is running ${port}`);
  })

