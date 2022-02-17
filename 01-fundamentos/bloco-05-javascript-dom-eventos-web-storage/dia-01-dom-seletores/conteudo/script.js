/* const paragraph = document.getElementById("paragraph");

paragraph.style.color = "red";

const titulo = document.getElementById("page-title");

titulo.innerText = "Moana";

const paragraph2 = document.getElementById("second-paragraph");

paragraph2.innerText = "É um filme de animação computadorizada que conta a história de uma garota que nasceu para salvar a humanidade do erro de um semi-deus."

const subtitulo = document.getElementById("subtitle");

subtitulo.innerText = "Resumo do filme";

let paragrafosIguais = document.getElementsByClassName("paragrafos-iguais");

paragrafosIguais[0].style.border = "1px solid pink";
for (let i = 0; i < paragrafosIguais.length; i++) {
    paragrafosIguais[i].style.padding = "20px";
}

let tagSubtitulo = document.getElementsByTagName("h4");

tagSubtitulo[0].style.color = "green";
 */
let header = document.getElementById("header-container");
header.style.backgroundColor = "lightgreen";

let footer = document.getElementById("footer-container");
footer.style.backgroundColor = "darkgreen";

let body = document.querySelector("body");
body.style.backgroundColor = "#dedede";

let quadros = document.querySelectorAll("section");
for (let i of quadros) {
    i.style.display = "inline-block";
}

let emergencia = document.getElementsByClassName("emergency-tasks");
for (let i of emergencia) {
    i.style.backgroundColor = "pink";
}

let naoEmergencia = document.getElementsByClassName("no-emergency-tasks");
for (let i of naoEmergencia) {
    i.style.backgroundColor = "yellow";
}

let tituloEmergencia = document.querySelectorAll(".emergency-tasks div h3");
for (let i of tituloEmergencia) {
    i.style.backgroundColor = "purple";
}

let tituloNaoEmergencia = document.querySelectorAll(".no-emergency-tasks div h3");
for (let i of tituloNaoEmergencia) {
    i.style.backgroundColor = "#444444";
}