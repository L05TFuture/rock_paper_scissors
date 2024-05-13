function getComputerChoice()
{
    
    let x=Math.floor(Math.random()*100)%3
    if(x===2){ x='rock'}
    else if(x===1){ x='paper'}
    else if(x===0){ x='scissors'}
    return x
}



function getHumanChoice()
{let p=prompt("choose rock paper or scissors")
//if (p!="rock"&&p!="paper"&&p!="scissors"){return 'error'}
return p.toLowerCase()

}


let humanScore=0
let computerScore=0
let scoreboard= humanScore + ':' + computerScore

function playRound(humanChoice,computerChoice)
{
  if (humanChoice=='rock' && computerChoice=='rock'){console.log("Its a tie!")}
 else if(humanChoice=='rock' && computerChoice=='scissors'){console.log('You win! rock beats scissors'); ++humanScore; }
 else if (humanChoice=='rock' &&  computerChoice=='paper'){console.log('You lose! rock loses to paper'); ++computerScore; }
 else if (humanChoice=='paper' && computerChoice=='paper'){console.log('Its a tie!')}
 else if (humanChoice=='paper' && computerChoice=='scissors'){console.log('You lose! paper loses to rock'); ++computerScore;}
 else if (humanChoice=='paper' && computerChoice=='rock'){console.log('You win! paper beats rock');humanScore++}
 else if (humanChoice=='scissors' && computerChoice=='scissors'){console.log('Its a tie!')}
 else if (humanChoice=='scissors' && computerChoice=='rock'){console.log('You lose! scissors loses to rock'); computerScore++}
 else if (humanChoice=='scissors' && computerChoice=='paper'){console.log('You win! scissors beats paper'); computerScore++}
 scoreboard = humanScore + ':' + computerScore;
 console.log(scoreboard);
}
//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

//playRound(humanSelection,computerSelection)

let rounds=1
function playGame()
{
    
    while(rounds<=5){++rounds;
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection)}

}

playGame()