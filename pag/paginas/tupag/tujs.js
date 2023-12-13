const usuario = localStorage.getItem("usuario");

const bienvenida = document.getElementById('hola');
const logrosos = document.getElementById('logros');

juegosjugados = localStorage.getItem('juegosj');

// Verifica si el usuario existe antes de asignar el título
if (usuario) {
  document.title = `${usuario} | Hola`;
} else {
  // Asigna un título predeterminado en caso de que no haya un usuario en localStorage
  document.title = 'No hay cuenta';
}

// Actualiza el contenido del elemento con el ID 'hola'
if (localStorage.getItem('usuario')) {
  bienvenida.textContent = `¡Hola ${usuario}!\nTus records y juegos jugados`;
  bienvenida.style.fontSize = '20px';
  bienvenida.style.color = 'white';
  bienvenida.style.fontWeight = 'bold';
  bienvenida.style.textAlign ='center';
} else {
  bienvenida.textContent = '¡Hola Invitado!\nNo podemos acceder a tus datos registrate para guardarlos ';
}

window.onload = function() {
  if (localStorage.getItem('usuario')) {
    console.log("Tiene cuenta");
  } else {
    window.location.href = "/index.html";
  }
};

var personaj1 = document.getElementById("personaje1");
var personaj2 = document.getElementById("personaje2")
var personaj3 = document.getElementById("personaje3")
var personaj4 = document.getElementById("personaje4")

if (localStorage.getItem('juegosj')) {
  logrosos.textContent = `Has jugado ${juegosjugados} juegos`
} else {
  // El objeto no existe en localStorage
}

// Oculta todos los personajes
personaj1.style.display = "none";
personaj2.style.display = "none";
personaj3.style.display = "none";
personaj4.style.display = "none";

// Variable para rastrear el personaje actualmente visible
var personajeActual = personaj1;

function flechaiz() {
  // Oculta el personaje actualmente visible
  personajeActual.style.display = "none";

  // Muestra el siguiente personaje en orden circular
  if (personajeActual === personaj1) {
    personajeActual = personaj2;
  } else if (personajeActual === personaj2) {
    personajeActual = personaj3;
  } else if (personajeActual === personaj3) {
    personajeActual = personaj4;
  } else if (personajeActual === personaj4) {
    personajeActual = personaj1;
  }

  // Muestra el nuevo personaje
  personajeActual.style.display = "block";
}

//function comprarpersonaj() {
//  if(personajeActual === personaj1.style.display = "block"){
//    localStorage.getItem("monedas",monedas)
//    var monedas -= 10,
//  }
//

// Obtén las monedas del almacenamiento local y conviértelas a un número
var monedas = parseInt(localStorage.getItem("monedas")) || 0;

function comprarpersonaje() {
  if (personajeActual === personaj1 && personajeActual.style.display === "block") {
    if (monedas >= 4) {
      // Comprueba si el personaje actual es visible
      // Resta las monedas necesarias y actualiza el almacenamiento local
      monedas -= 4; // Cambié de 10 a 4 según tu comentario anterior
      localStorage.setItem("monedas", monedas);
      alert("Se compro correctamente ")
    }
  }

  if (personajeActual === personaj2 && personajeActual.style.display === "block") {
    if (monedas >= 8) {
      monedas -= 8;
      localStorage.setItem("monedas", monedas);
      alert("Se compro correctamente ")
    }
  }

  if (personajeActual === personaj3 && personajeActual.style.display === "block") {
    if (monedas >= 2) {
      monedas -= 2;
      localStorage.setItem("monedas", monedas);
      alert("Se compro correctamente ")
    }
  }

  if (personajeActual === personaj4 && personajeActual.style.display === "block") {
    if (monedas >= 5) {
      monedas -= 5;
      localStorage.setItem("monedas", monedas);
      alert("Se compro correctamente ")
    }
  }
}








//if (usuario) {
 // logrosos.textContent = `Paginas visitadas y juegos usados ${}`
//}





