'use strict';

/* ── Deklaracje elementów DOM na samym początku pliku ── */
const overlay        = document.getElementById('overlay');
const overlayContent = document.getElementById('overlay-content');
const overlayClose   = document.getElementById('overlay-close');
const lightbox       = document.getElementById('lightbox');
const lbCounter      = document.getElementById('lightbox-counter');

let lbIdx = 0;
let lbGallery = (typeof GALLERY !== 'undefined') ? GALLERY : [];
let _currentGallery = (typeof GALLERY !== 'undefined') ? GALLERY : [];
let currentOverlayPage = null;
let currentOverlayExtra = null;

/* ── Zarządzanie Overlayem podstron ── */
function openOverlay(page, extra) {
  if (!overlay || !overlayContent) return;
  currentOverlayPage = page;
  currentOverlayExtra = extra;
  overlay.classList.add('visible');
  document.body.style.overflow = 'hidden';
  overlayContent.innerHTML = buildPage(page, extra);
  overlayContent.scrollTop = 0;
  
  if (page === 'gallery' && typeof GALLERY !== 'undefined') initGalleryRows(GALLERY);
  if (page === 'ebru' && typeof GALLERY_EBRU !== 'undefined') initGalleryRows(GALLERY_EBRU);
  if (page === 'marmurkowanie' && typeof GALLERY_EBRU !== 'undefined') initGalleryRows(GALLERY_EBRU);
}

function closeOverlay() {
  if (!overlay) return;
  overlay.classList.remove('visible');
  document.body.style.overflow = '';
  window.scrollTo({ top: 0, behavior: 'instant' });
}

if (overlayClose) overlayClose.addEventListener('click', closeOverlay);
if (overlay) {
  overlay.addEventListener('click', e => { if (e.target === overlay) closeOverlay(); });
}

/* ── Obsługa klawiszy (Esc, Strzałki) ── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (lightbox && lightbox.classList.contains('visible')) closeLightbox();
    else closeOverlay();
  }
  if (lightbox && lightbox.classList.contains('visible')) {
    if (e.key === 'ArrowRight') lbNext();
    if (e.key === 'ArrowLeft')  lbPrev();
  }
});

/* ── Router i budowanie struktur HTML podstron ── */
function buildPage(page, extra) {
  switch (page) {
    case 'projects': return buildProjects();
    case 'project':  return buildProject(extra);
    case 'gallery':  return buildGalleryPage('gallery');
    case 'ebru':     return buildGalleryPage('ebru');
    case 'contact':  return buildContact();
    default: return '';
  }
}

function buildProjects() {
  if (typeof PROJECTS === 'undefined') return '';
  return `
    <h1 class="sp-title">${t('projekty')}</h1>
    <div class="pj-list">
      ${PROJECTS.map(p => `
        <div class="pj-row" onclick="openOverlay('project','${p.id}')">
          <span class="pj-year">${tYear(p.year)}</span>
          <span class="pj-name">${p.name}</span>
          <span class="pj-tag">${td(p,'tag')}</span>
          <span class="pj-arrow">→</span>
        </div>`).join('')}
    </div>`;
}

function buildProject(id) {
  if (typeof PROJECTS === 'undefined') return '';
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return '<p style="color:rgba(240,237,232,.3)">Nie znaleziono projektu.</p>';

  const tracksBlock = (p.tracks && p.tracks.length > 0) ? `
    <div class="pj-tracks">
      <span class="section-label">${t('utwory')}</span>
      <div class="tracklist-simple">
        ${p.tracks.map((tr, i) => `
          <div class="tls-row">
            <span class="tls-num">${String(i+1).padStart(2,'0')}</span>
            <span class="tls-name">${tr.title}</span>
          </div>`).join('')}
      </div>
    </div>` : '';

  const linkBlock = p.link ? `
    <a class="pj-link" href="${p.link}" target="_blank" rel="noopener">${t('strona_projektu')}</a>` : '';

  return `
    <button class="sp-back" onclick="openOverlay('projects')">← ${t('projekty')}</button>
    <span class="sp-eyebrow">${td(p,'tag')} · ${tYear(p.year)}</span>
    <h1 class="sp-title">${p.name}</h1>
    <p class="sp-desc">${td(p,'desc')}</p>
    ${linkBlock}
    ${tracksBlock}`;
}

function buildGalleryPage(page) {
  if (typeof GALLERY === 'undefined' || typeof GALLERY_EBRU === 'undefined') return '';
  const isEbru = page === 'ebru';
  const series = isEbru ? GALLERY_EBRU : GALLERY;
  const title = isEbru ? t('marmurkowanie') : t('serie');
  const eyebrow = isEbru ? t('ebru_marmurkowanie') : t('fotografia_serie');
  return `
    <span class="sp-eyebrow">${eyebrow}</span>
    <h1 class="sp-title">${title}</h1>
    <div class="gl-rows" id="gl-rows">
      ${series.map((s, i) => {
        const seriaTitle = s.title.replace(/^Seria/, t('seria'));
        return `
        <div class="gl-row-item" data-series="${i}">
          <img class="gl-row-img" src="${s.cover}" alt="${seriaTitle}" loading="lazy"
            onerror="this.outerHTML='<div class=\\'gl-row-placeholder\\'>${seriaTitle}</div>'">
          <div class="gl-row-label">${seriaTitle} <span class="gl-row-count">${s.images.length}</span></div>
        </div>`;
      }).join('')}
    </div>`;
}

function buildContact() {
  if (typeof CONTACT === 'undefined') return '';
  return `
    <h1 class="sp-title">${t('kontakt')}</h1>
    <div class="ct-body">
      ${CONTACT.links.map(l => `
        <a class="ct-row" href="${l.href}" target="_blank" rel="noopener">
          <span class="ct-lbl">${l.label}</span>
          <span class="ct-val">${l.val}</span>
          <span class="ct-arrow">→</span>
        </a>`).join('')}
    </div>`;
}

/* ── Obsługa galerii wierszowej (Grid) ── */
function initGalleryRows(galleryArr) {
  const rows = document.getElementById('gl-rows');
  if (!rows) return;
  rows.addEventListener('click', e => {
    const item = e.target.closest('.gl-row-item');
    if (!item) return;
    const seriesIdx = parseInt(item.dataset.series);
    const series = galleryArr[seriesIdx];
    const lbImages = series.images.map(src => ({ src }));
    openLightbox(0, lbImages);
  });
}

/* ── Lightbox (Pełnoekranowy podgląd zdjęć) ── */
function openLightbox(idx, gallery) {
  if (!lightbox) return;
  lbGallery = gallery || ((typeof GALLERY !== 'undefined') ? GALLERY : []);
  lbIdx = idx;
  buildLbStrip();
  lightbox.classList.add('visible');
  requestAnimationFrame(() => showLbImage(null));
}

function closeLightbox() {
  if (lightbox) lightbox.classList.remove('visible');
}

function lbNext() { if (lbGallery.length) { lbIdx = (lbIdx + 1) % lbGallery.length; showLbImage('next'); } }
function lbPrev() { if (lbGallery.length) { lbIdx = (lbIdx - 1 + lbGallery.length) % lbGallery.length; showLbImage('prev'); } }

function buildLbStrip() {
  const strip = document.getElementById('lb-strip');
  if (!strip) return;
  strip.innerHTML = lbGallery.map(g =>
    `<div class="lb-slide"><img src="${g.src || ''}" alt="" loading="lazy"></div>`
  ).join('');
}

function showLbImage(dir) {
  const strip = document.getElementById('lb-strip');
  if (!strip) return;
  const slide = strip.children[lbIdx];
  if (slide) {
    slide.scrollIntoView({ behavior: dir ? 'smooth' : 'instant', block: 'nearest', inline: 'center' });
  }
  if (lbCounter) lbCounter.textContent = `${lbIdx + 1} / ${lbGallery.length}`;
}

/* Podpięcie zdarzeń Lightboxa po upewnieniu się, że DOM istnieje */
document.addEventListener('DOMContentLoaded', () => {
  const lbClose = document.getElementById('lightbox-close');
  const lbP = document.getElementById('lb-prev');
  const lbN = document.getElementById('lb-next');
  const strip = document.getElementById('lb-strip');

  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbP) lbP.addEventListener('click', lbPrev);
  if (lbN) lbN.addEventListener('click', lbNext);
  if (lightbox) {
    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  }

  if (strip) {
    let scrollTimer;
    strip.addEventListener('scroll', () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        const idx = Math.round(strip.scrollLeft / strip.clientWidth);
        if (idx !== lbIdx && idx >= 0 && idx < lbGallery.length) {
          lbIdx = idx;
          if (lbCounter) lbCounter.textContent = `${lbIdx + 1} / ${lbGallery.length}`;
        }
      }, 80);
    }, { passive: true });
  }
});
