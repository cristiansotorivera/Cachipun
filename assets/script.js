// Función para generar la elección aleatoria de la máquina
function generaJuegoMaquina() {
    const opciones = ["piedra", "papel", "tijera"];
    return opciones[Math.floor(Math.random() * opciones.length)];
  }
  
  // Función para determinar el ganador
  function ganador(eleccionUsuario, eleccionMaquina) {
    if (eleccionUsuario === eleccionMaquina) {
      return "Empate";
    } else if (
      (eleccionUsuario === "piedra" && eleccionMaquina === "tijera") ||
      (eleccionUsuario === "papel" && eleccionMaquina === "piedra") ||
      (eleccionUsuario === "tijera" && eleccionMaquina === "papel")
    ) {
      return "Ganaste";
    } else {
      return "Perdiste";
    }
  }
  
  // Función para jugar una ronda
  function jugarRonda() {
    // Obtener la cantidad de rondas
    const cantidadRondas = parseInt(prompt("¿Cuántas veces quieres jugar?"));
  
    // Validar la cantidad de rondas
    if (isNaN(cantidadRondas) || cantidadRondas <= 0) {
      alert("Cantidad inválida. Debe ser un número positivo.");
      return;
    }
  
    // Jugar las rondas
    for (let i = 0; i < cantidadRondas; i++) {
      // Obtener la elección del usuario
      const eleccionUsuario = prompt("Introduzca su elección (piedra, papel o tijera): ").toLowerCase();
  
      // Validar la elección del usuario
      if (!["piedra", "papel", "tijera"].includes(eleccionUsuario)) {
        alert("Elección inválida. Intente nuevamente.");
        continue;
      }
  
      // Generar la elección de la máquina
      const eleccionMaquina = generaJuegoMaquina();
  
      // Mostrar las elecciones
      console.log(`Tu elección: ${eleccionUsuario}`);
      console.log(`Elección de la máquina: ${eleccionMaquina}`);
  
      // Determinar el ganador
      const resultado = ganador(eleccionUsuario, eleccionMaquina);
      console.log(`Resultado: ${resultado}`);
  
      // Mostrar un mensaje al usuario
      if (resultado === "Ganaste") {
        alert("¡Felicidades! cachipun master.");
      } else if (resultado === "Perdiste") {
        alert("Perdiste! inténtalo otra vez.");
      } else {
        alert("Empate. ¡Inténtalo nuevamente!");
      }
    }
  
    // Mensaje de despedida
    alert("¡Gracias por jugar Cachipun Master!");
  }
  
  // Iniciar el juego
  jugarRonda();