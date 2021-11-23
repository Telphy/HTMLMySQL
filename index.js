const express = require('express')
const path = require('path')
const mysql = require('mysql2')
require ('dotenv').config({path: 'private/.env'})
const app = express()

app.use(express.static('./public'))

const connection = mysql.createConnection({
    host:process.env._HOST,
    user:process.env._USER,
    password:process.env._PASSWORD,
    database:process.env._DATABASE,
    port:process.env._PORT,
})

connection.connect(function(err){
    if(err){
        throw err;
    }
    else {
        console.log('connected to database = ' + process.env._DATABASE)
        connection.query('select * from city', function(err,result){
            if(err){
                console.log(err)
            }
            else {
                console.log(result)
            }
        })
    }
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

 
app.get('/:nome', function (req, res) {
    res.send('Hello ' + req.params.nome)
  })
 
const port = 3000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

//nom install --save express path mysql2 dotenv
//npm install express nodemon --save-dev
//npm start
