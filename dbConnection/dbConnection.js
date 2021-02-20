const MongoClient = require('mongodb').MongoClient

const  connectionString = ''

var dbConn = MongoClient.connect(connectionString, { useUnifiedTopology: true })

dbConn.then(client => {
    console.log('Connected to Database')
  })
  .catch(error => console.error(error))

module.exports = dbConn;


