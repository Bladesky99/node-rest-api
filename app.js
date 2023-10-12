const { response } = require('express');
const express = require('express');
const { status } = require('express/lib/response');
const MongoClient = require('mongodb').MongoClient;
const port = 3000;
const app = express ();  
app.use(express.json());  

app.listen(port, () => {
    console.log("Server Listening on PORT:", port);
  });

const characters = [
  {id: 1, name: "John"},
  {id: 2, name:"Jane"},
  {id: 3, name:"David"},
];

app.get("/status", (request, response) => {
  const status = {
      "Status": "Running"
  };

  response.send(status);
})

app.get("/characters", (req, res) => {
  res.send(characters);
})

app.post("/characters", (req, res) => {
  const character = {
    id: characters.length + 1, 
    name: req.body.name
  };
  characters.push(characters);
  res.send(characters);
})

  