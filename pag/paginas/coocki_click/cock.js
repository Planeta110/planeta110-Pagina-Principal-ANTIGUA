let contador = 0;
const resultadoElement = document.getElementById("resultado");
let cursorr = 0;
let segundosAesperarCur = 1000;
let abuelas = 0;
let supercursor =0;

function mas1() {
    contador += 1;
    resultadoElement.textContent = "Galletas: " + contador;
}


function cursor() {
  if (contador >= 50) {
    contador -= 50;
    cursorr += 1;
    aumentarContador()
  } else{
    resultadoElement.textContent = "No tienes suficientes galletas";
  }
  
}

function aumentarContador() {
  contador += 1 * cursorr;
  resultadoElement.textContent = "Galletas: " + contador;
  setTimeout(function() {
    aumentarContador()
  }, 10000);
  
}

function abuela() {
  if (contador >= 500) {
    contador -= 500;
    abuelas += 1;
    aumentarContadorABU()
  } else{
    resultadoElement.textContent = "No tienes suficientes galletas";
  }
  
}

function aumentarContadorABU() {
  contador += 100 * abuelas;
  resultadoElement.textContent = "Galletas: " + contador;
  setTimeout(function() {
    aumentarContadorABU()
  }, 30000);
  
}


function supcursor() {
  if (contador >= 3000) {
    contador -= 3000;
    supercursor += 1;
    aumentarContadorSPC()
  } else{
    resultadoElement.textContent = "No tienes suficientes galletas";
  }
  
}

function aumentarContadorSPC() {
  contador += 1000 * supercursor;
  resultadoElement.textContent = "Galletas: " + contador;
  setTimeout(function() {
    aumentarContadorSPC()
  }, 35000);
  
}
