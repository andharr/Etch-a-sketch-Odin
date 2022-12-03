//DOM Elements
let container = document.querySelector('.container')
let box = document.createElement('div')
let title = document.querySelector('.title')
let subtitle = document.querySelector('.subtitle')
let subsubtitle = document.querySelector('.subsubtitle')


//Get #sides from button
let btn = document.querySelector('.getStarted')
let numSides = 0;
btn.addEventListener('click', function(event) {
    numSides = Math.min(200,parseInt(prompt("How many squares per side? (200 max or your computer will explode and I can't afford to fix it. I'm making prototypes here after all, this isn't a paid gig. Please be kind.)")))
    writeScreen(numSides)
    btn.style.visibility = 'collapse'
    container.style.visibility = 'visible'
    title.style.visibility = 'collapse'
    subtitle.style.visibility = 'collapse'
    subsubtitle.style.visibility = 'collapse'
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

//Generate random number
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1))
}

//Generate a random RGB color
function randomRGB() {
    return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
}

//Change the colors
function changeColor(event) {
    event.target.style.backgroundColor = randomRGB()
}