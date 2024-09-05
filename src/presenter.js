import ejecutarComandos from "./simulador.js";

const inputComandos = document.querySelector("#input-comandos");
const form = document.querySelector("#ejecutar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const comandos = inputComandos.value;
  const resultado = ejecutarComandos(comandos);

  div.innerHTML = `<p>Posición Final: ${resultado}</p>`;
});
