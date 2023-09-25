const { response } = require('express');
const express = require('express');
const { status } = require('express/lib/response');
const app = express ();
app.use(express.json());  

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", port);
  });

  app.get("/status", (request, response) => {
    const status = {
        "Status": "Running"
    };

    response.send(status);
  })