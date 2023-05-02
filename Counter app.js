let CountEl = document.getElementById("number");
let saveEl = document.getElementById("saved")

let count = 0

function increment(){
    count = count + 1
    CountEl.innerText = count
}

function save(){
    let countstr =   count + "-"
    saveEl.innerText += countstr
    CountEl.innerText = 0
    count = 0
}
