const teamsdb = require('../database/teamdb')
const validator = require('./validator')


let teams = {};

teams.registerTeam = (teamdetails)=>{
    let contactno = teamdetails.contactNumber;

    return teamsdb.checkTeam(contactno).then((data)=>{
        if(data){
            throw new Error('Registered !');
            
        }else{
            if(validator.validateContactNo(teamdetails.contactNumber)){
                throw new Error('Please enter a correct contact number');
            }
            else if (validator.validateTheme(teamdetails.theme)){
                throw new Error ("invalid theme")
            }else if (validator.validateTeamSize(teamdetails.teamSize)){
                throw new Error ('invalide team size')
            }else{
               return teamsdb.generateId(teamdetails).then(isId=>{
                    if(isId){
                        return teamsdb.registerTeam(teamdetails).then((result)=>{
                            console.log(result)
                            if(result){
                                return result
                            }else{
                                throw new Error('Some error occured during registration')
                                
                            }
                        })
                    }
                })
            }
        }
    })
};



module.exports = teams;