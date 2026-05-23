const events = [
  {
    id: "juha-tapio",
    title: "Juha Tapio: Toisillemme Parhaat",
    category: "Pop",
    genre: "Pop / singer-songwriter",
    date: "Saturday 23 May 2026",
    start: "15:00 / 19:00",
    end: "17:15 / 21:15",
    venue: "Savoy-teatteri",
    area: "Kaartinkaupunki",
    address: "Kasarmikatu 46-48, 00130 Helsinki",
    lat: 60.1655,
    lng: 24.9486,
    price: "from 48.90 EUR",
    priceValue: 48.9,
    age: "All ages",
    status: "15:00 few tickets / 19:00 sold out",
    artists: ["Juha Tapio"],
    note:
      "Savoy and ticket listings show two Saturday concerts: a 15:00 additional show and a 19:00 sold-out show. Duration is listed as about 2 h 15 min including intermission.",
    sourceName: "lippu.fi / MyHelsinki",
    sourceUrl:
      "https://www.lippu.fi/en/artist/juha-tapio/toisillemme-parhaat-juha-tapion-konserttisalikiertue-4047334/",
    extraSourceUrl:
      "https://www.myhelsinki.fi/fi/events/juha-tapio-toisillemme-parhaat-lipunmyynti-alkaa-to-11-12-klo-12-lippu-fi/"
  },
  {
    id: "soundvault-saturday",
    title: "SoundVault Festival 2026 - Saturday",
    category: "Electronic",
    genre: "Techno / hard techno / hardstyle",
    date: "Saturday 23 May 2026",
    start: "17:00",
    end: "not listed",
    venue: "Suvilahti / Suvilahden Tiivistämö area",
    area: "Sörnäinen",
    address: "Parrukatu, 00540 Helsinki",
    lat: 60.1878,
    lng: 24.9706,
    price: "from 107 EUR",
    priceValue: 107,
    age: "Check ticket seller",
    status: "On sale",
    artists: [
      "Da Tweekaz",
      "DJ Isaac",
      "D-Sturb",
      "Ely Oaks",
      "Space 92",
      "The Rocketman",
      "Ummet Ozcan",
      "Unicorn on K",
      "Zatox",
      "BENNETT",
      "BYØRN",
      "Agnia",
      "Artheia",
      "Eklipse",
      "Martin K4rma",
      "Sickmode",
      "Dimitri K",
      "FOVOS",
      "Marie Vaunt",
      "Paolo Ferrara",
      "Ran-D",
      "Sub Zero Project",
      "Zapravka",
      "POLTERGST",
      "BEAUZ"
    ],
    note:
      "Saturday festival listing at Suvilahti; TourWax exposes a 17:00 event time and Helsinki Live lists the Saturday lineup and from-price.",
    sourceName: "TourWax / Helsinki Live",
    sourceUrl: "https://www.tourwax.com/festivals/soundvault-festival-22-2352026-2026-05-23",
    extraSourceUrl: "https://helsinki-live.com/genre/electronic"
  },
  {
    id: "sonic-rites-saturday",
    title: "Sonic Rites 2026 - Saturday",
    category: "Metal",
    genre: "Alternative / heavy / doom / post-metal",
    date: "Saturday 23 May 2026",
    start: "18:00",
    end: "23:55",
    venue: "Ääniwalli",
    area: "Vallila",
    address: "Nilsiankatu 16, 00510 Helsinki",
    lat: 60.1942,
    lng: 24.9461,
    price: "from 76.50 EUR; 1-day listed at 72 EUR + fee",
    priceValue: 72,
    age: "Check ticket seller",
    status: "On sale",
    artists: [
      "Russian Circles",
      "Acid King",
      "Pelican",
      "Wolfbrigade",
      "Jesu",
      "OvO",
      "Klidas",
      "Sophia Djebel Rose (FRA)",
      "Cats of Transnistria",
      "Haapoja",
      "Frigid Winter",
      "Sumea",
      "Vainoa"
    ],
    note:
      "Two-day festival; this entry shows the Saturday program from public metal listings.",
    sourceName: "Helsinki Live",
    sourceUrl: "https://helsinki-live.com/genre/metal",
    extraSourceUrl: "https://www.songkick.com/metro-areas/28825-finland-helsinki/2026"
  },
  {
    id: "prestige-enemynside",
    title: "Prestige + Enemynside (ITA) + Radux + Green King",
    category: "Metal",
    genre: "Thrash / metal",
    date: "Saturday 23 May 2026",
    start: "18:00",
    end: "not listed",
    venue: "Lepakkomies",
    area: "Kallio",
    address: "Helsinginkatu 1, 00500 Helsinki",
    lat: 60.1863,
    lng: 24.9499,
    price: "12 EUR at door",
    priceValue: 12,
    age: "Check venue",
    status: "At the door",
    artists: ["Prestige", "Enemynside (ITA)", "Radux", "Green King"],
    note:
      "Helsinki Live lists the Saturday Lepakkomies metal bill and door price; Songkick confirms venue and date.",
    sourceName: "Helsinki Live / Songkick",
    sourceUrl: "https://helsinki-live.com/genre/metal",
    extraSourceUrl: "https://www.songkick.com/venues/355486-lepakkomies"
  },
  {
    id: "emergenza",
    title: "Emergenza Suomen finaalit 2026",
    category: "Rock",
    genre: "Band competition / rock",
    date: "Saturday 23 May 2026",
    start: "18:00 doors",
    end: "not listed",
    venue: "Kulttuuritehdas Korjaamo - Vaunusali",
    area: "Töölö",
    address: "Töölönkatu 51 A-B, 00250 Helsinki",
    lat: 60.186,
    lng: 24.9174,
    price: "15 EUR advance / 18 EUR door",
    priceValue: 15,
    age: "K-18",
    status: "On sale",
    artists: ["Emergenza Finland finalists"],
    note:
      "Korjaamo lists the Finnish finals in Vaunusali with doors at 18:00 and advance/door pricing.",
    sourceName: "Korjaamo",
    sourceUrl: "https://korjaamo.fi/"
  },
  {
    id: "kaarija-eurodisko",
    title: "Käärijä - EURODISKO",
    category: "Pop",
    genre: "Pop / rap",
    date: "Saturday 23 May 2026",
    start: "18:30",
    end: "23:45",
    venue: "Veikkaus Arena",
    area: "Pasila",
    address: "Areenankuja 1, 00240 Helsinki",
    lat: 60.2052,
    lng: 24.9285,
    price: "from 49.90 EUR",
    priceValue: 49.9,
    age: "S / K-18 sections",
    status: "On sale",
    artists: ["Käärijä", "Joker Out"],
    note:
      "Ticketmaster confirms the 18:30 arena concert; HappeningNext notes tickets from 49.90 EUR and support from Joker Out.",
    sourceName: "Ticketmaster / HappeningNext",
    sourceUrl: "https://www.ticketmaster.fi/event/kaarija-eurodisko-tickets/110723500",
    extraSourceUrl: "https://happeningnext.com/event/k%C3%A4%C3%A4rij%C3%A4-eurodisko-eid3a0d4hr891"
  },
  {
    id: "viikate-saturday",
    title: "Viikate 30v",
    category: "Rock",
    genre: "Rock / rautalankametal",
    date: "Saturday 23 May 2026",
    start: "20:00 doors / 21:30 show",
    end: "not listed",
    venue: "Tavastia-klubi",
    area: "Kamppi",
    address: "Urho Kekkosen katu 4-6, 00100 Helsinki",
    lat: 60.1695,
    lng: 24.9334,
    price: "Sold out",
    priceValue: Number.POSITIVE_INFINITY,
    age: "K-18",
    status: "Sold out",
    artists: ["Viikate"],
    note:
      "Official Tavastia listing gives the Saturday date, doors, showtime, K-18, and sold-out status.",
    sourceName: "Tavastia",
    sourceUrl: "https://tavastiaklubi.fi/events/2026-05-23/viikate-30v/112715/"
  },
  {
    id: "atlas-lastout",
    title: "Atlas, Lastout",
    category: "Metal",
    genre: "Modern metal / alternative metal",
    date: "Saturday 23 May 2026",
    start: "20:00 doors",
    end: "not listed",
    venue: "On The Rocks",
    area: "Kluuvi",
    address: "Mikonkatu 15, 00100 Helsinki",
    lat: 60.1714,
    lng: 24.9437,
    price: "18 EUR advance / 22 EUR door",
    priceValue: 18,
    age: "K-18",
    status: "On sale",
    artists: ["Atlas", "Lastout"],
    note:
      "Official On The Rocks listing gives date, doors, price tiers, venue and age restriction.",
    sourceName: "On The Rocks",
    sourceUrl: "https://www.rocks.fi/tapahtumat/atlas-lastout/"
  },
  {
    id: "ratto-lehtisalo",
    title: "KULT Live: Rättö & Lehtisalo",
    category: "Rock",
    genre: "Experimental rock / krautrock",
    date: "Saturday 23 May 2026",
    start: "20:00 doors / 21:00 show",
    end: "not listed",
    venue: "Kulttuuritalo / KULT",
    area: "Alppila",
    address: "Sturenkatu 4, 00510 Helsinki",
    lat: 60.1905,
    lng: 24.9446,
    price: "29 EUR + fees / 32 EUR door",
    priceValue: 29,
    age: "K-18",
    status: "On sale",
    artists: ["Rättö & Lehtisalo"],
    note:
      "Kulttuuritalo lists doors at 20:00, showtime at 21:00, standing audience, K-18, and ticket/door pricing.",
    sourceName: "Kulttuuritalo",
    sourceUrl: "https://kulttuuritalo.fi/tapahtuma/kult-live-ratto-lehtisalo/"
  },
  {
    id: "lamf",
    title: "L.A.M.F., Korkkivika, Terve Hulluus",
    category: "Rock",
    genre: "Rock / punk",
    date: "Saturday 23 May 2026",
    start: "21:00",
    end: "23:30",
    venue: "Bar Loose",
    area: "Kamppi",
    address: "Annankatu 21, 00100 Helsinki",
    lat: 60.1655,
    lng: 24.9365,
    price: "12 EUR",
    priceValue: 12,
    age: "Check venue",
    status: "On sale",
    artists: ["L.A.M.F.", "Korkkivika", "Terve Hulluus"],
    note:
      "Bar Loose calendar lists this Saturday live show at 21:00-23:30 with a 12 EUR price.",
    sourceName: "Bar Loose",
    sourceUrl: "https://barloose.com/en/live/list/"
  },
  {
    id: "post-bar-club-night",
    title:
      "Post Bar Club Night - Pariah, Monokromatiko LIVE, Sala & Nea2k, Joni DJ & Cimac Sound",
    category: "Electronic",
    genre: "Techno / bass",
    date: "Saturday 23 May 2026",
    start: "22:00",
    end: "06:00",
    venue: "Post Bar",
    area: "Sörnäinen",
    address: "Kaikukatu 2, 00530 Helsinki",
    lat: 60.1874,
    lng: 24.9634,
    price: "8-17 EUR",
    priceValue: 8,
    age: "20+",
    status: "On sale",
    artists: ["Pariah", "Monokromatiko LIVE", "Sala", "Nea2k", "Joni DJ", "Cimac Sound"],
    note:
      "RA lists the Saturday Post Bar club night with 22:00-06:00 hours, lineup, cost and 20+ age limit.",
    sourceName: "RA / Post Bar",
    sourceUrl: "https://ra.co/events/2406829"
  },
  {
    id: "bassous-vol-4",
    title: "Bassous VOL.4",
    category: "Electronic",
    genre: "Techno",
    date: "Saturday 23 May 2026",
    start: "22:00",
    end: "04:00",
    venue: "Cellar",
    area: "Punavuori",
    address: "Iso Roobertinkatu 10, 00120 Helsinki",
    lat: 60.1638,
    lng: 24.9418,
    price: "10 EUR",
    priceValue: 10,
    age: "20+",
    status: "On sale",
    artists: ["Elvira (3)", "Jaydn"],
    note:
      "RA lists Bassous VOL.4 at Cellar with 22:00-04:00 hours, techno genre, lineup, cost and 20+ age limit.",
    sourceName: "RA / Bassous",
    sourceUrl: "https://ra.co/events/2416616"
  },
  {
    id: "paramida",
    title: "Kaiku Presents: Paramida (DE)",
    category: "Electronic",
    genre: "Club / house / techno",
    date: "Saturday 23 May 2026",
    start: "22:00",
    end: "04:00",
    venue: "Kaiku",
    area: "Kallio",
    address: "Kaikukatu 4, 00530 Helsinki",
    lat: 60.1872,
    lng: 24.9638,
    price: "12 EUR advance / 16 EUR door terms",
    priceValue: 12,
    age: "Check venue",
    status: "On sale",
    artists: [
      "Paramida (DE)",
      "Katerina",
      "Lil Tony",
      "Femkult",
      "corehani b2b mintic",
      "Stasi Dian",
      "Angel Girls",
      "evan wheel",
      "dj pixi",
      "kawaiiigore"
    ],
    note:
      "Kaiku archive lists the Saturday Paramida event with room programming, advance ticket note and 22:00-04:00 set times.",
    sourceName: "Kaiku archive",
    sourceUrl: "https://clubkaiku.fi/archive/2026/"
  },
  {
    id: "jytadisko-mortti",
    title: "Loosen Jytädisko: DJ Mortti",
    category: "Electronic",
    genre: "DJ night / alternative dance",
    date: "Saturday 23 May 2026",
    start: "23:30",
    end: "04:30",
    venue: "Bar Loose",
    area: "Kamppi",
    address: "Annankatu 21, 00100 Helsinki",
    lat: 60.1657,
    lng: 24.9368,
    price: "3.50 EUR",
    priceValue: 3.5,
    age: "Check venue",
    status: "At door",
    artists: ["DJ Mortti"],
    note:
      "Bar Loose calendar lists the Saturday late-night Loosen Jytädisko with DJ Mortti at 23:30-04:30 and a 3.50 EUR price.",
    sourceName: "Bar Loose",
    sourceUrl: "https://barloose.com/en/live/list/"
  }
];

const mapBounds = {
  north: 60.208,
  south: 60.162,
  west: 24.916,
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
