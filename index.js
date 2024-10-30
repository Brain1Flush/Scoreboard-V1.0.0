let homeGroup = 0
let awayGroup = 0
document.getElementsByClassName("away").textContent = awayGroup
document.getElementsByClassName("home").textContent = homeGroup


function add1Home() {
    homeGroup += 1
    document.getElementsByClassName("home")[0].textContent = homeGroup
}

function add2Home() {
    homeGroup += 2
    document.getElementsByClassName("home")[0].textContent = homeGroup
}

function add3Home() {
    homeGroup += 3
    document.getElementsByClassName("home")[0].textContent = homeGroup
}

function add1Away() {
    awayGroup += 1
    document.getElementsByClassName("away")[0].textContent = awayGroup
}

function add2Away() {
    awayGroup += 2
    document.getElementsByClassName("away")[0].textContent = awayGroup
}

function add3Away() {
    awayGroup += 3
    document.getElementsByClassName("away")[0].textContent = awayGroup
}

function newGame() {
    awayGroup = 0
    homeGroup = 0
    document.getElementsByClassName("away")[0].textContent = awayGroup
    document.getElementsByClassName("home")[0].textContent = homeGroup
}