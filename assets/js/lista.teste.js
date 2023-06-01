var add = [];

function adicionar() {
  let titulo = document.getElementById("titulo").value;
  let data = document.getElementById("data").value;
  let descricao = document.getElementById("descricao").value;
  let autor = document.getElementById("autor").value;
  
  let armazenar = {
    titulo: `${titulo}`,
    data: `${data}`,
    descricao: `${descricao}`,
    autor: `${autor}`
  }
  
  add.push(armazenar);
  
  document.getElementById("titulo").value = "";
  document.getElementById("data").value = "";
  document.getElementById("descricao").value = "";
  document.getElementById("autor").value = "";
  
  adicionar2();
}

function adicionar2() {
  let armazenar2 = document.getElementById("div");
  let armazenar3 = "";
  
  for (let i = 0; i < add.length; i++) {
    let lista = add[i];
    
    armazenar3 += "Título:" + lista.titulo;
    armazenar3 += "Data:" + lista.data ;
    armazenar3 += "Descrição:" + lista.descricao ;
    armazenar3 += "Autor:" + lista.autor ;
  }
  
  armazenar2.innerHTML = armazenar3;
}