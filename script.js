let computer = document.querySelector(".computer"),
player = document.querySelector(".player"),
results = document.querySelector(".result"),
buttons = document.querySelectorAll(".opt-btn")

buttons.forEach((button)=> {
   button.addEventListener("click",item => {

       player.innerHTML = item.textContent
       computer.innerHTML = computerChoice()
   })
})

function computerChoice(){
   let randNumber =    Math.floor(Math.random() * 4)

   switch (randNumber) {
    case 1:
        computer.innerHTML = "Rock"
        break;
    case 2:
        computer.innerHTML = "Paper"
        break;
    case 3:
        computer.innerHTML = "Scisccor"
        break
   }
}
