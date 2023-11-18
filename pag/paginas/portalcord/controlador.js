obtenerydividrnetaworld()
obtenerydividrworldanet()

function obtenerydividrnetaworld() {
    // Obtener el valor del input original
    var informacion = document.getElementById("inputcordida").value;
  
    // Convertir la información a un número (si es necesario)
    var miVariable = parseFloat(informacion);
  
    // Verificar si la conversión fue exitosa antes de continuar
    if (!isNaN(miVariable)) {
      // Realizar la operación: dividir por 8 (o la octava parte)
      var resultado = miVariable / 8;
  
      // Asignar el resultado a otro input
      document.getElementById("resultadonet").value = resultado;
    } else {
      console.log("Por favor, ingresa un número válido en el input original.");
    }
  
    // Configurar el temporizador para volver a llamar a la función después de 2000 milisegundos (2 segundos)
    setTimeout(obtenerydividrnetaworld, 2000);
}

function obtenerydividrworldanet() {
    // Obtener el valor del input original
    var informacionn = document.getElementById("inputcordida2").value;
  
    // Convertir la información a un número (si es necesario)
    var miVariablee = parseFloat(informacionn);
  
    // Verificar si la conversión fue exitosa antes de continuar
    if (!isNaN(miVariablee)) {
      // Realizar la operación: multiplicar por 8 (o la octava parte)
      var resultadoo = miVariablee * 8;
  
      // Asignar el resultado a otro input
      document.getElementById("resultadoworld").value = resultadoo;
    } else {
      console.log("Por favor, ingresa un número válido en el input original.");
    }
  
    // Configurar el temporizador para volver a llamar a la función después de 2000 milisegundos (2 segundos)
    setTimeout(obtenerydividrworldanet, 2000);
}
  

