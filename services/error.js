const fs = require('fs')

let errorLogger = (err, req, res, next)=>{

    if(err){
        fs.writeFile('errorLogger.txt', err.stack, (err1)=>{
            if(err1){
                console.log("Error occured during login")
            }
           
        });
        res.status(500)  //set the status
        res.json({"message": err.message})
    }
    }
    

module.exports = errorLogger;