const getElement = (selector) =>{
return document.querySelector(selector)
}

// No's do DOM
const showNavBtn = getElement(".nav-btn")
const navLinksDOM = getElement(".nav-links")
const colorChngerButton = getElement(".change-btn")
const hexDOM = document.createElement("Div")
const divInfo = document.querySelector(".info")
const mainDOM = document.querySelector(".main")

// Event Listeners
showNavBtn.addEventListener("click",showNavBar)
colorChngerButton.addEventListener("click", colorChanger)


// Code


// Functions
function showNavBar(){
navLinksDOM.classList.toggle("show-links")
}

function colorChanger(){
let hexCode = "#"

while(hexCode.length<7){
    hexCode += Math.round(Math.random()*15).toString(16)
}
hexDOM.style.color = hexCode;
hexDOM.className = "color"
mainDOM.style.backgroundColor = hexCode
hexDOM.innerHTML = hexCode
divInfo.appendChild(hexDOM)
};

