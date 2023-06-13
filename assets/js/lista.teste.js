var add = [];
var add2 = [];

function adicionar() {
  let titulo = document.getElementById("titulo").value;
  let data = document.getElementById("data").value;
  let descricao = document.getElementById("descricao").value;
  let autor = document.getElementById("autor").value;
 
  add.push(titulo);
  add.push(data);
  add.push(descricao);
  add.push(autor);
  add2.push(add);
  
  adicionar2();
}

let armazenar3 = "";

function adicionar2() {
  const armazenar2 = document.getElementById("div");
  
  for (let i = 0; i < add.length; i++) {
    let lista = add[i];
    
    armazenar3 += "Título:" + lista.titulo;
    armazenar3 += "Data:" + lista.data ;
    armazenar3 += "Descrição:" + lista.descricao ;
    armazenar3 += "Autor:" + lista.autor ;
  }
  
  armazenar2.innerHTML = armazenar3;
}