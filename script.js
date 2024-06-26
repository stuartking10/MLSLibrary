var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Sports/MLS%20Teams.csv"

var teamName = getColumn(url,1)
var teamLocation= getColumn (url,2)
var teamStadium = getColumn (url,3)
var stadiumCapacity = getColumn (url,4)
var teamConference =getColumn (url,7)
var joined =getColumn (url,5)
var coachName =getColumn (url,6)

 // NEXT FUNCTION: It takes the conference as a parameter and gives back the teams in the conference
function getTeamsInConference(conference){
    var matches= [];
    for (var i = 0; i < teamConference.length; i++) {
        if(teamConference[i].toLowerCase().includes(conference.toLowerCase())){
            matches.push(teamName[i]);
           
        }
  
    }
    if (matches.length==0){
        matches.push("this conference does not exist")
    }
   return matches; 
}
// console.log(getTeamsInConference("western"))
// NEXT FUNCTION: It takes the team as a parameter and gives back the city the team is from:
function getCity(team) {
    var matches ="that team doesn't exist";
    for (var i = 0; i < teamName.length; i++) {
        if(teamName[i].toLowerCase().includes(team.toLowerCase())){
            matches = teamLocation[i];
        }

    }
   return matches;
    
}
// console.log (getCity("charlotte FC")) 
// console.log (getTeamsInConference("Eastern")) ;

//the next function takes the oldest team from a conference and returns the team:
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


//NEXT FUNCTION: It takes the team as a parameter and gives back the head coach of that team
function getHeadCoach(team){
    var match = "That team does not exist";
    for(var i = 0; i < coachName.length; i++){
        if(teamName[i].toLowerCase().includes(team.toLowerCase())){
        match = coachName[i];

    }

  } 
  return match;
}
  console.log(getHeadCoach("Crew"));  



// }
//  console.log (getOldestTeam("e1"));  
 
// NEXT FUNCTION: It takes the conference as a parameter and gives back all of the stadium capacity of the conference

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
  }
  
  console.log(getstadiumCapacity("east")); 
