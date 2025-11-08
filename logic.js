let elaspedTime = document.getElementById("Elasped-time"); 
let teamAScore = document.getElementById("Team-A-Score");
let teamBScore = document.getElementById("Team-B-Score");
let matchStatus = document.getElementById("match-status"); 
// matchStatus.textContent = 'hellow world'
const timeDisplay = {
    minHand : 0 ,
    secondHand : 0
};

function updateTimer(){
        timeDisplay.secondHand++
        if(timeDisplay.secondHand >=59){
            timeDisplay.secondHand =0;
            timeDisplay.minHand++
        }
        if(timeDisplay.minHand>=59){
            clearInterval(timeInterval);
        }
         elaspedTime.textContent = timeDisplay.minHand + " : " + timeDisplay.secondHand;
    
    }
    
    
    function start(retValue){
     let timeInterval= setInterval (updateTimer , 1000)
    }
   function increaseGoalA(){
    teamAScore.textContent++
   }

  function decreaseGoalA(){
    if(teamAScore.textContent!=0){
    teamAScore.textContent--
    }
    }
    function increaseGoalB(){
        teamBScore.textContent++
    }

    function decreaseGoalB(){
         if(teamBScore.textContent!=0){
            teamBScore.textContent--
    }
    }

    function displayFirstHalf(){
        matchStatus.textContent = 'first half'
    }
    function displaySecondHalf(){
        matchStatus.textContent = 'Second half'
    }
    function displayHalfTime(){
        matchStatus.textContent = 'Half time'
    }
    