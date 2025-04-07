// Function for setting the song
function setNewSong() {
  var audioElement = document.getElementById("loading");
  audioElement.src = "song/song1.mp3";

  // Ensure the song loops indefinitely
  audioElement.loop = true;

  // Add a delay of 2 seconds before playing the audio
  setTimeout(function () {
    // Establecer que el audio comience en el segundo 28
    audioElement.currentTime = 28;
    audioElement.play().catch(function (error) {
      console.error("Error playing audio:", error);
    });
  }, 4000);
}

// Function for setting the song when the page loads
document.addEventListener("DOMContentLoaded", function () {
  setNewSong();
});

document.addEventListener("DOMContentLoaded", function () {
  // Obtener los elementos del DOM
  var audioElement = document.getElementById("myAudio");
  var muteIcon = document.getElementById("muteIcon");

  if (!audioElement || !muteIcon) {
    console.error('No se encontraron los elementos con los IDs especificados.');
    return;
  }

  // Establecer volumen inicial al 70%
  audioElement.volume = 0.4; // Asegúrate de que el valor esté en el rango de 0.0 a 1.0

  // Función para actualizar el icono dependiendo del estado del audio
  function updateMuteStatus() {
    if (audioElement.muted) {
      muteIcon.textContent = 'music_off'; // Cambiar el icono a "music_off"
    } else {
      muteIcon.textContent = 'music_note'; // Cambiar el icono a "music_note"
    }
  }

  // Inicializar el estado de mute
  updateMuteStatus();

  // Evento para mutear/desmutear el audio con la tecla espacio
  window.addEventListener('keydown', function (event) {
    if (event.key === ' ') { // Detecta si la tecla presionada es espacio
      event.preventDefault(); // Evitar que la página se desplace al presionar espacio
      audioElement.muted = !audioElement.muted; // Mutea o desmutea el audio
      updateMuteStatus(); // Actualiza el icono
    }
  });

  // Evento para mutear/desmutear el audio al hacer clic en el icono
  muteIcon.addEventListener('click', function () {
    audioElement.muted = !audioElement.muted; // Mutea o desmutea el audio
    updateMuteStatus(); // Actualiza el icono
  });
});
