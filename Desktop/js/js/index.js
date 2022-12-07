let counting = document.getElementById("counting")
let count = 0
if(counting<0) {
    counting=0
}
function increment() {
    count = count + 1
    counting.innerText = count
}
function decrement() {
    count = count - 1
    counting.innerText = count ;
 
}
function save() {
    console.log(count)
}