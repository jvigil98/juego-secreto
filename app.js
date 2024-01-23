/* let titulo = document.querySelector("h1");
titulo.innerHTML = "Juego del número secreto";
let parrafo = document.querySelector("p");
parrafo.innerHTML= "Escoja un número del 1 al 10";
*/
let numeroSecreto = 0;
console.log(numeroSecreto);
let intentos = 0;
let listaNumero = [];
let numeroMaximo = 10;

function asignarTextoElemento(elmento, texto) {
  let elemnetoHTML = document.querySelector(elmento);
  elemnetoHTML.innerHTML = texto;
}

function intentoDeUsuario() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  console.log(intentos);
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //EL usuario no acerto
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("P", "El número es menor");
    } else {
      asignarTextoElemento("P", "El número secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  let valorCaja = document.querySelector("#valorUsuario");
  valorCaja.value = "";
}

function generarNumeroAleatorio() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  //Si el numero generado esta incluido en la lista

  console.log(numeroGenerado);
  console.log(listaNumero);
  //Si ya sorteamos todos los numeros
  if (listaNumero.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon los números posibles");
  } else {
    //Si el numero generado esta incluido en la lista
    if (listaNumero.includes(numeroGenerado)) {
      return generarNumeroAleatorio();
    } else {
      listaNumero.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroAleatorio();
  intentos = 1;
}

function reiniciarJuego() {
  //Limpiar caja
  limpiarCaja();
  //Indicar intervalo de numeros
  condicionesIniciales();
  //Generar numero aleatorio

  //Deshabilitar el boton

  //Inicializar el numero de intentos
  document.querySelector("#reiniciar").setAttribute("disabled", true);
}
condicionesIniciales();
