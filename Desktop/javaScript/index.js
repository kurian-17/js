let counting = document.getElementById("counting")
let count = ['hello', 'there', 3];
function increment() {
    count = count + 1
    counting.innerText = count
}
function decrement() {
    count = count - 1
    if (count < 0) {
        count = 0
    }
    counting.innerText = count

}
const savedP = document.getElementById("savedvalues");
function save() {
    savedP.innerText += count + ' - '
}


const add = (a, b) => {
    const sum = a + b;
    return sum;
}

const sum = add(5, 11)