const btnDOM = document.querySelectorAll(".btn")
const menuDOM = document.querySelector(".menu")


btnDOM.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const currentTarget = e.currentTarget.classList
        if(currentTarget.contains("nav-btn")){
            menuDOM.classList.add("show-menu")
        }
        else if(currentTarget.contains("menu-exit")){
            menuDOM.classList.remove("show-menu")
        }
    })
})