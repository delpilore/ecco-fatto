const listingView = document.getElementById("listingView");
const inviteView   = document.getElementById("inviteView");

const revealBtn = document.getElementById("revealBtn");
const heroBtn   = document.getElementById("heroBtn");
const fakeBtn   = document.getElementById("fakeBtn");

const yesBtn   = document.getElementById("yesBtn");
const maybeBtn = document.getElementById("maybeBtn");
const result   = document.getElementById("result");

const confetti = document.getElementById("confetti");

function swapViews() {
  listingView.classList.remove("view--active");
  // piccolo delay per far vedere la transizione
  setTimeout(() => {
    inviteView.classList.add("view--active");
    burstHearts(26);
  }, 80);
}

function burstHearts(n = 20) {
  const symbols = ["💘","❤️","✨","🌹","💞","🥂"];
  for (let i = 0; i < n; i++) {
    const s = document.createElement("span");
    s.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    s.style.left = Math.random() * 100 + "vw";
    s.style.animationDuration = (2.5 + Math.random() * 2.5) + "s";
    s.style.transform = `translateY(0) rotate(${Math.random()*180}deg)`;
    confetti.appendChild(s);

    setTimeout(() => s.remove(), 6000);
  }
}

function setMessage(text) {
  result.textContent = text;
}

revealBtn.addEventListener("click", swapViews);
heroBtn.addEventListener("click", swapViews);

fakeBtn.addEventListener("click", () => {
  // easter egg carino: “salva” ma con allusione
  setMessage("Annuncio salvato. (Ok… ora clicca ‘Richiedi info’ 😄)");
  // feedback veloce senza reveal
  burstHearts(8);
  setTimeout(() => (result.textContent = ""), 2500);
});

yesBtn.addEventListener("click", () => {
  setMessage("Yesss! 💖 Allora è un appuntamento. Ti scrivo i dettagli e ci vestiamo belli.");
  burstHearts(40);
});

maybeBtn.addEventListener("click", () => {
  setMessage("Va benissimo 😉 Mi basta stare con te. Decidiamo insieme dove andare.");
  burstHearts(22);
});
