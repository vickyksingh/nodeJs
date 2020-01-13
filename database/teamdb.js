const Team = require('./dbschema') //schema class

var teamdb = {};

teamdb.registerTeam = (teamdetails)=>{

    //creating instance 
    const team = new Team({
        teamId : teamdetails.teamId,
        name: teamdetails.name,
        theme: teamdetails.theme,
        contactNumber: teamdetails.contactNumber,
        teamSize: teamdetails.teamSize,
        edition: teamdetails.edition
    });

    //saving to db
   return team.save().then( (data)=>{
       if(data){
           return data;
       }else{
           return null
       }
    })
}

teamdb.checkTeam = (contact)=>{
        return Team.find({contactNumber: contact}).then((result)=>{
            if(result.length >0){
                return true
            }else{
                return false
            }
        })
}

teamdb.generateId = (members)=>{

    return Team.find().distinct('teamId').then((ids)=>{
        //ids is an array of all objectIds
        var bId = Math.max(...ids);

        if(bId > 0){
            members.teamId = bId+1;
        }else{
            members.teamId = 10001
        }
        return true;
    })
}

module.exports = teamdb;

