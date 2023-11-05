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