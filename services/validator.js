

var validator = {}

validator.validateTeamSize = (teamSize)=>{
    console.log(teamSize)
    if(teamSize < 3){
        return true
    }else{
        return false;
    }
};

validator.validateContactNo = (contactNo)=>{
    
    if(new String(contactNo).length !=10){
        return true
    }
};

validator.validateTheme = (theme)=>{

    themeArry = ["robotics", "waste management", "wastmanagment", 'smart vehicle', 'smartvehicle']

    if(themeArry.includes(theme.toLowerCase())){
        return false
    }else{
        return true;
    }
}

module.exports = validator;