function getComputerChoice()
{
    
    let x=Math.floor(Math.random()*100)%3
    if(x===2){ x='rock'}
    else if(x===1){ x='paper'}
    else if(x===0){ x='scissors'}
    return x
}

let c= getComputerChoice()

console.log(c)

function getHumanChoice()
{let p=prompt("choose rock paper or scissors")
if (p!="rock"||"paper"||"scissors"){return 'error'}
return p

}
let h=getHumanChoice()
console.log(h)
