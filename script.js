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
console.log (getTeamsInConference("eastern")) ;






























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
