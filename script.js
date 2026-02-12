/* Floating Hearts */
setInterval(() => {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerHTML = "❤️";
  h.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 8000);
}, 400);

/* Music */
const music = document.getElementById("bgMusic");
let playing = false;
function toggleMusic() {
  playing ? music.pause() : music.play();
  playing = !playing;
}

/* Typing */
const typingName = document.getElementById("typingName");
const text = "Happy Hug Day, Buggiiii ❤️";
let i = 0;
(function type() {
  if (i < text.length) {
    typingName.textContent += text[i++];
    setTimeout(type, 120);
  }
})();

/* Infinite Cards */
const cards = document.getElementById("cards");
const cardWidth = 240;
const visibleCards = 3;
const originals = [...cards.children];

originals.slice(-visibleCards).reverse().forEach(c => cards.prepend(c.cloneNode(true)));
originals.slice(0, visibleCards).forEach(c => cards.appendChild(c.cloneNode(true)));

cards.scrollLeft = cardWidth * visibleCards;

function scrollCards(dir) {
  cards.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
}

cards.addEventListener("scroll", () => {
  const maxScroll = cardWidth * originals.length;
  if (cards.scrollLeft <= 0) cards.scrollLeft = maxScroll;
  if (cards.scrollLeft >= maxScroll + cardWidth * visibleCards) {
    cards.scrollLeft = cardWidth * visibleCards;
  }
});

/* Flip */
cards.addEventListener("click", e => {
  const card = e.target.closest(".card");
  if (card) card.classList.toggle("flipped");
});

/* Promise */
function showPromise() {
  document.getElementById("promiseBox").classList.add("show");
}
function closePromise() {
  document.getElementById("promiseBox").classList.remove("show");
  document.getElementById("sideCards").classList.add("show");
}


/* ✅ SIDE CARD FLIP */
document.addEventListener("click", e => {
  const flip = e.target.closest(".flip-card");
  if (flip) flip.classList.toggle("flipped");
});
