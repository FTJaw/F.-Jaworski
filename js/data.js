'use strict';

/* Bandcamp i SoundCloud — Twoje profile, używane wszędzie w danych poniżej */
const BANDCAMP_URL = 'https://szelest1.bandcamp.com/';
const SOUNDCLOUD_URL = 'https://soundcloud.com/user-713361823';

/* ─── SVG helpers ─── */
function _bg(c1, c2) {
  const s = `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'>
    <defs><radialGradient id='g' cx='40%' cy='45%' r='70%'>
      <stop offset='0%' stop-color='${c2}'/><stop offset='100%' stop-color='${c1}'/>
    </radialGradient></defs>
    <rect width='1200' height='800' fill='url(#g)'/>
    <circle cx='600' cy='400' r='200' fill='none' stroke='rgba(255,255,255,0.025)' stroke-width='90'/>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(s);
}
function _cover(c1, c2, label) {
  const s = `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'>
    <defs><radialGradient id='g' cx='35%' cy='38%' r='75%'>
      <stop offset='0%' stop-color='${c2}'/><stop offset='100%' stop-color='${c1}'/>
    </radialGradient></defs>
    <rect width='600' height='600' fill='url(#g)'/>
    <circle cx='300' cy='280' r='140' fill='none' stroke='rgba(255,255,255,0.07)' stroke-width='1'/>
    <circle cx='300' cy='280' r='85'  fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='0.8'/>
    <circle cx='300' cy='280' r='38'  fill='none' stroke='rgba(255,255,255,0.08)' stroke-width='0.6'/>
    <circle cx='300' cy='280' r='5'   fill='rgba(255,255,255,0.38)'/>
    <text x='300' y='488' text-anchor='middle' font-family='system-ui,sans-serif'
      font-size='10' letter-spacing='4' fill='rgba(255,255,255,0.16)'>${label}</text>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(s);
}
function _photo(c1, c2, w, h) {
  const s = `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'>
    <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0%' stop-color='${c1}'/><stop offset='100%' stop-color='${c2}'/>
    </linearGradient></defs>
    <rect width='${w}' height='${h}' fill='url(#g)'/>
    <rect x='${w*.12}' y='${h*.12}' width='${w*.76}' height='${h*.76}'
      fill='none' stroke='rgba(255,255,255,0.04)' stroke-width='1'/>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(s);
}

/* ═══════════════════════════════════
   8 ALBUMÓW
═══════════════════════════════════ */
const ALBUMS = [
  {
    id:'cisza', title:'Industry of Life Commitment', year:'2020', color:'#9ba8b0',
    cover: 'assets/covers/cisza.jpg',
    bgs: ['assets/backgrounds/cisza-bg-1.jpg','assets/backgrounds/cisza-bg-2.jpg','assets/backgrounds/cisza-bg-3.jpg'],
    tags:['ambient','drone','instrumental'],
    desc:"Pierwsze z kompozycji ambientowych, powstałe na przełomie 2018 i 2019 roku. Mocno nasycone brzmieniem syntezatora Minimoog, field recordingiem nagranym w słabej jakości i eksperymentami z modulacją dźwięku. Jest to płyta, w której można usłyszeć kierunki obierane na innych płytach – stanowi zbiór stylów, które z czasem będą się rozwijać. Zainspirowana ambientem Briana Eno, Harolda Budda czy kompozycjami Steve'a Reicha – stąd nazwa jednego z utworów, „Reich”. Album jest szczerą ekspresją i zabawą z formą, która nie tyle jest transferem emocji, co kreatywnym rozciąganiem.",
    desc_en:"The first ambient compositions, made at the turn of 2018 and 2019. Heavily soaked in the sound of a Minimoog synthesizer, poor-quality field recordings, and experiments with sound modulation. It's a record where you can already hear directions later explored on other albums — a collection of styles that would keep evolving. Inspired by the ambient of Brian Eno and Harold Budd, as well as the compositions of Steve Reich — hence the name of one of the tracks, \"Reich.\" The album is an honest expression and play with form, less a transfer of emotion than a creative stretching of it.",
    quote:'Cisza nie jest brakiem dźwięku — jest jego fundamentem.',
    tracks:[
      {title:'Babushka'},
      {title:'Daily D'},
      {title:'Dysociation'},
      {title:'El camino'},
      {title:'Melting'},
      {title:'Plum Plum Bzz Bzz'},
      {title:'Reich'},
      {title:'She is dead'},
      {title:'We got no more'},
    ],
    buy:{digital:45,currency:'PLN'},
    buyUrl:'https://ko-fi.com/s/TWOJ_LINK',
    streaming:[
      {name:'Bandcamp',   icon:'◈', action:'Kup / Słuchaj', url:BANDCAMP_URL},
      {name:'Spotify',    icon:'◉', action:'Słuchaj',       url:'https://open.spotify.com/album/3Qypn6mvBOe8xxebsoislP?si=4eNewB0lQmGwNtPtxkDFjg'},
      {name:'Apple Music', icon:'◎', action:'Słuchaj',      url:'https://music.apple.com/pl/album/the-industry-of-life-commitment/1565757485?l=pl'},
      {name:'SoundCloud', icon:'◐', action:'Słuchaj', url:SOUNDCLOUD_URL},
    ],
  },
  {
    id:'przeprawa', title:'Bez kontaktu', year:'2021', color:'#b09060',
    cover: 'assets/covers/przeprawa.jpg',
    bgs: ['assets/backgrounds/przeprawa-bg-1.jpg','assets/backgrounds/przeprawa-bg-2.jpg','assets/backgrounds/przeprawa-bg-3.jpg'],
    tags:['folk','akustyczny','narracja'],
    desc:'Album tworzony w nastroju nadchodzącej pandemii i miłości. Każdy z utworów jest próbą zachowania przelotności emocji i wspomnień, próbą uchwycenia w jak najczystszej postaci tego, czego ująć się nie da. Utwory są nadchodzące, lecz jakby ostatecznie się nie wydarzające – jak chwila, którą trudno sobie przypomnieć, nawet nie wiadomo, czy zdarzyła się naprawdę. Na albumie jest dużo kontemplacyjnej radości, która czeka i wsłuchuje się, by usłyszeć jedynie niepewność.',
    desc_en:"An album made in the mood of an approaching pandemic, and of love. Each track is an attempt to hold on to the fleetingness of emotions and memories, trying to capture in the purest form something that can't really be captured. The tracks feel like they're coming, yet somehow never quite arriving — like a moment that's hard to recall, one you're not even sure really happened. There's a lot of contemplative joy on this album, one that waits and listens closely, only to hear uncertainty.",
    quote:'Każda przeprawa zostawia ślad po obu stronach.',
    tracks:[
      {title:'Immensely Wrang'},
      {title:'On the Bridge'},
      {title:'17 minutes'},
      {title:'Sun watches its reflection in the mirror of your eyes'},
      {title:'Autumn winds did it better'},
      {title:'Glimpse at your dream'},
      {title:'It is just another night'},
      {title:'Picnic without any jokes'},
      {title:'She sleeps gently'},
    ],
    buy:{digital:39,currency:'PLN'},
    streaming:[
      {name:'Bandcamp',    icon:'◈', action:'Kup / Słuchaj', url:BANDCAMP_URL},
      {name:'Spotify',     icon:'◉', action:'Słuchaj',       url:'https://open.spotify.com/album/3hn4VXBvSMkDBYyOJphZvV?si=_hAuQczvR9m-99iKiWkelg'},
      {name:'Apple Music', icon:'◎', action:'Słuchaj',       url:'https://music.apple.com/pl/album/bez-kontaktu/1581973607?l=pl'},
      {name:'SoundCloud', icon:'◐', action:'Słuchaj', url:SOUNDCLOUD_URL},
    ],
  },
  {
    id:'tlo', title:'Burn Down My house', year:'2021', color:'#7a8c6e',
    cover: 'assets/covers/tlo.jpg',
    bgs: ['assets/backgrounds/tlo-bg-1.jpg','assets/backgrounds/tlo-bg-2.jpg','assets/backgrounds/tlo-bg-3.jpg'],
    tags:['ambient','field recording','tekstury'],
    desc:'„Burn Down My House” jest pewnego rodzaju manifestem – tytuł nawiązuje do motywu z filmu „Betty”. Świadomie odcina się od wcześniejszego dorobku muzycznego, szukając ucieczki. Utwory przesycone są inspiracją zarówno kompozycjami Ryuichiego Sakamoto, jak i twórczością Alvy Noto. Z perspektywy twórcy jest to album o odchodzeniu i umieraniu. Sam proces powstawania utworów ocierał się o szaleństwo – cały dzień upływał na pustych dźwiękach i zwykłych kompozycjach, aby utwory po wielu godzinach objawiały się nagle same z siebie, w procesie chwilowej, czasem nawet kilkudziesięciominutowej ekspresji.',
    desc_en:'"Burn Down My House" is a kind of manifesto — the title nods to a motif from the film "Betty." It consciously breaks away from earlier musical output, in search of an escape. The tracks are steeped in inspiration from both Ryuichi Sakamoto\'s compositions and Alva Noto\'s work. From the creator\'s perspective, it\'s an album about leaving and about dying. The process of making the tracks bordered on madness — whole days spent on empty sounds and ordinary compositions, until, after many hours, the tracks would suddenly reveal themselves, seemingly on their own, in bursts of momentary, sometimes even dozens-of-minutes-long expression.',
    quote:'Tło jest tym, czego nie słuchasz — ale bez niego wszystko milknie.',
    tracks:[
      {title:'Private Crank'},
      {title:'Fading'},
      {title:'Faded'},
      {title:'In the Garden Without Greed'},
      {title:'A Posthumous Whisper'},
      {title:'Then I'},
    ],
    buy:{digital:35,currency:'PLN'},
    streaming:[
      {name:'Bandcamp',    icon:'◈', action:'Kup / Słuchaj', url:BANDCAMP_URL},
      {name:'Spotify',     icon:'◉', action:'Słuchaj',       url:'https://open.spotify.com/album/3zhHov4twafdVYN4H6Hdyk?si=h7f2tBTrQNG1L9s1zp7JiQ'},
      {name:'Apple Music', icon:'◎', action:'Słuchaj',       url:'https://music.apple.com/pl/album/burn-down-my-house/1564856047?l=pl'},
      {name:'SoundCloud', icon:'◐', action:'Słuchaj', url:SOUNDCLOUD_URL},
    ],
  },
  {
    id:'puls', title:'It feels like rain', year:'2023', color:'#a06060',
    cover: 'assets/covers/puls.jpg',
    bgs: ['assets/backgrounds/puls-bg-1.jpg','assets/backgrounds/puls-bg-2.jpg','assets/backgrounds/puls-bg-3.jpg'],
    tags:['elektronika','rytm','taneczny'],
    desc:'Szczerze muszę powiedzieć, że to najsłabszy z albumów – przepełniony ekstatycznymi emocjami, odchodzi od głębi ambientu jako formy czystej ekspresji w stronę muzyki eksperymentalnej. Jest raczej ciekawym zachłyśnięciem się szczęściem, szukaniem nowości, a nie pełnym dziełem. Tematyką albumu – która nie realizuje się w słowach, a w inspiracji – jest budynek przy ul. Belgradzkiej 12, z którego widok na warszawski Wilanów, niebo i splecione z nim konstelacje wspomnień były substratem utworów. Można usłyszeć silną inspirację takimi artystami jak Biosphere, Konrad Kucz czy Pruski.',
    desc_en:"I have to be honest — this is the weakest of the albums. Full of ecstatic emotion, it drifts away from the depth of ambient as a form of pure expression and toward experimental music. It's more an interesting rush of happiness, a search for novelty, than a fully realized work. The album's theme — which isn't found in words but in inspiration — is a building at ul. Belgradzka 12, from which the view of Warsaw's Wilanów district, the sky, and the constellations of memory tied to it became the raw material for the tracks. You can hear a strong influence from artists like Biosphere, Konrad Kucz, and Pruski.",
    quote:'Puls poprzedza myśl.',
    tracks:[
      {title:'Last day of 11th flor'},
      {title:'Maybe inside out'},
      {title:'Drizzle'},
      {title:'Paranoia'},
      {title:'Scary monsters among freeks'},
      {title:'Cant talk to tell'},
      {title:'The End to another End'},
      {title:'It feels like rain'},
    ],
    buy:{digital:42,currency:'PLN'},
    streaming:[
      {name:'Bandcamp',icon:'◈',action:'Kup / Słuchaj',url:BANDCAMP_URL},
      {name:'Spotify', icon:'◉',action:'Słuchaj',      url:'https://open.spotify.com/album/4Rg51X5w9fH43JT5g3dmuh?si=Qrt5B3CfQwu4JXx7NDUYjQ'},
      {name:'SoundCloud', icon:'◐', action:'Słuchaj', url:SOUNDCLOUD_URL},
    ],
  },
  {
    id:'obraz', title:'Tension with no Solution', year:'2023', color:'#8878a8',
    cover: 'assets/covers/obraz.jpg',
    bgs: ['assets/backgrounds/obraz-bg-1.jpg','assets/backgrounds/obraz-bg-2.jpg','assets/backgrounds/obraz-bg-3.jpg'],
    tags:['ambient','synth','filmowy'],
    desc:'Powstały na 15. piętrze bloku na Bielanach, przepełniony mrokiem, wielością formy i dziwnością. To album, który był przez bardzo długi czas dopracowywany i modyfikowany – w odróżnieniu od poprzednich, ekspresyjny był tu jedynie etap szkicu. Buduje ciągłe napięcie, które – jak sam tytuł wskazuje – nie znajduje ujścia: szuka, zmienia się i rozrasta jak kłącze. Nie jest to album do słuchania w tle, ponieważ wtedy przeszkadza swoją silnie uwydatniającą się podmiotowością – należy słuchać go w odosobnieniu i skupieniu, aby wejść w świat, który sobą oferuje. Między dźwiękami jest wiele dźwięków do odkrycia, które po cichu starają się wyłonić.',
    desc_en:'Made on the 15th floor of a block of flats in Bielany, filled with darkness, a multiplicity of form, and strangeness. This album was worked and reworked over a very long time — unlike previous ones, only the sketching stage here was truly expressive. It builds a constant tension that, as the title suggests, never finds release: it searches, shifts, and spreads like a rhizome. This isn\'t an album for background listening — played that way, its strongly foregrounded subjectivity gets in the way. It should be listened to in solitude and focus, to enter the world it offers. Between the sounds there\'s much to discover, quietly trying to emerge.',
    quote:'Każdy dźwięk rysuje kształt w ciemności.',
    tracks:[
      {title:'One way trip to Malaroca'},
      {title:'Closer to being closed'},
      {title:'Day'},
      {title:'Smog'},
      {title:'Fleo'},
      {title:'A Submissive Smile'},
      {title:'One Day with Ayn Rand'},
    ],
    buy:{digital:39,currency:'PLN'},
    streaming:[
      {name:'Bandcamp',    icon:'◈',action:'Kup / Słuchaj',url:BANDCAMP_URL},
      {name:'Spotify',     icon:'◉',action:'Słuchaj',      url:'https://open.spotify.com/album/6AyCubuS0wxscaxZWN8cO4?si=R3QdHEAhRV-W05rNjmFz0A'},
      {name:'Apple Music', icon:'◎',action:'Słuchaj',      url:'https://music.apple.com/pl/album/tension-with-no-solution/1672553266?l=pl'},
      {name:'SoundCloud', icon:'◐', action:'Słuchaj', url:SOUNDCLOUD_URL},
    ],
  },
  {
    id:'zima', title:'7284th morning on Earth', year:'2023', color:'#8899aa',
    cover: 'assets/covers/zima.jpg',
    bgs: ['assets/backgrounds/zima-bg-1.jpg','assets/backgrounds/zima-bg-2.jpg','assets/backgrounds/zima-bg-3.jpg'],
    tags:['ambient','fortepian','sezonowy'],
    desc:'Album stworzony głównie z użyciem gitary, nie próbuje wypowiadać rzeczy poprzez akcenty, lecz przez pełnię. Jest doświadczeniem przestrzeni dźwiękowej, nie do końca zbiorem utworów jako takich, ponieważ reprezentuje stan skupienia i nieskupienia związany z otaczającą nas rzeczywistością. Jest jak fala, która przypływa i odpływa, ale też jak „Fale” Virginii Woolf, które niczym strumień przepływają przez świadomość odbiorcy za pomocą narzędzia, jakim jest dzieło. Ten album to po prostu bycie – i właściwie tylko tyle należałoby od początku o nim napisać.',
    desc_en:'An album made mainly with guitar, one that doesn\'t try to speak through accents but through fullness. It\'s an experience of sonic space rather than a collection of tracks as such, since it represents a state of focus and unfocus tied to the reality around us. It\'s like a wave that comes in and goes out, but also like Virginia Woolf\'s "The Waves," which flow like a stream through the listener\'s consciousness by means of the work itself. This album is simply about being — and really, that\'s about all that needed to be said about it from the start.',
    quote:'Zima uczy cierpliwości wobec pustki.',
    tracks:[
      {title:'Ornitological proof'},
      {title:'Valeriana before upcoming life'},
      {title:'Marimm'},
      {title:'Ambient'},
      {title:'Space with no time, Unconcern'},
      {title:'Avalanch'},
      {title:'Myriada'},
      {title:'Yellow ractangel'},
    ],
    buy:{digital:35,currency:'PLN'},
    streaming:[
      {name:'Bandcamp',icon:'◈',action:'Kup / Słuchaj',url:BANDCAMP_URL},
      {name:'Spotify',icon:'◉',action:'Słuchaj',url:'https://open.spotify.com/album/2O8tdcWAPwzVSIeFEJGUZb?si=9_EUZHhbRaOTC_ANI1yXJQ'},
      {name:'Apple Music', icon:'◎',action:'Słuchaj', url:'https://music.apple.com/pl/album/7284th-morning-on-earth/1672610776?l=pl'},
      {name:'SoundCloud', icon:'◐', action:'Słuchaj', url:SOUNDCLOUD_URL},
    ],
  },
  {
    id:'brief-encounter', title:'Brief Encounter', year:'2026', color:'#a89060',
    cover: 'assets/covers/brief-encounter.jpg',
    bgs: ['assets/backgrounds/brief-encounter-bg-1.jpg','assets/backgrounds/brief-encounter-bg-2.jpg','assets/backgrounds/brief-encounter-bg-3.jpg'],
    tags:['ambient','klarnet','gitara elektryczna'],
    desc:'„Brief Encounter” dojrzewał przez trzy lata – był na tyle trudnym emocjonalnie doświadczeniem, że powrót do utworów i dopracowywanie ich kompozycji, barwy i miksu był regularnie porzucany. Na albumie tym słyszymy głównie żywe instrumenty, z naciskiem na klarnet i gitarę elektryczną. Założeniem w tworzeniu było użycie jak najmniejszej ilości środków dla osiągnięcia jak najbardziej trafnej emocjonalnie formy – zredukowanie dźwięku do minimum, tak aby treść na tym nie straciła na sile. To zdecydowanie nie jest muzyka do tła – trzeba oddać się w jej objęcia, żeby być w stanie ją usłyszeć; obnaża czasem zbyt wiele.',
    desc_en:'"Brief Encounter" took three years to mature — an experience emotionally difficult enough that returning to the tracks and refining their composition, tone, and mix was regularly abandoned. On this album we mostly hear live instruments, with an emphasis on clarinet and electric guitar. The idea behind its making was to use as few means as possible to reach the most emotionally precise form — reducing the sound to a minimum, so the content wouldn\'t lose any of its force. This is definitely not background music — you have to give yourself over to it to really hear it; at times it lays bare more than you\'d expect.',
    quote:'Czasem trzeba się zgubić, żeby coś odnaleźć.',
    tracks:[
      {title:'All Young Birds'},
      {title:'Violence and Lust'},
      {title:'In Time Detention'},
      {title:'Ambiguity of Intentions'},
      {title:'You Never Gonna Know What You Know'},
      {title:'Endless Time'},
      {title:'Minuscule Answer'},
      {title:'Being and Becoming'},
      {title:'Bathtub and Reluctance of Sleep'},
      {title:'Betty'},
      {title:'Misslove'},
      {title:'To the End'},
      {title:'Brief Encounter'},
    ],
    streaming:[{name:'SoundCloud', icon:'◐', action:'Słuchaj', url:SOUNDCLOUD_URL}],
  },
  {
    id:'suspended-folder', title:'Suspended Folder with Few Notes', year:'2026', color:'#708090',
    cover: 'assets/covers/suspended-folder.jpg',
    bgs: ['assets/backgrounds/suspended-folder-bg-1.jpg','assets/backgrounds/suspended-folder-bg-2.jpg','assets/backgrounds/suspended-folder-bg-3.jpg'],
    tags:['ambient','pianino','minimalizm'],
    desc:'Album całkowicie skupiony na pianinie, w minimalistycznym wydaniu. Kompozycje starają się być jak najbardziej czułe i delikatne, a barwa pianina sprowadzona do nieagresywnej i lekkiej. Utwory inspirowane między innymi Erikiem Satie, Ryuichim Sakamoto czy Robertem Turmanem.',
    desc_en:'An album focused entirely on the piano, in a minimalist form. The compositions try to be as tender and delicate as possible, with the piano\'s tone kept gentle and unaggressive. The tracks are inspired, among others, by Erik Satie, Ryuichi Sakamoto, and Robert Turman.',
    quote:'Każdy musi zacząć od czegoś niedokończonego.',
    tracks:[
      {title:'Scandal'},
      {title:'Two Days of Life'},
      {title:'Diva'},
      {title:'Antiseptic Memories'},
      {title:'First Night on Earth'},
    ],
    streaming:[{name:'SoundCloud', icon:'◐', action:'Słuchaj', url:SOUNDCLOUD_URL}],
  },
];

/* ─── PROJEKTY ARTYSTYCZNE ─── */
const PROJECTS = [
  {
    id:'szelest',
    name:'Szelest',
    year:'2018–2026',
    tag:'sound art',
    desc:'Projekt dźwiękowy eksplorujący dźwięki marginalne — to, co słychać na granicy percepcji. Instalacje i nagrania oparte na dźwiękach codziennych przedmiotów, tkanin, papieru.',
    desc_en:'A sound project exploring marginal sounds — what can be heard at the edge of perception. Installations and recordings built from the sounds of everyday objects, fabric, and paper.',
    tracks:[],
  },
  {
    id:'arbitraz-sztuki',
    name:'Arbitraż Sztuki',
    year:'2025–obecnie',
    tag:'warsztaty artystyczne',
    tag_en:'art workshops',
    desc:'Cykl warsztatów artystycznych poświęconych wielu technikom artystycznym, zarówno od strony warsztatowej, jak i teoretycznej. Współtworzony z dwiema wspaniałymi artystkami – Dominiką Rozkrut i Heleną Pryżanowską.',
    desc_en:'A series of art workshops covering many artistic techniques, both hands-on and theoretical. Co-created with two wonderful artists — Dominika Rozkrut and Helena Pryżanowska.',
    link:'https://arbitrazsztuki.pl',
    tracks:[],
  },
  {
    id:'lekkosc',
    name:'Lekkość',
    year:'2026',
    tag:'chusty',
    tag_en:'scarves',
    desc:'Projekt chust artystycznych z wykorzystaniem szerokiego spektrum technik, głównie skupiających się dookoła naturalnych pigmentów i barwników oraz metody marmurkowej.',
    desc_en:'A project of artistic scarves using a wide range of techniques, focused mainly around natural pigments, natural dyes, and the marbling method.',
    link:'https://lekkost.pl',
    tracks:[],
  },
  {
    id:'among-other-sounds',
    name:'Among Other Sounds',
    year:'2025–obecnie',
    tag:'minimal/loop recording',
    desc:'Projekt muzyczny wykorzystujący klarnet, pianino, syntezatory i wiele innych instrumentów. Założeniem projektu jest odzyskiwanie atmosfery i ekspresji poprzez wykorzystanie jak najbardziej okrojonych form kompozycyjnych. Innymi słowy — ukazanie jak najszerszego spektrum emocji, barwy i lekkości przy użyciu jak najmniejszej ilości środków muzycznych.',
    desc_en:'A music project using clarinet, piano, synthesizers, and much more. The idea behind the project is recovering atmosphere and expression through the most stripped-down compositional forms possible. In other words — showing as wide a spectrum of emotion, tone, and lightness as possible, using as few musical means as possible.',
    link:'https://open.spotify.com/artist/2uzQUOVT2RrWqZj4QacRWi',
    tracks:[],
  },
  {
    id:'nota-contra-notam',
    name:'Nota Contra Notam',
    year:'2020–2026',
    tag:'muzyka elektroniczna',
    tag_en:'electronic music',
    desc:'Projekt muzyczny inspirowany drum and bassem, trip-hopem i breakbeatem. Liczne instrumenty rytmiczne, dużo syntezatorów, eksperymentu i dziwności.',
    desc_en:'A music project inspired by drum and bass, trip-hop, and breakbeat. Numerous rhythmic instruments, plenty of synthesizers, experimentation, and strangeness.',
    link:'https://open.spotify.com/artist/2sIimcYWy5s2iOoNcba7WR',
    tracks:[],
  },
  {
    id:'kamaw-tut',
    name:'Kamaw Tut',
    year:'2019–2021',
    tag:'kolaboracja',
    tag_en:'collaboration',
    desc:'Współpraca artystyczna dookoła form alternatywnego rocka, funku i krautrocka, z takimi twórcami jak Bernar Mileau, Jędrek Woźniak czy Michał Kilijanek. Koncerty na licznych festiwalach oraz w warszawskiej Narocz N13, na squacie Przychodnia i w innych miejscach.',
    desc_en:'An artistic collaboration around forms of alternative rock, funk, and krautrock, with artists such as Bernar Mileau, Jędrek Woźniak, and Michał Kilijanek. Shows at various festivals and venues, including Warsaw\'s Narocz N13 and the Przychodnia squat.',
    link:'https://soundcloud.com/user-440991434',
    tracks:[],
  },
  {
    id:'drumless-blonde-heads',
    name:'Drumless Blonde Heads',
    year:'2018–2019',
    tag:'band',
    desc:'Pierwszy projekt muzyczny, będący połączeniem licznych ścieżek gitarowych, wielu pogłosów, przesterów i ciszy w głośności. Inspirowany krautrockiem i kompozycjami Jozefa Van Wissema.',
    desc_en:'The first music project, a blend of many layered guitar tracks, heavy reverb, distortion, and silence within loudness. Inspired by krautrock and the compositions of Jozef Van Wissem.',
     },
];

/* ═══════════════════════════════════
   GALERIA FOTOGRAFII (Zaktualizowana do 9 serii)
═══════════════════════════════════ */
const GALLERY = [
  {
    cover: 'assets/gallery/photo/seria-1/01.jpg',
    title: 'Seria 1',
    images: [
      'assets/gallery/photo/seria-1/01.jpg', 'assets/gallery/photo/seria-1/02.jpg',
      'assets/gallery/photo/seria-1/03.jpg', 'assets/gallery/photo/seria-1/04.jpg',
      'assets/gallery/photo/seria-1/05.jpg', 'assets/gallery/photo/seria-1/06.jpg',
      'assets/gallery/photo/seria-1/07.jpg', 'assets/gallery/photo/seria-1/08.jpg',
      'assets/gallery/photo/seria-1/09.jpg', 'assets/gallery/photo/seria-1/10.jpg',
      'assets/gallery/photo/seria-1/11.jpg', 'assets/gallery/photo/seria-1/12.jpg',
      'assets/gallery/photo/seria-1/13.jpg', 'assets/gallery/photo/seria-1/14.jpg',
      'assets/gallery/photo/seria-1/15.jpg', 'assets/gallery/photo/seria-1/16.jpg',
      'assets/gallery/photo/seria-1/17.jpg', 'assets/gallery/photo/seria-1/18.jpg',
      'assets/gallery/photo/seria-1/19.jpg', 'assets/gallery/photo/seria-1/20.jpg',
      'assets/gallery/photo/seria-1/21.jpg', 'assets/gallery/photo/seria-1/22.jpg',
      'assets/gallery/photo/seria-1/23.jpg', 'assets/gallery/photo/seria-1/24.jpg',
      'assets/gallery/photo/seria-1/25.jpg', 'assets/gallery/photo/seria-1/26.jpg',
      'assets/gallery/photo/seria-1/27.jpg', 'assets/gallery/photo/seria-1/28.jpg',
      'assets/gallery/photo/seria-1/29.jpg'
    ],
  },
  {
    cover: 'assets/gallery/photo/seria-2/01.jpg',
    title: 'Seria 2',
    images: [
      'assets/gallery/photo/seria-2/01.jpg', 'assets/gallery/photo/seria-2/02.jpg',
      'assets/gallery/photo/seria-2/03.jpg', 'assets/gallery/photo/seria-2/04.jpg',
      'assets/gallery/photo/seria-2/05.jpg', 'assets/gallery/photo/seria-2/06.jpg',
      'assets/gallery/photo/seria-2/07.jpg', 'assets/gallery/photo/seria-2/08.jpg',
      'assets/gallery/photo/seria-2/09.jpg', 'assets/gallery/photo/seria-2/10.jpg',
      'assets/gallery/photo/seria-2/11.jpg', 'assets/gallery/photo/seria-2/12.jpg',
      'assets/gallery/photo/seria-2/13.jpg', 'assets/gallery/photo/seria-2/14.jpg',
      'assets/gallery/photo/seria-2/15.jpg', 'assets/gallery/photo/seria-2/16.jpg',
      'assets/gallery/photo/seria-2/17.jpg', 'assets/gallery/photo/seria-2/18.jpg',
      'assets/gallery/photo/seria-2/19.jpg', 'assets/gallery/photo/seria-2/20.jpg',
      'assets/gallery/photo/seria-2/21.jpg', 'assets/gallery/photo/seria-2/22.jpg',
      'assets/gallery/photo/seria-2/23.jpg', 'assets/gallery/photo/seria-2/24.jpg'
    ],
  },
  {
    cover: 'assets/gallery/photo/seria-3/01.jpg',
    title: 'Seria 3',
    images: [
      'assets/gallery/photo/seria-3/01.jpg', 'assets/gallery/photo/seria-3/02.jpg',
      'assets/gallery/photo/seria-3/03.jpg', 'assets/gallery/photo/seria-3/04.jpg',
      'assets/gallery/photo/seria-3/05.jpg', 'assets/gallery/photo/seria-3/06.jpg',
      'assets/gallery/photo/seria-3/07.jpg', 'assets/gallery/photo/seria-3/08.jpg'
    ],
  },
  {
    cover: 'assets/gallery/photo/seria-4/01.jpg',
    title: 'Seria 4',
    images: [
      'assets/gallery/photo/seria-4/01.jpg', 'assets/gallery/photo/seria-4/02.jpg',
      'assets/gallery/photo/seria-4/03.jpg', 'assets/gallery/photo/seria-4/04.jpg',
      'assets/gallery/photo/seria-4/05.jpg', 'assets/gallery/photo/seria-4/06.jpg',
      'assets/gallery/photo/seria-4/07.jpg', 'assets/gallery/photo/seria-4/08.jpg'
    ],
  },
  {
    cover: 'assets/gallery/photo/seria-5/01.jpg',
    title: 'Seria 5',
    images: [
      'assets/gallery/photo/seria-5/01.jpg', 'assets/gallery/photo/seria-5/02.jpg',
      'assets/gallery/photo/seria-5/03.jpg', 'assets/gallery/photo/seria-5/04.jpg',
      'assets/gallery/photo/seria-5/05.jpg', 'assets/gallery/photo/seria-5/06.jpg',
      'assets/gallery/photo/seria-5/07.jpg', 'assets/gallery/photo/seria-5/08.jpg',
      'assets/gallery/photo/seria-5/09.jpg', 'assets/gallery/photo/seria-5/10.jpg',
      'assets/gallery/photo/seria-5/11.jpg', 'assets/gallery/photo/seria-5/12.jpg',
      'assets/gallery/photo/seria-5/13.jpg'
    ],
  },
  {
    cover: 'assets/gallery/photo/seria-6/01.jpg',
    title: 'Seria 6',
    images: [
      'assets/gallery/photo/seria-6/01.jpg', 'assets/gallery/photo/seria-6/02.jpg',
      'assets/gallery/photo/seria-6/03.jpg', 'assets/gallery/photo/seria-6/04.jpg',
      'assets/gallery/photo/seria-6/05.jpg', 'assets/gallery/photo/seria-6/06.jpg',
      'assets/gallery/photo/seria-6/07.jpg', 'assets/gallery/photo/seria-6/08.jpg',
      'assets/gallery/photo/seria-6/09.jpg', 'assets/gallery/photo/seria-6/10.jpg'
    ],
  },
  {
    cover: 'assets/gallery/photo/seria-7/01.jpg',
    title: 'Seria 7',
    images: [
      'assets/gallery/photo/seria-7/01.jpg', 'assets/gallery/photo/seria-7/02.jpg',
      'assets/gallery/photo/seria-7/03.jpg', 'assets/gallery/photo/seria-7/04.jpg',
      'assets/gallery/photo/seria-7/05.jpg', 'assets/gallery/photo/seria-7/06.jpg',
      'assets/gallery/photo/seria-7/07.jpg', 'assets/gallery/photo/seria-7/08.jpg',
      'assets/gallery/photo/seria-7/09.jpg', 'assets/gallery/photo/seria-7/10.jpg',
      'assets/gallery/photo/seria-7/11.jpg', 'assets/gallery/photo/seria-7/12.jpg'
    ],
  },
  {
    cover: 'assets/gallery/photo/seria-8/01.jpg',
    title: 'Seria 8',
    images: [
      'assets/gallery/photo/seria-8/01.jpg', 'assets/gallery/photo/seria-8/02.jpg',
      'assets/gallery/photo/seria-8/03.jpg', 'assets/gallery/photo/seria-8/04.jpg',
      'assets/gallery/photo/seria-8/05.jpg', 'assets/gallery/photo/seria-8/06.jpg',
      'assets/gallery/photo/seria-8/07.jpg', 'assets/gallery/photo/seria-8/08.jpg',
      'assets/gallery/photo/seria-8/09.jpg'
    ],
  },
  {
    cover: 'assets/gallery/photo/seria-9/01.jpg',
    title: 'Seria 9',
    images: [
      'assets/gallery/photo/seria-9/01.jpg', 'assets/gallery/photo/seria-9/02.jpg',
      'assets/gallery/photo/seria-9/03.jpg', 'assets/gallery/photo/seria-9/04.jpg',
      'assets/gallery/photo/seria-9/05.jpg', 'assets/gallery/photo/seria-9/06.jpg',
      'assets/gallery/photo/seria-9/07.jpg', 'assets/gallery/photo/seria-9/08.jpg',
      'assets/gallery/photo/seria-9/09.jpg', 'assets/gallery/photo/seria-9/10.jpg',
      'assets/gallery/photo/seria-9/11.jpg'
    ],
  },
];

/* ─── GALERIA EBRU ─── */
const GALLERY_EBRU = [
  {
    cover: 'assets/gallery/ebru/seria-1/01.jpg',
    title: 'Seria 1',
    images: [
      'assets/gallery/ebru/seria-1/01.jpg', 'assets/gallery/ebru/seria-1/02.jpg',
      'assets/gallery/ebru/seria-1/03.jpg', 'assets/gallery/ebru/seria-1/04.jpg',
      'assets/gallery/ebru/seria-1/05.jpg', 'assets/gallery/ebru/seria-1/06.jpg',
      'assets/gallery/ebru/seria-1/07.jpg', 'assets/gallery/ebru/seria-1/08.jpg',
      'assets/gallery/ebru/seria-1/09.jpg', 'assets/gallery/ebru/seria-1/10.jpg',
      'assets/gallery/ebru/seria-1/11.jpg', 'assets/gallery/ebru/seria-1/12.jpg',
      'assets/gallery/ebru/seria-1/13.jpg', 'assets/gallery/ebru/seria-1/14.jpg',
      'assets/gallery/ebru/seria-1/15.jpg',
    ],
  },
  {
    cover: 'assets/gallery/ebru/seria-2/01.jpg',
    title: 'Seria 2',
    images: [
      'assets/gallery/ebru/seria-2/01.jpg', 'assets/gallery/ebru/seria-2/02.jpg',
      'assets/gallery/ebru/seria-2/03.jpg', 'assets/gallery/ebru/seria-2/04.jpg',
      'assets/gallery/ebru/seria-2/05.jpg', 'assets/gallery/ebru/seria-2/06.jpg',
      'assets/gallery/ebru/seria-2/07.jpg', 'assets/gallery/ebru/seria-2/08.jpg',
      'assets/gallery/ebru/seria-2/09.jpg', 'assets/gallery/ebru/seria-2/10.jpg',
      'assets/gallery/ebru/seria-2/11.jpg', 'assets/gallery/ebru/seria-2/12.jpg',
      'assets/gallery/ebru/seria-2/13.jpg', 'assets/gallery/ebru/seria-2/14.jpg',
      'assets/gallery/ebru/seria-2/15.jpg',
    ],
  },
  {
    cover: 'assets/gallery/ebru/seria-3/01.jpg',
    title: 'Seria 3',
    images: [
      'assets/gallery/ebru/seria-3/01.jpg', 'assets/gallery/ebru/seria-3/02.jpg',
      'assets/gallery/ebru/seria-3/03.jpg', 'assets/gallery/ebru/seria-3/04.jpg',
      'assets/gallery/ebru/seria-3/05.jpg', 'assets/gallery/ebru/seria-3/06.jpg',
      'assets/gallery/ebru/seria-3/07.jpg', 'assets/gallery/ebru/seria-3/08.jpg',
      'assets/gallery/ebru/seria-3/09.jpg', 'assets/gallery/ebru/seria-3/10.jpg',
      'assets/gallery/ebru/seria-3/11.jpg', 'assets/gallery/ebru/seria-3/12.jpg',
      'assets/gallery/ebru/seria-3/13.jpg', 'assets/gallery/ebru/seria-3/14.jpg',
      'assets/gallery/ebru/seria-3/15.jpg',
    ],
  },
];

/* ─── KONTAKT ─── */
const CONTACT = {
  links:[
    {label:'Email',    val:'filiptjaworski@gmail.com', href:'mailto:filiptjaworski@gmail.com'},
    {label:'Instagram',val:'@jak_hcesz',                href:'https://www.instagram.com/jak_hcesz/'},
  ],
};
