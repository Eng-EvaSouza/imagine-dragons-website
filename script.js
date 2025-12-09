const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.querySelector("#nome").value;
  const apelido = document.querySelector("#apelido").value;
  const data = document.querySelector("#data").value;
  const email = document.querySelector("#email").value;
  const telefone = document.querySelector("#telefone").value;
  const mensagem = document.querySelector("#mensagem").value;

  if (
    nome === "" ||
    apelido === "" ||
    data === "" ||
    email === "" ||
    telefone === "" ||
    mensagem === ""
  ) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  alert("Formulário enviado com sucesso!");
  form.reset();
});