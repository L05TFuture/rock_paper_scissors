function getComputerChoice()
{
    
    let x=Math.floor(Math.random()*100)%3
    if(x===2){ x='rock'}
    else if(x===1){ x='paper'}
    else if(x===0){ x='scissors'}
    return x
   
}



function getHumanChoice()
{let p=  prompt("choose rock paper or scissors")
//if (p!="rock"&&p!="paper"&&p!="scissors"){return 'error'}
return p.toLowerCase()

}


let humanScore=0
let computerScore=0
let scoreboard= humanScore + ':' + computerScore
let changeScore = function(){scoreboard = humanScore + ':' + computerScore;}

let checkScore = function(){
    if (humanScore==5){results.textContent='Game finished, Player wins! ' +`${scoreboard}`}
    else if(computerScore==5){results.textContent='Game finished, Computer wins! '+ `${scoreboard}`;}
}

function playRound(humanChoice,computerChoice)
{
  if (humanChoice=='rock' && computerChoice=='rock'){results.textContent= 'Its a tie! ' + `${scoreboard}`; checkScore() }
 else if(humanChoice=='rock' && computerChoice=='scissors'){++humanScore ;changeScore(); results.textContent='You win! rock beats scissors '+ `${scoreboard}`;checkScore()}
 else if (humanChoice=='rock' &&  computerChoice=='paper'){++computerScore;changeScore(); results.textContent='You lose! rock loses to paper '+`${scoreboard}`;checkScore() }
 else if (humanChoice=='paper' && computerChoice=='paper'){results.textContent='Its a tie! '+ `${scoreboard}`}
 else if (humanChoice=='paper' && computerChoice=='scissors'){++computerScore; changeScore(); results.textContent='You lose! paper loses to scissors '+`${scoreboard}`;checkScore()}
 else if (humanChoice=='paper' && computerChoice=='rock'){++humanScore; changeScore(); results.textContent='You win! paper beats rock '+ `${scoreboard}`;checkScore()}
 else if (humanChoice=='scissors' && computerChoice=='scissors'){results.textContent='Its a tie!'+ `${scoreboard}`;checkScore()}
 else if (humanChoice=='scissors' && computerChoice=='rock'){++computerScore; changeScore(); results.textContent='You lose! scissors loses to rock '+`${scoreboard}`;checkScore()}
 else if (humanChoice=='scissors' && computerChoice=='paper'){++humanScore; changeScore(); results.textContent='You win! scissors beats paper '+`${scoreboard}`;checkScore()}

 console.log(scoreboard);
 
}

while(humanScore==5||computerScore==5){results.textContent='game finished'}
//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

//playRound(humanSelection,computerSelection)

//let rounds=1
//function playGame()
//{
  //  
    //while(rounds<=5){++rounds;
      //  const humanSelection = getHumanChoice();
        //const computerSelection = getComputerChoice();
        //playRound(humanSelection,computerSelection)}

//}

//playGame()

let rockbtn = document.getElementById("rock")

rockbtn.addEventListener('click', (event) => {playRound('rock',getComputerChoice())})

let paperbtn = document.getElementById("paper")
paperbtn.addEventListener('click',(event)=>{playRound('paper', getComputerChoice())})

let scissorsbtn = document.getElementById("scissors")
scissorsbtn.addEventListener('click',(event)=>{playRound('scissors', getComputerChoice())})

let results = document.getElementById("results")