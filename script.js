document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formularioContato");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Mensagem enviada com sucesso!");
      form.reset();
    });
  }
});
