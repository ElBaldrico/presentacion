// JavaScript Document
const diapositivas = document.querySelectorAll('.diapositiva');
let diapositivaActual = 0;

// Función para cambiar de diapositiva
function cambiarDiapositiva(n) {
    diapositivas[diapositivaActual].classList.remove('activa');
    diapositivaActual = (diapositivaActual + n + diapositivas.length) % diapositivas.length;
    diapositivas[diapositivaActual].classList.add('activa');
}

// Controladores de botones
document.getElementById('anterior').addEventListener('click', () => cambiarDiapositiva(-1));
document.getElementById('siguiente').addEventListener('click', () => cambiarDiapositiva(1));

// Temporizador automático
setInterval(() => cambiarDiapositiva(1), 90000); // Cambia cada 90 segundos

