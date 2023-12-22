var listaButton = [], audio;
listaButton = document.querySelectorAll(".item");
console.log(listaButton);

for (var i = 0; i < listaButton.length; i++) {

    document.querySelectorAll(".item")[i].addEventListener("click", function () {

        var botaoInnerHTML = this.innerHTML;

        tocar(botaoInnerHTML);

        animarBotao(botaoInnerHTML);
    });


}
document.addEventListener("keypress", function (event) {

    tocar(event.key);

    animarBotao(event.key);

   
});

function animarBotao(key) {
    var botaoPressionado = document.querySelector("." + key);

    botaoPressionado.classList.add("pressionado");

    setTimeout(function(){
        botaoPressionado.classList.remove("pressionado");
    }, 100)
}

function tocar(key) {
    switch (key) {
        case "w":
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default: console.log();
    }
}


/*document.querySelector(".Wbutton").addEventListener("click", function(){
    alert("Click");
})*/