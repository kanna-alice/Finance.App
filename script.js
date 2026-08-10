const Contas = []


function Adicionar() {
  const button_Add = document.getElementById("button_Add");
  const input_Add = document.getElementById("input_Add").value;

  const NovaConta = {
    descriçao: input_Add
    

  }; 
   contas.push(novaConta);
    console.log(contas);

}

function Menu() {
    const Menu = document.getElementById("Add");
    const Open_Menu = document.getElementById("button_Menu");
     if(Menu.style.display === "block") {
        Menu.style.display = "none"
     }else{
        Menu.style.display = "block"
     }
   

    



}
