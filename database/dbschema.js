const mongoose = require('mongoose')

const schema = mongoose.Schema;
//connecting to monodb server with hackfest database
mongoose.connect('mongodb://localhost:27017/hackfest').then(
    (result)=>{
        console.log('connected sucessfully!')
    }).catch(
        (err)=>{
            console.log('connection failed with database', err)
        }
    )
const teamSchema = new schema({

    teamId: {
        type: Number,
        require: true
    },

    name: {
        type: String,
        required: true
    },
    theme:{
        type: String,
        required: true
    },
    contactNumber: {
        type: Number,
        required: true
    },

    teamSize:{
        type:Number,
        required: true
    },
    edition:{
        type: String,
        required: true
    }


})


module.exports = mongoose.model('team', teamSchema)//create collection with name teams in mogodb