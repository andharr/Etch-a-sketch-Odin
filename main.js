//DOM Elements
let container = document.querySelector('.container')
let newDiv = document.createElement('div')


//Grid Creation
for (let i = 1; i<=16; i++) {
    newDiv[i] = document.createElement('div')
    newDiv[i].className = 'grid'
    newDiv[i].id = i
    container.appendChild(newDiv[i])
}


// Color generator 
function randomRGB() {
    return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
}

// function to generate random number
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1))
}

// function to generate a random RGB color
function randomRGB() {
    return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
}

//Change the colors
function changeColor(event) {
    event.target.style.backgroundColor = randomRGB()
}


let grids = document.querySelectorAll('.grid')

grids.forEach(item => item.addEventListener('mouseenter', changeColor))

