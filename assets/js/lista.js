var array = [];
var array1 = []; 

function lista(){
    let titulo = document.getElementById("inputtitulo").value;
    let descrição = document.getElementById("Descriçaoinput").value;
    let autor = document.getElementById("autorinput").value;
    let data = document.getElementById("Datainput").value;
    array1.push(titulo);
    array1.push(descrição);
    array1.push(autor);
    array1.push(data);

    array.push(array1); 

    document.getElementById("p1").innerHTML = `${titulo}`;
    document.getElementById("p2").innerHTML = `Data de Publicação: ${data}`;
    document.getElementById("p3").innerHTML = `Descrição: ${descrição}`;
    document.getElementById("p4").innerHTML = `Autor: ${autor}`;
    
    
}



