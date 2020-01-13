
const express = require('express');

const user = require('../services/user')

const router = express.Router();

router.post('/register', (req, res, next)=>{
    console.log(req.body);
    
   user.registerTeam(req.body).then((data)=>{
        if(data){
            console.log(data);
            res.send("team has been registered")
        }
    }).catch((err)=>{
        console.log(err.stack)
        res.send(err.message)
    })
})

module.exports = router;