const recipeView = document.getElementById("recipeView");
const inviteView = document.getElementById("inviteView");

const revealBtn = document.getElementById("revealBtn");
const heroBtn   = document.getElementById("heroBtn");
const fakeBtn   = document.getElementById("fakeBtn");

const yesBtn   = document.getElementById("yesBtn");
const maybeBtn = document.getElementById("maybeBtn");
const result   = document.getElementById("result");

const confetti = document.getElementById("confetti");

let revealed = false;

function swapViews() {
  if (revealed) return;
  revealed = true;

  recipeView.classList.remove("view--active");
  setTimeout(() => {
    inviteView.classList.add("view--active");
    burstHearts(28);
  }, 80);
}

function burstHearts(n = 20) {
  const symbols = ["💘","❤️","✨","🌹","💞","🥂"];
  for (let i = 0; i < n; i++) {
    const s = document.createElement("span");
    s.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    s.style.left = Math.random() * 100 + "vw";
    s.style.animationDuration = (2.5 + Math.random() * 2.5) + "s";
    confetti.appendChild(s);
    setTimeout(() => s.remove(), 6000);
  }
}

function setMessage(text) {
  result.textContent = text;
}

// Trigger espliciti
revealBtn.addEventListener("click", (e) => { e.stopPropagation(); swapViews(); });
heroBtn.addEventListener("click",  (e) => { e.stopPropagation(); swapViews(); });

// “Clicca ovunque” nella prima vista (ma non farlo scattare quando premi i bottoni)
recipeView.addEventListener("click", (e) => {
  const tag = (e.target?.tagName || "").toLowerCase();
  if (tag === "button" || tag === "a") return;
  swapViews();
});

// Easter egg “salva”
fakeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  // Messaggino breve senza rivelare per forza (ma puoi decidere di rivelare anche qui)
  burstHearts(10);
});

// Risposte nell’invito
yesBtn.addEventListener("click", () => {
  setMessage("Sììì! 💖 Allora è deciso: giornata ad Alberio di Mugello (la Flufflet) + cena con vista.");
  burstHearts(42);
});

maybeBtn.addEventListener("click", () => {
  setMessage("Perfetto 😉 Ti mando i dettagli e scegliamo insieme il posto ‘con vista’.");
  burstHearts(26);
});
