document.getElementById("mostrarVentana").onclick = function() {
    document.getElementById("miVentana").style.display = "block";
}

document.getElementById("cerrarVentana").onclick = function() {
    document.getElementById("miVentana").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("miVentana")) {
        document.getElementById("miVentana").style.display = "none";
    }
}


var miOcultar = document.getElementById("bienvenida");
var logueares = document.getElementById("loguear");
var regi = document.getElementById("reg");
var controlpanel = document.getElementById("control")

window.onload = function() {
    miOcultar.style.display = "block";
    if (localStorage.getItem('usuario')) {
        logueares.style.display = "none";
        controlpanel.style.display = "block";
    } else {
        controlpanel.style.display = "none";
        logueares.style.display = "block";
    }
}

function cerrar() {
    miOcultar.style.display = "none";
}

function loguearte() {
    regi.style.display = "block";
}

var juegosjugados = parseInt(localStorage.getItem("juegosj")) || 0;

function jugadomas1() {
    // Incrementa el valor de juegosjugados
    var monedas = localStorage.getItem("monedas") || 0; // Si no hay un valor almacenado, asigna 0
    monedas = parseInt(monedas, 10) + 1; // Incrementa en 1 el valor de monedas
    localStorage.setItem("monedas", monedas);
  
    var juegosjugados = localStorage.getItem("juegosj") || 0; // Si no hay un valor almacenado, asigna 0
    juegosjugados = parseInt(juegosjugados, 10) + 1; // Incrementa en 1 el valor de juegosjugados
    localStorage.setItem("juegosj", juegosjugados);
  
    return juegosjugados;
}


function desloguearse() {
    controlpanel.style.display = "none";
    logueares.style.display = "block";
    localStorage.removeItem("usuario");
    localStorage.removeItem("juegosj");
}


function registrarte() {
    
    monedas = 0;
    juegosjugados = 0;
    localStorage.setItem("juegosj", juegosjugados)
    localStorage.setItem("monendas",monedas)
    var usuario = document.getElementById("usuario").value;
    localStorage.setItem("usuario", usuario);
    console.log(`El nombre de usuario establecido es ${usuario}`);
    regi.style.display = "none";
    loguear.style.display = "none";
    controlpanel.style.display = "block";
    if (localStorage.getItem("usuario")) {
        console.log("El usuario ya está registrado");
    }
}

function cerrarreg() {
    regi.style.display = "none";
}





 

