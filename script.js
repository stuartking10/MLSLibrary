var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Sports/MLS%20Teams.csv"

var teamName = getColumn(url,1)
var teamLocation= getColumn (url,2)
var teamStadium = getColumn (url,3)
var stadiumCapacity = getColumn (url,4)
var teamConference =getColumn (url,7)
var joined = getColumn (url,5)

function getTeamsInConference(conference){
    var matches= [];
    for (var i = 0; i < teamConference.length; i++) {
        if(teamConference[i].toLowerCase().includes(conference.toLowerCase())){
            matches.push(teamName[i]);
        }

    }
    if(matches.length ==0){
        matches.push("this conference doesn't exist")
    }
    return matches;
   
}
//  console.log (getTeamsInConference("eastern")) ;

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



