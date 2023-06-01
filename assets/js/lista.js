let adicionar;
let adicionar2;

function add() {

    let titulo = document.getElementById("inputtitulo").value;
    let descricao = document.getElementById("Descriçaoinput").value;
    let autor = document.getElementById("autorinput").value;
    let data = document.getElementById("Datainput").value;

    adicionar = document.getElementById("div3").value;
    adicionar2 =  titulo + data + descricao + autor;

    adicionar.innerHTML += adicionar2;
}