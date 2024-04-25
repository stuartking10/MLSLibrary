var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Sports/MLS%20Teams.csv"

var teamName = getColumn(url,1)
var teamLocation= getColumn (url,2)
var teamStadium = getColumn (url,3)
var stadiumCapacity = getColumn (url,4)
var teamConference =getColumn (url,7)
var joined =getColumn (url,5)
var coachName =getColumn (url,6)

function getTeamsInConference(conference){
    var matches= [];
    for (var i = 0; i < teamConference.length; i++) {
        if(teamConference[i].toLowerCase().includes(conference.toLowerCase())){
            matches.push(teamName[i]);
            // It takes the conference as a parameter and gives back the teams in the conference
        }
  
    }
    if (matches.length==0){
        matches.push("this conference does not exist")
    }
   return matches; 
}
// console.log(getTeamsInConference("western"))

function getCity(team) {
    var matches ="that team doesn't exist";
    for (var i = 0; i < teamName.length; i++) {
        if(teamName[i].toLowerCase().includes(team.toLowerCase())){
            matches = teamLocation[i];
        }
// It takes the team as a parameter and gives back the city the team is from
    }
   return matches;
    
}
// console.log (getCity("charlotte FC")) 
// console.log (getTeamsInConference("Eastern")) ;

//the next function:
function getOldestTeam(conference){
    var oldest = 3000;
    var matches = "that division doesn't exist";
    for (var i = 0; i < joined.length; i++) {
        if((teamConference[i].toLowerCase()== conference.toLowerCase() && joined [i] <= oldest)){
            matches = teamName[i];
            oldest = joined[i];
            // It takes the conference as a parameter and gives back the oldest team in that conference
        }
       
    }
    if (matches== ""){
        matches="that divison doesn't exist"
    }
   return matches;
    

}
 console.log(getOldestTeam("Eastern")); 



function getHeadCoach(team){
    var match = "That team does not exist";
    for(var i = 0; i < coachName.length; i++){
        if(teamName[i].toLowerCase().includes(team.toLowerCase())){
        match = coachName[i];
// It takes the team as a parameter and gives back the head coach of that team
    }

  } 
  return match;
}
  console.log(getHeadCoach("Crew"));  



// }
//  console.log (getOldestTeam("e1"));  
 

function getstadiumCapacity(conference){
    var total = 0;
    for(var i = 0; i <stadiumCapacity.length; i++){
        if(teamConference[i].toLowerCase().includes(conference.toLowerCase())){
            total += parseFloat(stadiumCapacity[i]);
        }
    }
    if(total == 0){
      return -1;
    }
    return total; 
     // It takes the conference as a parameter and gives back all of the stadium capacity of the conference
  }
  }
  console.log(getstadiumCapacity("east")); 
