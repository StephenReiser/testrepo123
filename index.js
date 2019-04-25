///dependencies

const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const app = express()

const db = mongoose.connection
const PORT = process.env.PORT || 3000


//database

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/' + 'mongoDBNAME' ///ultimately will need to give this a real name


//connect to mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open' , ()=>{});


////////////Middleware/////


app.use(express.static('public'))

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(methodOverride('_method'))

//////////ROutes/////


app.get('/', (request, response) => {
    response.send('Hellow World!')
})

/////////Listener/////


app.listen(PORT, () => {
    console.log('Listening on port:' , PORT)
})