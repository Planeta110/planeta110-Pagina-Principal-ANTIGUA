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
var fondobotons = document.getElementById("fondoboton");
var updatess = document.getElementById('updates')

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





//document.addEventListener('mousemove', (e) => {
    // Obtén la posición del cursor y actualiza la posición del cursor personalizado
    //const customCursor = document.getElementById('custom-cursor');
    //customCursor.style.left = e.pageX - customCursor.offsetWidth / 2 + 'px';
    //customCursor.style.top = e.pageY - customCursor.offsetHeight / 2 + 'px';
//});

function verificaFormatoImagen() {
    return new Promise(function(resolve) {
        var avifImg = new Image();
        avifImg.onload = function() {
            var webpImg = new Image();
            webpImg.onload = function() {
                resolve(true); // Ambas imágenes (AVIF y WebP) se cargaron correctamente
            };
            webpImg.onerror = function() {
                resolve(false); // La imagen WebP no se cargó correctamente
            };
            webpImg.src = '/pag/imag/portals.webp'; // Ruta real de una imagen WebP
        };
        avifImg.onerror = function() {
            resolve(false); // La imagen AVIF no se cargó correctamente
        };
        avifImg.src = '/pag/imag/NULL.avif'; // Ruta real de una imagen AVIF
    });
}

// Uso de la función
verificaFormatoImagen().then(function(result) {
    if (result) {
        console.log('El formato AVIF y WebP son compatibles.');
    } else {
        console.log('El formato AVIF y/o WebP no son compatibles.');
        window.location.href = 'pag/paginas/errorload/error.html';
    }
});

verificaFormatoImagen();
verificaFormatoImagen().then;

