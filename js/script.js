/*document.getElementById("enviar").onclick = function(){enviarEmail()};
  function enviarEmail() {
    window.alert("E-mail enviado!")
  }*/


document.addEventListener("DOMContentLoaded", function () {

  const btnEmail = document.getElementById("btn-email");
  const enviar = document.getElementById("enviar");
  const confirm = document.getElementById("confirm");
  const enviado = document.getElementById("enviado");

  enviar.addEventListener("click", function (event) {
    event.preventDefault();
    enviarEmail();
  });


  function enviarEmail() {
    const email = btnEmail.value;

  /*setTimeout(function() {
      confirm.style.display = "block";
      enviado.textContent = email;
      btnEmail.value = "";

      setTimeout(function() {
        confirm.style.display = "none";
      }, 1000);
    }, 1500);*/

    alert("E-mail enviado!")
  
  }
});
