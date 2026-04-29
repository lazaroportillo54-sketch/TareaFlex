document.addEventListener("DOMContentLoaded", () => {

    const boton = document.getElementById("btnVerificar");

    boton.addEventListener("click", verificarEdad);

    function verificarEdad() {
        let edadInput = document.getElementById("edad");
        let mensaje = document.getElementById("mensaje");
        let overlay = document.getElementById("overlay");

        let edad = Number(edadInput.value);

        // VALIDACIONES
        if (edadInput.value === "" || isNaN(edad)) {
            mensaje.textContent = "Por favor ingresa una edad válida";
            mensaje.style.color = "red";
            return;
        }

        if (edad < 0) {
            mensaje.textContent = "No se permiten edades negativas";
            mensaje.style.color = "red";
            return;
        }

        if (edad < 18) {
            mensaje.textContent = "Acceso denegado 🚫";
            mensaje.style.color = "orange";
            return;
        }

        // ACCESO PERMITIDO
        mensaje.textContent = "Acceso permitido ✅";
        mensaje.style.color = "lightgreen";

        // Animación de salida
        overlay.style.transition = "opacity 1s ease, backdrop-filter 1s ease";
        overlay.style.opacity = "0";
        overlay.style.backdropFilter = "blur(0px)";

        // Redirección
        setTimeout(() => {
            window.location.href = "bienvenido.html";
        }, 1200);
    }

});
