'use strict';

/* ══════════════════════════════════════
   i18n.js — prosty przełącznik PL / EN
══════════════════════════════════════ */

let LANG = localStorage.getItem('site-lang') || 'pl';

const UI = {
  pl: {
    albumy: 'Albumy',
    wszystkie_albumy: 'wszystkie albumy',
    tracklista: 'Tracklista',
    sluchaj_i_kup: 'Słuchaj i kup',
    sluchaj: 'Słuchaj',
    kup_sluchaj: 'Kup / Słuchaj',
    niedostepny: 'niedostępny',
    zobacz_album: 'Zobacz album →',
    zamknij: 'zamknij',
    projekty: 'Projekty',
    serie: 'Serie',
    marmurkowanie: 'Sztuki wizualne',
    kontakt: 'Kontakt',
    strona_projektu: 'Strona projektu →',
    utwory: 'Utwory',
    fotografia_serie: 'fotografia · serie',
    ebru_marmurkowanie: 'ebru · malarstwo · chusty',
    seria: 'Seria',
    obecnie: 'obecnie',
  },
  en: {
    albumy: 'Albums',
    wszystkie_albumy: 'all albums',
    tracklista: 'Tracklist',
    sluchaj_i_kup: 'Listen & buy',
    sluchaj: 'Listen',
    kup_sluchaj: 'Buy / Listen',
    niedostepny: 'unavailable',
    zobacz_album: 'View album →',
    zamknij: 'close',
    projekty: 'Projects',
    serie: 'Series',
    marmurkowanie: 'Visual Arts',
    kontakt: 'Contact',
    strona_projektu: 'Project page →',
    utwory: 'Tracks',
    fotografia_serie: 'photography · series',
    ebru_marmurkowanie: 'ebru · painting · scarves',
    seria: 'Series',
    obecnie: 'present',
  },
};

/* t('klucz') -> tekst UI w aktualnym języku */
function t(key) {
  return (UI[LANG] && UI[LANG][key]) || (UI.pl[key] || key);
}

/* td(obj, 'desc') -> obj.desc_en gdy LANG==='en' i istnieje, inaczej obj.desc */
function td(obj, field) {
  if (!obj) return '';
  if (LANG === 'en' && obj[field + '_en']) return obj[field + '_en'];
  return obj[field] || '';
}

/* zamienia 'obecnie' na 'present' w zakresach dat typu '2025–obecnie' */
function tYear(y) {
  if (!y) return '';
  return LANG === 'en' ? y.replace('obecnie', t('obecnie')) : y;
}

function setLang(lang) {
  LANG = lang;
  localStorage.setItem('site-lang', lang);
  document.documentElement.lang = lang;
  if (typeof onLangChange === 'function') onLangChange();
}

/* Dodaje mały przycisk przełącznika w lewym górnym rogu */
function initLangSwitch() {
  const btn = document.createElement('button');
  btn.id = 'lang-switch';
  btn.type = 'button';
  const render = () => { btn.textContent = LANG === 'pl' ? 'EN' : 'PL'; };
  render();
  btn.addEventListener('click', () => {
    setLang(LANG === 'pl' ? 'en' : 'pl');
    render();
  });
  document.body.appendChild(btn);
}

document.documentElement.lang = LANG;
