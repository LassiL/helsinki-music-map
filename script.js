const events = [
  {
    id: "mare-alta-trio",
    title: "Maré Alta Trio",
    category: "Soul",
    genre: "Jazz / terrace concert",
    date: "Friday 29 May 2026",
    start: "17:00",
    end: "18:00",
    venue: "Musiikkitalo Terrace",
    area: "Töölönlahti",
    address: "Mannerheimintie 13a, 00100 Helsinki",
    lat: 60.1733,
    lng: 24.9348,
    price: "Free entry",
    priceValue: 0,
    age: "All ages unless noted by venue",
    status: "Free entry",
    artists: ["Maré Alta Trio"],
    note:
      "Helsinki events calendar and Jazz Finland list Maré Alta Trio as the Friday 29.5. Musiikkitalo terrace concert from 17:00 to 18:00.",
    sourceName: "Helsinki Events / Jazz Finland",
    sourceUrl: "https://tapahtumat.hel.fi/en/events/helsinki%3Aagpbwzd6jy",
    extraSourceUrl: "https://jazzfinland.fi/"
  },
  {
    id: "vapauden-kaikuja",
    title: "Kansanmusiikkia Taideyliopistosta: Vapauden kaikuja",
    category: "Classical",
    genre: "Folk / kantele / Sibelius Academy concert",
    date: "Friday 29 May 2026",
    start: "17:30",
    end: "not listed",
    venue: "Sibelius Academy - Kamarimusiikkisali",
    area: "Kamppi",
    address: "Pohjoinen Rautatiekatu 9, 00100 Helsinki",
    lat: 60.1717,
    lng: 24.9324,
    price: "Free entry",
    priceValue: 0,
    age: "All ages unless noted by venue",
    status: "Free entry",
    artists: ["Riina Hellsten"],
    note:
      "Uniarts lists this Sibelius Academy folk music concert on Friday 29.5. at 17:30 with free entry and Riina Hellsten on kantele.",
    sourceName: "Uniarts",
    sourceUrl: "https://www.uniarts.fi/tapahtumat/kansanmusiikkia-taideyliopistosta-vapauden-kaikuja/"
  },
  {
    id: "eino-gron",
    title: "Eino Grön",
    category: "Pop",
    genre: "Iskelmä / tango / Finnish pop",
    date: "Friday 29 May 2026",
    start: "19:00 doors",
    end: "not listed",
    venue: "Tavastia-klubi",
    area: "Kamppi",
    address: "Urho Kekkosen katu 4-6, 00100 Helsinki",
    lat: 60.1685,
    lng: 24.933,
    price: "33 EUR advance / 35 EUR door",
    priceValue: 33,
    age: "K-18",
    status: "On sale",
    artists: ["Eino Grön"],
    note:
      "Tavastia's official listing gives the Friday date, K-18 status, 19:00 doors, 20:00 show, and 33/35 EUR pricing.",
    sourceName: "Tavastia",
    sourceUrl: "https://tavastiaklubi.fi/events/2026-05-29/eino-gron/117583/"
  },
  {
    id: "five-corners-quintet",
    title: "The Five Corners Quintet",
    category: "Soul",
    genre: "Jazz / soul jazz / funk",
    date: "Friday 29 May 2026",
    start: "19:00",
    end: "20:00",
    venue: "Ääniwalli",
    area: "Vallila",
    address: "Pälkäneentie 13, 00510 Helsinki",
    lat: 60.1951,
    lng: 24.9503,
    price: "29 EUR",
    priceValue: 29,
    age: "K-18",
    status: "On sale",
    artists: [
      "Jukka Eskola",
      "Timo Lassy",
      "Mikael Jakobsson",
      "Antti Lötjönen",
      "Teppo Mäkynen"
    ],
    note:
      "Ääniwalli lists The Five Corners Quintet for Friday 29.5.; Jazz Finland and Meteli confirm the 19:00 time and 29 EUR ticket.",
    sourceName: "Ääniwalli / Jazz Finland",
    sourceUrl: "https://aaniwalli.fi/",
    extraSourceUrl: "https://jazzfinland.fi/"
  },
  {
    id: "teini-paa-rosettes",
    title: "KULT Live: Teini-Pää + Rosettes",
    category: "Rock",
    genre: "Indie pop / psych soul / rock",
    date: "Friday 29 May 2026",
    start: "19:00 doors / 20:00 show",
    end: "not listed",
    venue: "Kulttuuritalo / KULT",
    area: "Alppila",
    address: "Sturenkatu 4, 00510 Helsinki",
    lat: 60.1884,
    lng: 24.944,
    price: "23 EUR + fees / 25 EUR door",
    priceValue: 23,
    age: "K-18",
    status: "On sale",
    artists: ["Teini-Pää", "Rosettes"],
    note:
      "Kulttuuritalo lists doors at 19:00, Rosettes at 20:00, Teini-Pää at 21:30, and both advance and door prices.",
    sourceName: "Kulttuuritalo",
    sourceUrl: "https://kulttuuritalo.fi/tapahtuma/teini-paa-rosettes-kult-helsingin-kulttuuritalo/"
  },
  {
    id: "emilia-sisco",
    title: "Emilia Sisco & The Northern Lights",
    category: "Soul",
    genre: "Soul / jazz / blues",
    date: "Friday 29 May 2026",
    start: "19:00 doors / 20:00 show",
    end: "not listed",
    venue: "G Livelab Helsinki",
    area: "Kamppi",
    address: "Yrjönkatu 3, 00120 Helsinki",
    lat: 60.1641,
    lng: 24.9446,
    price: "Standard 32 EUR + 4 EUR cloakroom",
    priceValue: 32,
    age: "All ages",
    status: "Sold out",
    artists: ["Emilia Sisco", "The Northern Lights"],
    note:
      "Official G Livelab listing now marks the concert sold out and gives doors, showtime, standard ticket price, cloakroom note, and all-ages status.",
    sourceName: "G Livelab",
    sourceUrl: "https://glivelab.fi/events/emilia-sisco-the-northern-lights-68d6478cb7381a9fc08cc14d/"
  },
  {
    id: "kavabanga-depo-kolibri",
    title: "KAVABANGA Depo Kolibri - Live in Helsinki",
    category: "Pop",
    genre: "Hip-hop / pop",
    date: "Friday 29 May 2026",
    start: "19:00 doors / 20:00 show",
    end: "not listed",
    venue: "Tiivistämö",
    area: "Suvilahti",
    address: "Kaasutehtaankatu 1, 00580 Helsinki",
    lat: 60.1878,
    lng: 24.9706,
    price: "45-85 EUR",
    priceValue: 45,
    age: "18+",
    status: "On sale",
    artists: ["KAVABANGA Depo Kolibri"],
    note:
      "Kontramarka and AfishaMira list the Friday Helsinki show at Tiivistämö with a 20:00 start, tickets from 45 EUR, and 18+ entry.",
    sourceName: "Kontramarka / AfishaMira",
    sourceUrl: "https://www.kontramarka.com/tickets-kavabanga-depo-kolibri-helsinki/",
    extraSourceUrl: "https://afishamira.com/event/gruppa-kavabanga-depo-kolibri-v-helsinki-2026/"
  },
  {
    id: "post-pulse",
    title: "Post Pulse, Sisin, Sounds of Delusion",
    category: "Metal",
    genre: "Melodic death metal / hybrid rock-metal / groove doom",
    date: "Friday 29 May 2026",
    start: "19:00 doors",
    end: "not listed",
    venue: "Kuudes Linja",
    area: "Kallio",
    address: "Hämeentie 13 B, 00530 Helsinki",
    lat: 60.184,
    lng: 24.9601,
    price: "14.50 EUR advance / 15 EUR door + 3.90 EUR security fee",
    priceValue: 14.5,
    age: "K-18",
    status: "On sale",
    artists: ["Post Pulse", "Sisin", "Sounds of Delusion"],
    note:
      "Kuudes Linja lists the early concert with 19:00 doors, 19:30/20:30/21:30 running order, and advance/door prices.",
    sourceName: "Kuudes Linja",
    sourceUrl: "https://www.kuudeslinja.com/"
  },
  {
    id: "antimere",
    title: "Antimere, Ode of Disgrace, Bloodstained Halo",
    category: "Metal",
    genre: "Nordic metal",
    date: "Friday 29 May 2026",
    start: "20:00 doors",
    end: "not listed",
    venue: "Semifinal",
    area: "Kamppi",
    address: "Urho Kekkosen katu 4-6, 00100 Helsinki",
    lat: 60.1685,
    lng: 24.933,
    price: "14 EUR",
    priceValue: 14,
    age: "K-18",
    status: "On sale",
    artists: ["Antimere (SWE)", "Ode of Disgrace", "Bloodstained Halo"],
    note:
      "Dark Soul Agency lists the Nordic Metal Alliance Helsinki timetable with Bloodstained Halo at 20:30, Ode of Disgrace at 21:30, and Antimere at 22:30; Keikat confirms Semifinal and 14 EUR.",
    sourceName: "Dark Soul Agency / Keikat",
    sourceUrl: "https://www.darksoulagency.com/dsatapahtumat",
    extraSourceUrl: "https://keikat.org/helsinki"
  },
  {
    id: "denominate",
    title: "Denominate, Progeny of Sun, KOUTA",
    category: "Metal",
    genre: "Death metal / melodic metal",
    date: "Friday 29 May 2026",
    start: "20:00",
    end: "not listed",
    venue: "Lepakkomies",
    area: "Kallio",
    address: "Helsinginkatu 1, 00500 Helsinki",
    lat: 60.1876,
    lng: 24.9595,
    price: "8 EUR",
    priceValue: 8,
    age: "Check venue",
    status: "On sale",
    artists: ["Denominate", "Progeny of Sun", "KOUTA"],
    note:
      "Keikat lists the Finno-Baltic Havor tour stop at Lepakkomies on Friday 29.5. at 20:00 with an 8 EUR ticket.",
    sourceName: "Keikat",
    sourceUrl: "https://keikat.org/helsinki"
  },
  {
    id: "og-ulla-maija",
    title: "OG Ulla-Maija, Wibe",
    category: "Pop",
    genre: "Rap / hip-hop",
    date: "Friday 29 May 2026",
    start: "20:00",
    end: "23:30",
    venue: "On The Rocks",
    area: "Kluuvi",
    address: "Mikonkatu 15, 00100 Helsinki",
    lat: 60.1713,
    lng: 24.9455,
    price: "18 EUR advance / 21 EUR door",
    priceValue: 18,
    age: "K-18",
    status: "On sale",
    artists: ["OG Ulla-Maija", "Wibe"],
    note:
      "On The Rocks lists the Friday show with K-18 venue terms, 20:00 doors, and 18/21 EUR advance/door pricing.",
    sourceName: "On The Rocks",
    sourceUrl: "https://www.rocks.fi/tapahtumat/"
  },
  {
    id: "rem-for-the-people",
    title: "R.E.M. For The People",
    category: "Rock",
    genre: "R.E.M. tribute / rock",
    date: "Friday 29 May 2026",
    start: "20:30 doors / 21:00 show",
    end: "not listed",
    venue: "Korjaamo Kulmasali",
    area: "Töölö",
    address: "Töölönkatu 51 A-B, 00250 Helsinki",
    lat: 60.1842,
    lng: 24.9198,
    price: "20 EUR advance / 25 EUR door",
    priceValue: 20,
    age: "K-18",
    status: "On sale",
    artists: ["R.E.M. For The People"],
    note:
      "Korjaamo lists the R.E.M. tribute band in Kulmasali on Friday 29.5.; Lippu.fi lists a 21:00 event time.",
    sourceName: "Korjaamo",
    sourceUrl: "https://korjaamo.fi/tapahtumat/"
  },
  {
    id: "ace-frehley-tribute",
    title: "Ace Frehley - Tribute Night",
    category: "Rock",
    genre: "KISS / Ace Frehley tribute / hard rock",
    date: "Friday 29 May 2026",
    start: "21:00",
    end: "23:30",
    venue: "Bar Loose",
    area: "Kamppi",
    address: "Annankatu 21, 00100 Helsinki",
    lat: 60.1668,
    lng: 24.9374,
    price: "15 EUR advance / 17 EUR door + 3.50 EUR cloakroom",
    priceValue: 15,
    age: "K-18",
    status: "On sale",
    artists: ["KISS Army Finland all-star tribute band"],
    note:
      "Bar Loose lists the Friday 21:00-23:30 tribute night, 15 EUR advance tickets, 17 EUR door price, and 3.50 EUR cloakroom fee.",
    sourceName: "Bar Loose live list",
    sourceUrl: "https://barloose.com/en/live/ace-frehley-tribuutti-ilta/"
  },
  {
    id: "emodisko-american-pie",
    title: "Emodisko goes American Pie: House Party Special",
    category: "Electronic",
    genre: "Emo / pop-punk / DJ night",
    date: "Friday 29 May 2026",
    start: "21:00",
    end: "02:30",
    venue: "Korjaamohalli",
    area: "Töölö",
    address: "Töölönkatu 51 A-B, 00250 Helsinki",
    lat: 60.1842,
    lng: 24.9198,
    price: "Free before 22:00 / pay what you can 5-15 EUR after",
    priceValue: 0,
    age: "K-18",
    status: "Door tickets only",
    artists: ["Emodisko DJs"],
    note:
      "Korjaamo lists the Friday Korjaamohalli party from 21:00 to 02:30, free entry before 22:00, and pay-what-you-can door pricing after.",
    sourceName: "Korjaamo",
    sourceUrl: "https://korjaamo.fi/tapahtumat/"
  },
  {
    id: "radc-yo",
    title: "RADC Yö: Lara Silva, Jeku, una",
    category: "Electronic",
    genre: "Club / techno / electronic",
    date: "Friday 29 May 2026",
    start: "22:00",
    end: "05:00",
    venue: "Post Bar",
    area: "Kallio",
    address: "Kaikukatu 2, 00530 Helsinki",
    lat: 60.1831,
    lng: 24.9589,
    price: "Free before 23:00 / 10 EUR advance / 14 EUR after + 3.90 EUR security fee",
    priceValue: 0,
    age: "Check venue",
    status: "On sale",
    artists: ["Lara Silva", "Jeku", "DJ JVS (una)"],
    note:
      "Post Bar lists the Friday RADC Yö lineup, 22:00-05:00 doors, free-before-23 pricing, and advance ticket note.",
    sourceName: "Post Bar / RA",
    sourceUrl: "https://postbar.fi/archive/",
    extraSourceUrl: "https://ra.co/events/2428906"
  },
  {
    id: "fiona-zanetti",
    title: "Kaiku presents: Fiona Zanetti (CH)",
    category: "Electronic",
    genre: "House / club / electronic",
    date: "Friday 29 May 2026",
    start: "22:00",
    end: "04:00",
    venue: "Kaiku",
    area: "Kallio",
    address: "Kaikukatu 4, 00530 Helsinki",
    lat: 60.1825,
    lng: 24.9595,
    price: "12 EUR advance / 16 EUR door / free before 23:00",
    priceValue: 0,
    age: "K-20",
    status: "On sale",
    artists: [
      "Fiona Zanetti (CH)",
      "Mallamáret",
      "Spin Doctor",
      "DJ Lassi Lassi",
      "Cex"
    ],
    note:
      "Kaiku archive lists the Friday lineup, set times through 04:00, 16/0 before 23:00 door terms, and limited 12 EUR advance tickets.",
    sourceName: "Kaiku archive / RA",
    sourceUrl: "https://clubkaiku.fi/archive/2026/",
    extraSourceUrl: "https://ra.co/events/2438363"
  },
  {
    id: "neptune-night",
    title: "Neptune Night Vol. 2 x Obsidian",
    category: "Electronic",
    genre: "Club / DJ night",
    date: "Friday 29 May 2026",
    start: "23:15",
    end: "04:30",
    venue: "Kuudes Linja",
    area: "Kallio",
    address: "Hämeentie 13 B, 00530 Helsinki",
    lat: 60.184,
    lng: 24.9601,
    price: "8-10 EUR advance / 12 EUR door / free before 23:45 + 3.90 EUR security fee",
    priceValue: 0,
    age: "K-18",
    status: "On sale",
    artists: [
      "Babyblu x Margiiela",
      "AKTIVE",
      "KUKAEME",
      "Bhaly",
      "Reveriel b2b Magentamimma",
      "DJ PIXI",
      "Evan Wheel",
      "Scarab",
      "surprise guests"
    ],
    note:
      "Kuudes Linja's current listing gives the updated live/DJ lineup, 23:15-04:30 doors, K-18, and advance/door pricing.",
    sourceName: "Kuudes Linja",
    sourceUrl: "https://www.kuudeslinja.com/"
  },
  {
    id: "when-i-was-young",
    title: "When I Was Young w/ DJ Iiro",
    category: "Electronic",
    genre: "DJ night / nostalgic club",
    date: "Friday 29 May 2026",
    start: "23:30",
    end: "04:30",
    venue: "Bar Loose",
    area: "Kamppi",
    address: "Annankatu 21, 00100 Helsinki",
    lat: 60.1668,
    lng: 24.9374,
    price: "Free entry",
    priceValue: 0,
    age: "K-18",
    status: "Free entry",
    artists: ["DJ Iiro"],
    note:
      "Bar Loose's current events list has this Friday late-night DJ event running 23:30-04:30 with free entry.",
    sourceName: "Bar Loose",
    sourceUrl: "https://barloose.com/live/"
  }
];

const mapBounds = {
  north: 60.198,
  south: 60.162,
  west: 24.918,
  east: 24.975
};

let map;
let markers = new Map();
let selectedId = events[0].id;
let activeFilter = "all";
let searchQuery = "";

const elements = {
  eventList: document.querySelector("#eventList"),
  eventDetails: document.querySelector("#eventDetails"),
  searchInput: document.querySelector("#searchInput"),
  sortSelect: document.querySelector("#sortSelect"),
  filterButtons: [...document.querySelectorAll("[data-filter]")],
  activeFilter: document.querySelector("#activeFilter"),
  sourceList: document.querySelector("#sourceList"),
  eventCount: document.querySelector("#eventCount"),
  venueCount: document.querySelector("#venueCount"),
  lateCount: document.querySelector("#lateCount"),
  budgetCount: document.querySelector("#budgetCount"),
  mapFallback: document.querySelector("#mapFallback")
};

const pad = (value) => String(value).padStart(2, "0");

function timeLabel(event) {
  if (event.start.includes("not listed")) return "Time not listed";
  return `${event.start} -> ${event.end}`;
}

function searchableText(event) {
  return [
    event.title,
    event.category,
    event.genre,
    event.venue,
    event.area,
    event.address,
    event.price,
    event.status,
    ...event.artists
  ]
    .join(" ")
    .toLowerCase();
}

function startMinutes(event) {
  const match = event.start.match(/(\d{1,2}):(\d{2})/);
  if (!match) return 9999;
  return Number(match[1]) * 60 + Number(match[2]);
}

function filteredEvents() {
  const query = searchQuery.trim().toLowerCase();
  const filtered = events.filter((event) => {
    const matchesGenre = activeFilter === "all" || event.category === activeFilter;
    const matchesQuery = !query || searchableText(event).includes(query);
    return matchesGenre && matchesQuery;
  });

  return filtered.sort((a, b) => {
    const mode = elements.sortSelect.value;
    if (mode === "price") return a.priceValue - b.priceValue || startMinutes(a) - startMinutes(b);
    if (mode === "area") return a.area.localeCompare(b.area) || startMinutes(a) - startMinutes(b);
    return startMinutes(a) - startMinutes(b);
  });
}

function categoryInitial(event) {
  if (event.category === "Electronic") return "E";
  if (event.category === "Classical") return "C";
  if (event.category === "Metal") return "M";
  if (event.category === "Soul") return "S";
  if (event.category === "Pop") return "P";
  return "R";
}

function popupMarkup(event) {
  return `
    <strong>${event.title}</strong>
    <div>${event.venue}</div>
    <div>${timeLabel(event)}</div>
    <div>${event.price}</div>
  `;
}

function setupMap() {
  if (!window.L) {
    document.querySelector("#map").hidden = true;
    elements.mapFallback.hidden = false;
    renderFallbackMap(filteredEvents());
    return;
  }

  map = L.map("map", {
    zoomControl: true,
    scrollWheelZoom: true
  }).setView([60.1783, 24.9505], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  events.forEach((event, index) => {
    const marker = L.marker([event.lat, event.lng], {
      title: event.title,
      icon: L.divIcon({
        className: "",
        html: `<div class="marker-pin ${event.category}">${categoryInitial(event)}</div>`,
        iconSize: [36, 36],
        iconAnchor: [18, 18],
        popupAnchor: [0, -16]
      })
    })
      .addTo(map)
      .bindPopup(popupMarkup(event));

    marker.on("click", () => selectEvent(event.id, { pan: false, openPopup: false }));
    markers.set(event.id, marker);
  });

  if (markers.has(selectedId)) {
    markers.get(selectedId).openPopup();
  }
}

function renderFallbackMap(list) {
  elements.mapFallback.innerHTML = "";
  list.forEach((event) => {
    const x = ((event.lng - mapBounds.west) / (mapBounds.east - mapBounds.west)) * 100;
    const y = ((mapBounds.north - event.lat) / (mapBounds.north - mapBounds.south)) * 100;
    const button = document.createElement("button");
    button.className = "fallback-marker";
    button.style.left = `${Math.max(4, Math.min(96, x))}%`;
    button.style.top = `${Math.max(4, Math.min(96, y))}%`;
    button.type = "button";
    button.textContent = categoryInitial(event);
    button.title = `${event.title} at ${event.venue}`;
    button.addEventListener("click", () => selectEvent(event.id, { pan: false }));
    elements.mapFallback.append(button);
  });
}

function renderList(list) {
  elements.eventList.innerHTML = "";

  if (!list.length) {
    elements.eventList.innerHTML = `<div class="empty-state">No events match the current filters.</div>`;
    return;
  }

  list.forEach((event) => {
    const button = document.createElement("button");
    button.className = `event-card ${event.id === selectedId ? "selected" : ""}`;
    button.type = "button";
    button.dataset.eventId = event.id;
    button.innerHTML = `
      <div class="event-time">${timeLabel(event)}</div>
      <h3>${event.title}</h3>
      <div class="meta-line">${event.venue} · ${event.area}</div>
      <div class="meta-line">${event.artists.slice(0, 4).join(" · ")}${event.artists.length > 4 ? " · ..." : ""}</div>
      <div class="card-footer">
        <span class="price">${event.price}</span>
        <span class="category-dot ${event.category}">${event.category}</span>
      </div>
    `;
    button.addEventListener("click", () => selectEvent(event.id, { pan: true, openPopup: true }));
    elements.eventList.append(button);
  });
}

function renderDetails(event) {
  const extraLink = event.extraSourceUrl
    ? `<a class="action-link secondary" href="${event.extraSourceUrl}" target="_blank" rel="noreferrer">Second source</a>`
    : "";

  elements.eventDetails.innerHTML = `
    <div class="detail-grid">
      <div>
        <p class="eyebrow">${event.category} · ${event.area}</p>
        <h2>${event.title}</h2>
        <p>${event.note}</p>
        <div class="detail-tags">
          <span class="tag">${event.genre}</span>
          <span class="tag">${event.status}</span>
          <span class="tag">${event.age}</span>
        </div>
        <h3>Artists / DJs</h3>
        <div class="artist-list">
          ${event.artists.map((artist) => `<span>${artist}</span>`).join("")}
        </div>
      </div>
      <div class="facts">
        <div class="fact"><span>Time</span><strong>${timeLabel(event)}</strong></div>
        <div class="fact"><span>Venue</span><strong>${event.venue}</strong></div>
        <div class="fact"><span>Address</span><strong>${event.address}</strong></div>
        <div class="fact"><span>Price</span><strong>${event.price}</strong></div>
        <div class="button-row">
          <a class="action-link" href="${event.sourceUrl}" target="_blank" rel="noreferrer">Source listing</a>
          <a class="action-link secondary" href="https://www.openstreetmap.org/?mlat=${event.lat}&mlon=${event.lng}#map=17/${event.lat}/${event.lng}" target="_blank" rel="noreferrer">Open map</a>
          ${extraLink}
        </div>
      </div>
    </div>
  `;
}

function updateStats(list) {
  const venues = new Set(list.map((event) => event.venue));
  const late = list.filter((event) => startMinutes(event) >= 22 * 60 || event.end.includes("04")).length;
  const budget = list.filter((event) => event.priceValue <= 15).length;

  elements.eventCount.textContent = list.length;
  elements.venueCount.textContent = venues.size;
  elements.lateCount.textContent = late;
  elements.budgetCount.textContent = budget;
  elements.activeFilter.textContent = activeFilter === "all" ? "All genres" : activeFilter;
}

function updateMarkerVisibility(list) {
  const visibleIds = new Set(list.map((event) => event.id));

  if (map) {
    markers.forEach((marker, id) => {
      if (visibleIds.has(id)) {
        if (!map.hasLayer(marker)) marker.addTo(map);
      } else if (map.hasLayer(marker)) {
        marker.removeFrom(map);
      }
    });

    if (list.length) {
      const group = L.featureGroup(list.map((event) => markers.get(event.id)));
      map.fitBounds(group.getBounds().pad(0.18), { animate: true, maxZoom: 14 });
    }
  } else {
    renderFallbackMap(list);
  }
}

function selectEvent(id, options = {}) {
  const event = events.find((item) => item.id === id) || filteredEvents()[0] || events[0];
  selectedId = event.id;

  document.querySelectorAll(".event-card").forEach((card) => {
    card.classList.toggle("selected", card.dataset.eventId === selectedId);
  });

  renderDetails(event);

  if (map && markers.has(event.id)) {
    const marker = markers.get(event.id);
    if (options.pan) map.panTo(marker.getLatLng(), { animate: true });
    if (options.openPopup !== false) marker.openPopup();
  }
}

function renderSources() {
  const seen = new Map();
  events.forEach((event) => {
    seen.set(event.sourceName, event.sourceUrl);
  });

  elements.sourceList.innerHTML = [...seen]
    .map(([name, url]) => `<a class="source-pill" href="${url}" target="_blank" rel="noreferrer">${name}</a>`)
    .join("");
}

function render() {
  const list = filteredEvents();
  if (!list.some((event) => event.id === selectedId)) {
    selectedId = list[0]?.id || events[0].id;
  }

  renderList(list);
  renderDetails(events.find((event) => event.id === selectedId));
  updateStats(list);
  updateMarkerVisibility(list);
}

elements.searchInput.addEventListener("input", (event) => {
  searchQuery = event.target.value;
  render();
});

elements.sortSelect.addEventListener("change", render);

elements.filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    elements.filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    render();
  });
});

renderSources();
setupMap();
render();
