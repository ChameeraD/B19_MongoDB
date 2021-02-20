const MongoClient = require('mongodb').MongoClient

const  connectionString = 'mongodb+srv://testdb:adminadmin@cluster0.cuebl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

var dbConn = MongoClient.connect(connectionString, { useUnifiedTopology: true })

dbConn.then(client => {
    console.log('Connected to Database')
  })
  .catch(error => console.error(error))

module.exports = dbConn;


