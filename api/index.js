const express = require('express');
// route
// const route = require('./config');
// cors
const cors = require('cors');
//body-parser
const bodyParser = require('body-parser');
//db
const db = require("./config");
// port 
const port = parseInt(process.env.PORT) || 3200;
// Express app
const app = express();

const route = express.Router();

// Middleware
const {errorHandling} = require('./middleware/ErrorHandling');
//
const cookieParser = require('cookie-parser');
/*
express.json: setting the content-type to application/json
bodyParser.urlencoded( {extended: true} ): Object will contain
values of any type instead of just a string
*/
route.get('^/$|/capstoneproject', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
})


app.use((req, res, next)=> {
        res.header('Access-Control-Allow-Origin', '*')
        res.header("Access-Control-Allow-Credentials", "true")
        res.header("Access-Control-Allow-Methods", "*")
        res.header("Access-Control-Allow-Headers", "*")
        next();
});

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
// app.use(route);
// app.use(
//     cors(),
//     cookieParser(),
//     express.json,
//     express.urlencoded({extended: false})
// )

app.get('/', (req,res) => {
    res.send({message: 'Its working'})
})

// Server is running
app.listen(port, ()=> {
    console.log(`Server is running at ${port}`)
});
// Handling all errors
app.use(errorHandling);