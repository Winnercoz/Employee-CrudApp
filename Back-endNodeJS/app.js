const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors')

const { mongoose } = require('./db')
const employeeController = require('./controllers/employeeController')

const app = express();
app.use(cors({ origin: 'http://localhost:3201' }));
app.use(bodyparser.json());

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, DELETE, POST, PUT, OPTIONS'
    );
    next();
})

app.listen(4000, () => console.log('server started at port 4000'));

app.use('/employees', employeeController)