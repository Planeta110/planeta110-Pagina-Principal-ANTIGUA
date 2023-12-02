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


if (localStorage.getItem('juegosj')) {
  logrosos.textContent = `Has jugado ${juegosjugados} juegos`
} else {
  // El objeto no existe en localStorage
}


//if (usuario) {
 // logrosos.textContent = `Paginas visitadas y juegos usados ${}`
//}





