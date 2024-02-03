function discordclick() {
    window.open("https://discord.gg/nGHyjD8eYq", "_blank")
}




function detectarModoMovil() {
    // Verifica si el ancho de la ventana es menor que 768px (puedes ajustar este valor según tus necesidades)
    if (window.innerWidth < 768) {
        return true;
    } else {
        return false;
    }
}

function mostrarMensajeModoMovil() {
    if (detectarModoMovil()) {
        alert("Estás en modo móvil. De momento no esta disponible.");
    }
}

// Llama a la función al cargar la página
window.onload = mostrarMensajeModoMovil;





function copiarAlPortapapeles() {
    // Texto que deseas copiar
    var textoPersonalizado = "en.proceso.vuelvamastarde";
    // Crea un elemento temporal (input) para seleccionar y copiar el texto
    var inputTemp = document.createElement("input");
    // Asigna el texto al valor del input
    inputTemp.value = textoPersonalizado;
    // Agrega el input al DOM
    document.body.appendChild(inputTemp);
    // Selecciona el texto dentro del input
    inputTemp.select();
    // Copia el texto seleccionado al portapapeles
    document.execCommand("copy");
    // Elimina el input temporal del DOM
    document.body.removeChild(inputTemp);
    // Muestra un mensaje de confirmación
    alert("Texto copiado al portapapeles: " + textoPersonalizado);
}