//DOM Elements
let container = document.querySelector('.container')
let box = document.createElement('div')


//Get #sides from button
let btn = document.querySelector('.getStarted')
let numSides = 0;
btn.addEventListener('click', function(event) {
    numSides = prompt('How many squares?')
    writeScreen(numSides)
    btn.style.visibility = 'hidden'
})


//Grid Creation
function writeScreen(size) {
    container.style.gridTemplateRows = `repeat(${size}, 1fr`
    container.style.gridTemplateColumns = `repeat(${size}, 1fr`

    for (let i = 1; i<=size*size; i++) {
        box[i] = document.createElement('div')
        box[i].className = 'grid'
        box[i].id = i
        box[i].addEventListener('mouseenter', changeColor)
        container.appendChild(box[i])
    }
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


// let grids = document.querySelectorAll('.grid')

// grids.forEach(item => item.addEventListener('mouseenter', changeColor))

// function tester() {
//     console.log('FART')
// }