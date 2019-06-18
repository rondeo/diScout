function openLoginModal() {
 
  document.getElementById("idLogin").style.display = "block";

}

function openRegisterModal() {
  
  document.getElementById("idRegistar").style.display = "block";

}

/*function login() {
  if (
    document.getElementById("user").value != "" &&
    document.getElementById("psw").value != ""
  ) {
    document.getElementById("idLogin").style.display = "none";
    document.getElementById("entrar").style.display = "none";
    document.getElementById("registar").style.display = "none";
    document.getElementById("Passe").style.display = "inline";
    document.getElementById("Perda").style.display = "inline";
    document.getElementById("Interrupcao").style.display = "inline";
    document.getElementById("Remate").style.display = "inline";
    window.location = "discout.html";
  }
}*/

function register() {
  if (
    document.getElementById("nUser").value != "" &&
    document.getElementById("nPsw").value != "" &&
    document.getElementById("cPsw").value != "" &&
    document.getElementById("nPsw").value ==
      document.getElementById("cPsw").value
  ) {
    document.getElementById("idRegistar").style.display = "none";
    alert("Registado com sucesso");
  }
}
