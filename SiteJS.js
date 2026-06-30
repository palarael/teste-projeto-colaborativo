// Estilo da página
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.backgroundColor = "#f4f4f4";

// Cabeçalho
const header = document.createElement("header");
header.style.background = "#0d6efd";
header.style.color = "white";
header.style.padding = "20px";
header.style.textAlign = "center";

const titulo = document.createElement("h1");
titulo.innerText = "Meu Primeiro Site em JavaScript";

header.appendChild(titulo);
document.body.appendChild(header);

// Conteúdo principal
const main = document.createElement("main");
main.style.padding = "40px";
main.style.textAlign = "center";

const texto = document.createElement("p");
texto.innerText =
    "Esta página foi criada dinamicamente utilizando JavaScript.";

texto.style.fontSize = "20px";

main.appendChild(texto);

// Botão
const botao = document.createElement("button");
botao.innerText = "Clique aqui";

botao.style.padding = "15px 30px";
botao.style.fontSize = "18px";
botao.style.background = "#198754";
botao.style.color = "white";
botao.style.border = "none";
botao.style.borderRadius = "8px";
botao.style.cursor = "pointer";

botao.onclick = function () {
    alert("Você clicou no botão!");
};

main.appendChild(botao);

document.body.appendChild(main);

// Rodapé
const footer = document.createElement("footer");
footer.style.background = "#222";
footer.style.color = "white";
footer.style.textAlign = "center";
footer.style.padding = "20px";
footer.style.marginTop = "50px";

footer.innerHTML = "&copy; 2026 - Site criado com JavaScript";

document.body.appendChild(footer);