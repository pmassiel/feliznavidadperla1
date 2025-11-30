// Seleccionar todos los círculos
const circles = document.querySelectorAll('.circle');

// Velocidad del cambio (en milisegundos)
const interval = 500;

let index = 0;

function christmasLights() {
    // Apagar todos los círculos
    circles.forEach(circle => {
        circle.style.opacity = "0.2";
    });

    // Encender solo el círculo actual
    circles[index].style.opacity = "1";

    // Pasar al siguiente
    index++;

    // Si llega al final, vuelve al inicio
    if (index >= circles.length) {
        index = 0;
    }
}

// Ejecutar la animación cada intervalo
setInterval(christmasLights, interval);

function createStar() {
  const container = document.getElementById("stars-container");
  const star = document.createElement("div");
  star.classList.add("star");

  // Posición horizontal aleatoria
  star.style.left = Math.random() * 100 + "vw";

  // Diferentes tamaños
  const size = Math.random() * 3 + 2;
  star.style.width = size + "px";
  star.style.height = size + "px";

  // Duración de la caída
  star.style.animationDuration = Math.random() * 3 + 2 + "s";

  container.appendChild(star);

  // Borrado al terminar
  setTimeout(() => {
    star.remove();
  }, 5000);
}

// Crea estrellas continuamente
setInterval(createStar, 120);
