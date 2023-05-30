var array = [];
var array1 = [];

function lista(){
    let titulo = document.getElementById("inputtitulo").value;
    let descrição = document.getElementById("Descriçaoinput").value;
    let autor = document.getElementById("autorinput").value;
    let data = document.getElementById("Datainput").value;
    array.push(titulo);
    array.push(descrição);
    array.push(autor);
    document.getElementById("inputtitulo").value = '';
    document.getElementById("Descriçaoinput").value = '';
    document.getElementById("autorinput").value = '';
    document.getElementById("Datainput").value = '';
    let msg = '';
    for (let i = 0; i < array.length; i++){
        msg += `<p>${array[i]}</p>`
    }
    document.getElementById("p1").innerHTML = `${titulo}`;
    document.getElementById("p2").innerHTML = `Data de Publicação: ${data}`;
    document.getElementById("p3").innerHTML = `Descrição: ${descrição}`;
    document.getElementById("p4").innerHTML = `Autor: ${autor}`;
}