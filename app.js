const { response } = require('express');
const express = require('express');
const { status } = require('express/lib/response');
const port = 3000;
const app = express ();
app.use(express.json());  

app.listen(port, () => {
    console.log("Server Listening on PORT:", port);
  });

  app.get("/status", (request, response) => {
    const status = {
        "Status": "Running"
    };

    response.send(status);
  })