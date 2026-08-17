const contas = [];
function Adicionar() {
  let input_Nome = document.getElementById("input_Nome").value;
  let input_Valor = document.getElementById("input_Valor").value;
  let input_Desc = document.getElementById("input_Desc").value;
  let input_Categoria = document.getElementById("input_Categoria").value;

  const Novaconta = {
    Nome: input_Nome,
    Valor: input_Valor,
    Descricao: input_Desc,
    Categoria: input_Categoria,
  };
  if (input_Nome === "" || input_Valor === "" || input_Categoria === "") {
    alert("digite algo nos inputs");
    return;
  } else {
    alert("Contas adicionadas com sucesso");
    contas.push(Novaconta);
    document.getElementById("input_Nome").value = "";
    document.getElementById("input_Valor").value = "";
    document.getElementById("input_Desc").value = "";
    document.getElementById("input_Categoria").value = "";
    document.getElementById("Add").style.display = "none";
    console.log(contas);
    renderizarContas();
  }
}
function renderizarContas() {
  let html = "";
  let total = 0;
  contas.forEach((conta) => {
    html += `
      <tr>
        <td>${conta.Nome}</td>
        <td>${conta.Descricao}</td>
        <td>${conta.Categoria}</td>
        <td>${conta.Valor}</td>
        </tr>
    `;
    let res = document.getElementById("res");
    total = Number(total) + Number(conta.Valor);
    res.textContent = `R$: ${total}`;
  });
  document.getElementById("financeTableBody").innerHTML = html;
}
function Menu() {
  const Menu = document.getElementById("Add");
  if (Menu.style.display === "block") {
    Menu.style.display = "none";
  } else {
    Menu.style.display = "block";
  }
}
