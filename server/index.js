// Express Application setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let values = []; // In-memory storage for values

// Express route definitions
app.get("/", (req, res) => {
  res.send("Hi");
});

// Get the values from in-memory storage
app.get("/values/all", (req, res) => {
  const result = values.map(row => row.number); // Extract numbers from the in-memory array
  res.send(result); // Send the result back as the response
});

// Insert value into in-memory storage
app.post("/values", (req, res) => {
  if (!req.body.value) {
    return res.send({ working: false });
  }

  // Insert the value into the in-memory array
  values.push({ number: req.body.value });

  res.send({ working: true });
});

// Start the server
app.listen(5000, err => {
  console.log("Listening");
});
