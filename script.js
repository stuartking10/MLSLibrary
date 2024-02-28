var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Sports/MLS%20Teams.csv"

var teamName = getColumn(url,1)
var teamLocation= getColumn (url,2)
var teamStadium = getColumn (url,3)
var stadiumCapacity = getColumn (url,4)
var teamConference =getColumn (url,7)
console.log("stadiumCapacity");

function getTeamsInConference(conference){
    var matches= ["this conference doesn't exist"];
    for (var i = 0; i < teamConference.length; i++) {
        if(teamConference[i].toLowerCase().includes(conference.toLowerCase())){
            matches.push(teamName[i]);
        }

    }
   return matches;
}

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
console.log (getTeamsInConference("eastern")) ;

//the next function:
function getOldestTeam(conference){
    var oldest = 3000;
    var matches = "that division doesn't exist";
    for (var i = 0; i < joined.length; i++) {
        if((conference[i].toLowerCase()== conference.toLowerCase() && joined [i] <= oldest)){
            matches = teamName[i];
            oldest = joined[i];
        }
        if (oldestteamName== ""){
            oldestteamName=" that divison doesn't exist"
        }
    }
   return matches;
    

}
 console.log (getOldestTeam("Eastern"));




  function getHeadCoach(team){
    var match = "That team does not exist";
    for(var i = 0; i < coachName.length; i++){
        if(teamName[i].toLowerCase().includes(team.toLowerCase())){
        match = coachName[i];

    }

  } 
  return match;
  }
  console.log (getHeadCoach("Atlanta"));


























function getstadiumCapacity(conference){
    var total = 0;
    for(var i = 0; i <stadiumCapacity.length; i++){
        if(teamConference[i].toLowerCase() == conference.toLowerCase()){
            total += stadiumCapacity[i];
        }
    }
    if(total == 0){
      return -1;
    }
    return total; 
  }
  console.log(getstadiumCapacity("Eastern"));   
