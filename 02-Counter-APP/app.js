const showBtnDOM = document.querySelector(".nav-btn")
const showLinksDOM = document.querySelector(".nav-links")

showBtnDOM.addEventListener("click",showNav)


function showNav(){
    showLinksDOM.classList.toggle("show-nav")
}
// -----------------------------------------------
// counter
// -----------------------------------------------

let count = 0
const btnDOM = document.querySelectorAll(".btn")
const displayDOM = document.querySelector(".display")
const centerDOM = document.querySelector(".center")
const buttonsDOM = document.querySelector(".buttons")

displayDOM.innerHTML = "0"

btnDOM.forEach(function (btn) {
    btn.addEventListener("click", countHandler)
    function countHandler(e){
        const atributess = e.currentTarget.classList
        if(atributess.contains("decrease-btn")){
            count--;
        }
        else if(atributess.contains("reset-btn")){
            count = 0;
        }
        else {
            count++;
        }
        if(count<0){
            displayDOM.style.color = "red"
        }
        if(count>0){
            displayDOM.style.color = "green"
        }
        displayDOM.innerHTML = count
       
    }
})