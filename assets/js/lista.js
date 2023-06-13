var add = [];
var add2 = [];

function adicionar() {
  let titulo = document.getElementById("inputtitulo").value;
  let data = document.getElementById("Datainput").value;
  let descricao = document.getElementById("Descriçaoinput").value;
  let autor = document.getElementById("autorinput").value;
  
  add.push(titulo);
  add.push(data);
  add.push(descricao);
  add.push(autor);

  add2.push(add);
  
  adicionar2();
}

function adicionar2() {
  let armazenar = document.getElementById("div3");
  let armazenar2 = ""; 

  for (let i = 0; i < add.length; i++) {
    let lista = add[i];
    
    armazenar2 += "Título:" + lista.titulo;
    armazenar2 += "Data:" + lista.data ;
    armazenar2 += "Descrição:" + lista.descricao ;
    armazenar2 += "Autor:" + lista.autor ;
  }
  
  armazenar.innerHTML = armazenar2;
}