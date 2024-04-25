# MLS Libary 
this function uses the Conference to find the teams in the conference, the oldest team in the conference, and the stadium capacity. It also uses the team to find the head coach and the city of the team.
# 
#### It takes the conference as a parameter and gives back the teams in the conference
######  conference {string} - desired team
###### it will return the teams in that conference {string} or "this conference doesn't exist"
** function getTeamsInConference(conference)**
#
#### It takes the team as a parameter and gives back the city the team is from
###### Team {string} - desired City
###### It will return the city the team is from {string} or "that team doesn't exist"
** function getCity(team) **
#
#### It takes the conference as a parameter and gives back the oldest team in that conference
###### Conference {string} - desired oldest team
###### It will return the oldest team in the conference {string} or "that division doesn't exist"
** function getOldestTeam(conference) **
#
#### It takes the team as a parameter and gives back the head coach of that team
###### Team {string} - desired head coach
###### It will return the oldest head coach {string} or "That team does not exist"
** function getHeadCoach(team) **
#
#### It takes the conference as a parameter and gives back all of the stadium capacity of the conference
###### Conference {string} - desired capacity of stadium's
###### It will return all of the capacity of the stadium's {number} or -1
**function getstadiumCapacity(conference)**
