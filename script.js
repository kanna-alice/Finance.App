const contas = JSON.parse(localStorage.getItem("contas")) || [];
let indiceEditando = null;
function Adicionar() {
  let input_Nome = document.getElementById("input_Nome").value;
  let input_Valor = document.getElementById("input_Valor").value;
  let input_Desc = document.getElementById("input_Desc").value;
  let input_Categoria = document.getElementById("input_Categoria").value;

  const Novaconta = {
    Nome: input_Nome,
    Valor: Number(input_Valor),
    Descricao: input_Desc,
    Categoria: input_Categoria,
  };
  if (
    input_Nome === "" ||
    input_Valor === "" ||
    input_Categoria === "" ||
    isNaN(Number(input_Valor))
  ) {
    alert("digite algo nos inputs");
    return;
  } 
  if(indiceEditando === null){
    contas.push(Novaconta)
  }
  else {
    contas[indiceEditando] = Novaconta
    indiceEditando = null 
  }
    Salvar();
    alert("Contas adicionadas com sucesso");
    Salvar();
    document.getElementById("input_Nome").value = "";
    document.getElementById("input_Valor").value = "";
    document.getElementById("input_Desc").value = "";
    document.getElementById("input_Categoria").value = "";
    document.getElementById("Add").style.display = "none";
    console.log(contas);
    renderizarContas();
    if (indiceEditando === null) {
      contas.push(Novaconta);
    } else {
      contas[indiceEditando] = Novaconta; // substitui o item antigo pelo novo
      indiceEditando = null; // 💭 por que resetar aqui é importante?
    }
}
function renderizarContas() {
  let html = "";
  let total = 0;
  contas.forEach((conta, index) => {
    html += `
      
    <tr>
        <td>${conta.Nome}</td>
        <td>${conta.Descricao}</td>
        <td>${conta.Categoria}</td>
        <td>${conta.Valor}</td>
        <td><button onclick="Editar(${index})">Editar</button></td>
        </tr>
      
    `;
    let res = document.getElementById("res");
    total = Number(total) + Number(conta.Valor);
    res.textContent = `R$: ${total}`;
  });
  document.getElementById("financeTableBody").innerHTML = html;
}
function Salvar() {
  localStorage.setItem("contas", JSON.stringify(contas));
}
function Menu() {
  const Menu = document.getElementById("Add");
  if (Menu.style.display === "block") {
    Menu.style.display = "none";
  } else {
    Menu.style.display = "block";
  }
}
function Editar(index) {
  const conta = contas[index];
  indiceEditando = index;
  document.getElementById("input_Nome").value = conta.Nome;
  document.getElementById("input_Desc").value = conta.Descricao;
  document.getElementById("input_Categoria").value = conta.Categoria;
  document.getElementById("input_Valor").value = conta.Valor;
  // 💭 sua vez: preenche os outros 3 campos (Valor, Descricao, Categoria) do mesmo jeito

  document.getElementById("Add").style.display = "block";
}
window.addEventListener("DOMContentLoaded", renderizarContas);
