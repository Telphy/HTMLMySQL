const express = require('express')
const path = require('path')
const app = express()
const connection = require('./dbconnection')

app.use(express.static('./public'))


//localhost:5000/bd
app.get('/bd', function (req, res) {
    connection.query('select * from city', function(err,result){
        if(err){
            console.log(err)
        }
        else {
            res.json(result)
        }
    })
})

 
app.get('/', function (req, res) {
    es.sendFile(path.join(__dirname, './public/index.html'))
  })
 
const port = 5000   

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

//nom install --save express path mysql2 dotenv
//npm install express nodemon --save-dev
//npm start
