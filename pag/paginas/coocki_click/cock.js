let contador = parseInt(localStorage.getItem("contador")) || 0;
let cursorr = parseInt(localStorage.getItem("curosr")) || 0;
let abuelas = parseInt(localStorage.getItem("abuela")) || 0;
let supercursor = parseInt(localStorage.getItem("supercursor")) || 0;
const resultadoElement = document.getElementById("resultado");
let segundosAesperarCur = 1000;

function mas1() {
    contador += 1;
    resultadoElement.textContent = "Galletas: " + contador;
}

if (cursorr => 1) {
  aumentarContador()
}
if (abuelas => 1) {
  aumentarContadorABU()
}
if (supercursor => 1) {
  aumentarContadorSPC()
}

function reiniciar() {
  contador = 0;
  cursorr = 0;
  abuelas = 0;
  supercursor = 0;

  localStorage.setItem("contador", contador.toString());
  localStorage.setItem("curosr", cursorr.toString());
  localStorage.setItem("abuela", abuelas.toString());
  localStorage.setItem("supercursor", supercursor.toString());

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


// function cargarDesdeLocalStorage() {
//   contador = parseInt(localStorage.getItem('galletas'), 10) || 0;
//   cursorr = parseInt(localStorage.getItem('cursores'), 10) || 0;
//   abuelas = parseInt(localStorage.getItem('abuelas'), 10) || 0;
//   supercursor = parseInt(localStorage.getItem('supercursores'), 10) || 0;

//   // Luego de cargar los datos, puedes iniciar el bucle para guardar datos cada 10 segundos
//   bucleInfinito();
// }

// // Llama a la función para cargar los datos al cargar la página
// cargarDesdeLocalStorage();

// Función para guardar datos en localStorage cada 10 segundos
// function bucleInfinito() {
//   localStorage.setItem('galletas', contador);
//   localStorage.setItem('cursores', cursorr);
//   localStorage.setItem('abuelas', abuelas);
//   localStorage.setItem('supercursores', supercursor);
//   setTimeout(bucleInfinito, 10000); // Guardar datos cada 10 segundos
// }
function bucleConSetTimeout() {
    guardar_localstorage()
    setTimeout(bucleConSetTimeout, 3000); // Llama a la función nuevamente después de 1 segundo (1000 milisegundos)
}


bucleConSetTimeout()


function guardar_localstorage () {
  if(localStorage.setItem("contador", contador),localStorage.setItem("curosr", cursorr),
    localStorage.setItem("abuela", abuelas),
    localStorage.setItem("supercursor", supercursor)){
      localStorage.setItem("contador", contador.toString());
      localStorage.setItem("curosr", cursorr.toString());
      localStorage.setItem("abuela", abuelas.toString());
      localStorage.setItem("supercursor", supercursor.toString());
    
  } else{
    let abuelas = 0;
    let supercursor =0;
    let cursorr = 0;
    let contador = 0;
    obtener_localstorage()
  }
}

function obtener_localstorage() {
  let contador = parseInt(localStorage.getItem("contador")) || 0;
  let cursorr = parseInt(localStorage.getItem("curosr")) || 0;
  let abuelas = parseInt(localStorage.getItem("abuela")) || 0;
  let supercursor = parseInt(localStorage.getItem("supercursor")) || 0;
  resultadoElement.textContent = "Galletas: " + contador;
  
}

