const computerText = document.querySelector(".computer"),
playerText = document.querySelector(".player"),
resultsText = document.querySelector(".result"),
buttons = document.querySelectorAll(".opt-btn")

let player,
computer,
result


buttons.forEach((each)=> {
   each.addEventListener("click", (button) => {
       player = button.currentTarget.textContent
       computerChoice()
       playerText.textContent = player
       computerText.textContent = computer
       
       resultsText.textContent = showResult()
    })
})

function computerChoice(){
    let randNumber =    Math.floor(Math.random() * 3) + 1
   switch (randNumber) {
    case 1:
        computer = "Rock"
        break
    case 2:
        computer = "Paper"
        break
    case 3:
        computer = "Scissor"
        break
    default:
        break
   }
}


function showResult() {
    if(player = computer){
        return  result = "draw"
    }
    else if(player == "Rock"){
        return (computer == "Paper")? "you lose": "you win"
    }
    else if(player == "Paper"){
        return (computer == "Scissor")? "computer win": "you lose"
    } 
    else if(player == "Rock" & computer == "Scissor"){
        return "You win"
    }    
    else if(computer == "Rock" & player == "Scissor"){
        return "computer win"
    }

}
