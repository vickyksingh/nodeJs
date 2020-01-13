const express = require('express')
const bodyparsor = require('body-parser')
const router = require('./routing/routing')

const app = express();

app.use(bodyparsor.json());

app.use('/',router)

app.listen(3000, ()=>{

    console.log('node server started')
})


