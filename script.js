var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Sports/MLS%20Teams.csv"

var teamName = getColumn(url,1)
var teamLocation= getColumn (url,2)
var teamStadium = getColumn (url,3)
var stadiumCapacity = getColumn (url,4)
var teamConference =getColumn (url,7)

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
// console.log (getTeamsInConference("eastedfghrn")) ;
