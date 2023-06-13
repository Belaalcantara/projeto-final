/*var adicionar = [];
var titulo = "";
var data = "";
var descricao = "";
var autor= "";

function lista(){
    titulo = document.getElementById("titulo").value;
    data = document.getElementById("data").value;
    descricao = document.getElementById("descricao").value;
    autor= document.getElementById("autor").value;
   let armazen; 

//puxar o html

document.getElementById("titulo").value = "";
document.getElementById("data").value = "";
document.getElementById("descricao").value = "";
document.getElementById("autor").value = "";

//vai recer uma "resposta" que vai vir dentro do imputs

armazen = {
 titulo:`${titulo}`,
 data:`${data}`,
 descricao:`${descricao}`,
 autor:`${autor}`

}

//vai recer as coisas que digitaram nos imputs

adicionar.push(armazen)

// para add e nao substituir os outros dados

add2();
}

function add2(){
    let adicionar02 = document.getElementById("geral");
    let armazen02 = "";
    let i;

    for(i=0; i< adicionar.length; i++){
        let geral = adicionar[i];

    
    // htmlgeral += `
    //     <h3>Título ${titulo}</h3>
    //     <h3>Data ${data}</h3>
    //     <h3>Descrição ${descricao}</h3>
    //     <h3>Autor ${autor}</h3>
    //       `
          adicionar02.innerHTML = armazen02;

    
    }

#button{
    color
}


}*/

let pai = [];
let filhos = [];
let informacoes = [];
var titulo = "";
var data = "";
var descricao = "";
var autor = "";
var auxiliarData = document.getElementById("data").innerHTML;



function lista() {

    titulo = document.getElementById("titulo").value;
    data = document.getElementById("data").value;
    descricao = document.getElementById("descricao").value;
    autor = document.getElementById("autor").value;
   
    document.getElementById("titulo").value = "";
    document.getElementById("data").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("autor").value = "";


    console.log(pai);


    filhos.push(titulo);
    filhos.push(data);
    filhos.push(descricao);
    filhos.push(autor);
    pai.push(filhos);

    filhos = [];


    adicionar02();
    atualizarlista();


}

function adicionar02() {

    for (let i = 0; i < pai.length; i++) {
        informacoes = pai[i];
    }

}

function atualizarlista() {
    let conteudo = "";

    for (let i = 0; i < pai.length; i++) {
        const arrayAux = pai[i];

        conteudo += `
    <li class="cardItem">
    <div>
    <h2>${arrayAux[0]}</h2>
    <p>Data de publicação: ${arrayAux[1]}</p>
    <p>Descrição: ${arrayAux[2]}</p>
    <p>Autor: ${arrayAux[3]}</p>
    </div>
    <button id="botao"type="button" onclick="deletar(${i})"><img src=https://cdn-icons-png.flaticon.com/512/126/126468.png width="18px" height="20px"></button>
    </li>
    `

    }


    document.getElementById("paragrafo").innerHTML = conteudo;

}

function deletar(index) {
    pai.splice(index, 1);
    atualizarlista();
}








