/* ══════════════════════════════════════
  journey.js
  - Każdy album = dokładnie 1 warstwa tła
   - Płynna zmiana tła dokładnie w połowie ekranu
   - Brak drżenia dzięki natywnej synchronizacji warstw
   - Start bez zdjęć (czyste intro z wideo)
   - Płynne włączanie tła od pierwszego albumu dokładnie w połowie ekranu
══════════════════════════════════════ */

const bgStack = document.getElementById('bg-stack');
const journey = document.getElementById('journey');

let bgLayers = [];

/* ── Budowanie warstw tła (zawsze 1 pierwsze zdjęcie z albumu) ── */
/* ── Budowanie warstw tła ── */
function buildBgLayers() {
ALBUMS.forEach((album, ai) => {
    // Pobieramy tylko pierwsze zdjęcie z tablicy bgs
const src = Array.isArray(album.bgs) ? album.bgs[0] : album.bgs;
const div = document.createElement('div');
div.className = 'bg-layer';
@@ -26,7 +25,7 @@ function buildBgLayers() {
});
}

/* ── Przełączanie widoczności tła (aktywuje tylko jedno wybrane) ── */
/* ── Przełączanie widoczności tła (ai = -1 oznacza ukrycie wszystkich teł) ── */
function showBg(ai) {
bgLayers.forEach(l => {
l.classList.toggle('visible', parseInt(l.dataset.ai) === ai);
@@ -73,24 +72,28 @@ function buildSections() {

/* ── Precyzyjny IntersectionObserver (wycelowany w środek ekranu) ── */
function initObserver() {
  // rootMargin "-50% 0px" sprawia, że strefa detekcji staje się wąską linią na samym środku ekranu.
  // Kiedy sekcja najeżdża na tę linię, natychmiast odpala się zmiana zdjęcia.
const obs = new IntersectionObserver(entries => {
entries.forEach(e => {
if (e.isIntersecting) {
        const ai = parseInt(e.target.dataset.ai);
        // Jeśli środkową linię przetnie sekcja intro, przekazujemy ai = -1 (co gasi zdjęcia)
        const ai = e.target.id === 'intro-section' ? -1 : parseInt(e.target.dataset.ai);
showBg(ai);
}
});
}, { rootMargin: "-50% 0px -50% 0px" });

  // Obserwujemy zarowno tytuł jak i sekcję z utworami, dzięki temu pierwsze zdjęcie 
  // zaczyna się od razu po napisie "Albumy" i trwa stabilnie aż do połowy następnego albumu.
  // Obserwujemy sekcje albumów
document.querySelectorAll('.js-title, .js-content').forEach(s => obs.observe(s));
  
  // Obserwujemy sekcję intro, aby wiedzieć kiedy użytkownik wrócił na samą górę
  const intro = document.getElementById('intro-section');
  if (intro) {
    obs.observe(intro);
  }
}

/* ── Init ── */
buildBgLayers();
buildSections();
initObserver();
showBg(0); // Pierwsze zdjęcie aktywne na starcie
// USUNIĘTO: showBg(0) - dzięki temu strona startuje w pełnej czerni bez zdjęcia w tle!
