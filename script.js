const rainContainer = document.getElementById("rain-container");
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

const words = ["TE", "AMO", "❤️", "MI", "VIDA", "TE AMO"];
const totalWords = 70;

// Crear lluvia de palabras
for (let i = 0; i < totalWords; i++) {
  const word = document.createElement("div");
  word.classList.add("rain-word");
  word.textContent = words[Math.floor(Math.random() * words.length)];

  word.style.left = Math.random() * 100 + "vw";
  word.style.fontSize = (18 + Math.random() * 24) + "px";
  word.style.animationDuration = (6 + Math.random() * 8) + "s";
  word.style.animationDelay = (Math.random() * 8) + "s";
  word.style.opacity = (0.5 + Math.random() * 0.5).toFixed(2);

  rainContainer.appendChild(word);
}

// Corazones flotando
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (14 + Math.random() * 26) + "px";
  heart.style.animationDuration = (4 + Math.random() * 4) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 700);

// Música
let playing = false;

musicBtn.addEventListener("click", async () => {
  try {
    if (!playing) {
      await bgMusic.play();
      musicBtn.textContent = "⏸️ Pausar música";
      playing = true;
    } else {
      bgMusic.pause();
      musicBtn.textContent = "🎵 Toca aquí";
      playing = false;
    }
  } catch (error) {
    alert("No se pudo reproducir la música. Revisa que el archivo se llame musica.mp3");
  }
});