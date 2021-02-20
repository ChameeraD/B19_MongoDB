const express = require("express");
var router = express.Router();

var dbConn = require("../dbConnection/dbConnection");

dbConn
  .then((client) => {
    const db = client.db("test");
    const notesCollection = db.collection("notes");
    // Add a New Note
    router.post("/addNew", function (req, res) {
      quotesCollection
        .insertOne(req.body)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => console.error(error));
    });

    //get All Records
    router.get("/", (req, res) => {
      db.collection("notes")
        .find()
        .toArray()
        .then((results) => {
          console.log(results);
        })
        .catch((error) => console.error(error));
    });
  })
  .catch((error) => console.error(error));

module.exports = router;
