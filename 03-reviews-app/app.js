const navBtnDOM = document.querySelector(".nav-btn")
const linksDOM = document.querySelector(".nav-links")

navBtnDOM.addEventListener("click", showNav)

function showNav(){
    linksDOM.classList.toggle("show-links")
}


// Main programm


const people = [
    {id:1,
    name: "Henrique Langa",
    job:"Contabilista",
    img:"./pic/pic-1.jpg",
    text:"Olá! meu nome é Henrique langa e eu estudo contabilidade e auditoria no ISCIM 2 ano. Amo ensinar e aprender."},
    {id:2,
        name: "Denny Langa",
        job:"UIX Designer",
        img:"./pic/pic-2.jpg",
        text:"Olá! Tudo bem? Eu sou uma versão do programador e amo cantar e tocar música... "},
    {id:3,
        name: "Denilson Rafael",
        job:"Administrador de redes",
        img:"./pic/pic-3.jpg",
        text:"Chamo-me Denilson Rafael e o meu herói chama-se Jesus. Eu amo muito a Ele e quero espalhar a sua mensagem."},
    {id:4,
        name: "Denilson Langa",
        job:"Analista de dados",
        img:"./pic/pic-4.jpg",
        text:"Sou estudante do 5ano de engenharia na universidade eduardo mondlane apaixonado por TI"},
    {id:5,
        name: "Julia Langa",
        job:"Técnico de TI",
        img:"./pic/pic-5.jpg",
        text:"Sou estudante do 5ano de engenharia na universidade eduardo mondlane apaixonado por TI"},
]


// DOM
const photoDOM = document.querySelector(".main-photo")
const nameDOM = document.querySelector(".name")
const jobDOM = document.querySelector(".job")
const infoDOM = document.querySelector(".info")
const btnsDOM = document.querySelectorAll(".btn")

// start
id = 0
photoDOM.innerHTML = `<img src="${people[id].img}">`
nameDOM.innerHTML = people[id].name
jobDOM.innerHTML = people[id].job
infoDOM.innerHTML = people[id].text


// APP

btnsDOM.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const currentTarget = e.currentTarget.classList

        if(currentTarget.contains("b-btn")){
            id--;
            if(id<0){
                id = people.length-1
            }
        }
        else if(currentTarget.contains("f-btn")){
            id++;
            if(id>=people.length){
                id=0;
            }
        }
        else{
            id = Math.round(Math.random()*(people.length-1))
        }

        photoDOM.innerHTML = `<img src="${people[id].img}">`
        nameDOM.innerHTML = people[id].name
        jobDOM.innerHTML = people[id].job
        infoDOM.innerHTML = people[id].text
    })
})