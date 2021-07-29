var botaoAbrir = document.querySelector('.menu-hamburger');
botaoAbrir.addEventListener("click", abrirMenu);

var listaMobile = document.querySelector(".categoria-mobile")

function abrirMenu(){
    listaMobile.classList.toggle("categoria-mobile-aberto") 
}


