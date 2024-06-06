
const Bar = document.getElementById("Bar");
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const main = document.querySelector("main");

palanca.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode");
    circulo.classList.toggle("prendido");
})

Bar.addEventListener("click",()=>{
    barraLateral.classList.toggle("mini-barra");
    main.classList.toggle("min-main");

    spans.forEach((span)=>{
        span.classList.toggle("oculto");
    })
});