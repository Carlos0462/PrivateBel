// Obtener la referencia a la imagen personalizada
let personalPhoto = document.getElementById('button');

// Agregar un evento de clic a la imagen personalizada
personalPhoto.addEventListener('click', () => {
    // Flash de la luz
    let light = document.getElementById('circle');
    light.classList.remove('flash-animation');
    setTimeout(function () {
        light.classList.add('flash-animation');
    }, 500);

    // Efecto de expulsión de la foto
    let eject = document.getElementById('photo');
    eject.classList.remove('eject-photo');
    setTimeout(function () {
        eject.classList.add('eject-photo');

        // Mostrar el popup con el mensaje después de que se realicen las animaciones
        setTimeout(function() {
            // Mostrar el popup con el mensaje
            let response = confirm("Hola, sé que somos mejores amigos, por eso te lo preguntaré de otra manera. ¿Quieres ser mi compañera en este día de la amistad?");

            // Mostrar un mensaje dependiendo de la respuesta del usuario
            if (response) {
              window.location.href = "https://carlos0462.github.io/";
            } else {
                alert("No Jodas ¡Me esforze pon aceptar! ¡Feliz día de la amistad!");
            }
        }, 1000); // Espera 500ms después de la animación de expulsión de la foto
    }, 1000); // Espera 500ms después de la animación de flash de luz
});