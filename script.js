const events = [
  {
    id: "soundvault",
    title: "SoundVault Festival 2026 - Friday",
    category: "Electronic",
    genre: "Techno / hard techno / hardstyle",
    date: "Friday 22 May 2026",
    start: "15:00",
    end: "22:00",
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
      "BEAUZ",
      "Dimitri K",
      "FOVOS",
      "Marie Vaunt",
      "Paolo Ferrara",
      "POLTERGST",
      "Ran-D",
      "Sickmode",
      "Sub Zero Project",
      "Zapravka",
      "Aztronaut",
      "Don Taco",
      "Miia Solar",
      "TMPR",
      "Valkrund"
    ],
    note:
      "Festival listing sources agree on the Friday date and Suvilahti location; the clearest public time listing gives 15:00-22:00.",
    sourceName: "Helsinki Live / StayHappening",
    sourceUrl: "https://helsinki-live.com/events/soundvault-festival-2026-friday",
    extraSourceUrl: "https://stayhappening.com/e/soundvault-festival-E2ISY4VNQKG"
  },
  {
    id: "iwdws",
    title: "I WANNA DANCE WITH SOMBADI",
    category: "Electronic",
    genre: "Club / dance",
    date: "Friday 22 May 2026",
    start: "22:00",
    end: "04:00",
    venue: "Kaiku",
    area: "Kallio",
    address: "Kaikukatu 4, 00530 Helsinki",
    lat: 60.1872,
    lng: 24.9638,
    price: "12-18 EUR + 3.90 EUR security fee",
    priceValue: 12,
    age: "K-20",
    status: "On sale",
    artists: ["DIEGOXMAMI (SE)", "BBYGUSI (SE)", "SOMBADI", "HAMM", "ZEZE", "SOLI CLUB"],
    note:
      "Kaiku's public listing gives advance phases and door price; RA lists a 04:30 end, Eventual lists 04:00.",
    sourceName: "Eventual / Kaiku",
    sourceUrl: "https://www.eventu.al/en/event/9162/finland/helsinki/i-wanna-dance-sombadi",
    extraSourceUrl: "https://clubkaiku.fi/"
  },
  {
    id: "sonic-rites",
    title: "Sonic Rites Festival 2026 - Friday",
    category: "Metal",
    genre: "Alternative / heavy / doom / post-metal",
    date: "Friday 22 May 2026",
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
      "Discharge (UK)",
      "Jesu (UK)",
      "Julma Henri",
      "Blackwater Holylight (US)",
      "Sumea",
      "Frigid Winter",
      "Klidas",
      "Generation Decline (UK)",
      "Sophia Djebel Rose (FRA)",
      "Renate/Cordate"
    ],
    note:
      "Two-day festival; this entry shows the Friday program and Friday timing from public listings.",
    sourceName: "AllEvents / Helsinki Live",
    sourceUrl: "https://allevents.in/helsinki/200028281605605",
    extraSourceUrl: "https://helsinki-live.com/genre/metal"
  },
  {
    id: "hpo-mother-earth",
    title: "HPO - Mother Earth",
    category: "Classical",
    genre: "Classical",
    date: "Friday 22 May 2026",
    start: "19:00",
    end: "21:00",
    venue: "Musiikkitalo - Helsinki Music Centre",
    area: "Töölö",
    address: "Mannerheimintie 13a, 00100 Helsinki",
    lat: 60.1732,
    lng: 24.9348,
    price: "from 3.50 EUR",
    priceValue: 3.5,
    age: "All ages unless noted by venue",
    status: "On sale",
    artists: ["Helsinki Philharmonic Orchestra", "Fazil Say"],
    note:
      "MyHelsinki lists Fazil Say in the event description; Helsinki Live lists ticketing from 3.50 EUR.",
    sourceName: "MyHelsinki / Helsinki Live",
    sourceUrl: "https://www.myhelsinki.fi/events/hpo-mother-earth/",
    extraSourceUrl: "https://helsinki-live.com/events/musiikkitalo-hpo-mother-earth-20260522-1900"
  },
  {
    id: "john-grant",
    title: "John Grant (US)",
    category: "Rock",
    genre: "Singer-songwriter / chamber pop / synth-pop",
    date: "Friday 22 May 2026",
    start: "19:00 doors / 20:00 show",
    end: "not listed",
    venue: "G Livelab Helsinki",
    area: "Kamppi",
    address: "Yrjönkatu 3, 00120 Helsinki",
    lat: 60.1662,
    lng: 24.9409,
    price: "Standard 42 EUR; sold out",
    priceValue: 42,
    age: "All ages",
    status: "Sold out",
    artists: ["John Grant"],
    note:
      "Official venue listing shows doors, showtime, original standard price, and sold-out status.",
    sourceName: "G Livelab",
    sourceUrl: "https://glivelab.fi/events/john-grant-us-691c29c2d005c13cd0b93ce3/"
  },
  {
    id: "viikate",
    title: "Viikate 30v",
    category: "Rock",
    genre: "Rock / rautalankametal",
    date: "Friday 22 May 2026",
    start: "20:00 doors / 21:30 show",
    end: "not listed",
    venue: "Tavastia-klubi",
    area: "Kamppi",
    address: "Urho Kekkosen katu 4-6, 00100 Helsinki",
    lat: 60.1695,
    lng: 24.9334,
    price: "37-40 EUR original listing; sold out",
    priceValue: 37,
    age: "K-18",
    status: "Sold out",
    artists: ["Viikate"],
    note:
      "Official Tavastia listing gives doors, showtime, K-18, and sold-out status; Stadissa lists the original price range.",
    sourceName: "Tavastia / Stadissa",
    sourceUrl: "https://tavastiaklubi.fi/en/event/2026-05-22/viikate-30v/112791/",
    extraSourceUrl: "https://www.stadissa.fi/tapahtumat/114983/viikate-30v"
  },
  {
    id: "pistones",
    title: "The Pistones - levyjulkkarit, God Given Ass",
    category: "Rock",
    genre: "Rock / punk",
    date: "Friday 22 May 2026",
    start: "19:00",
    end: "not listed",
    venue: "Kuudes Linja",
    area: "Kallio",
    address: "Hämeentie 13 B, 00530 Helsinki",
    lat: 60.1871,
    lng: 24.9615,
    price: "15 EUR",
    priceValue: 15,
    age: "Check venue",
    status: "On sale",
    artists: ["The Pistones", "God Given Ass"],
    note:
      "Stupido confirms both acts at Kuudes Linja on 22.5.; Keikat lists start time and price.",
    sourceName: "Stupido / Keikat",
    sourceUrl: "https://www.stupido.fi/tulevat-keikat/",
    extraSourceUrl: "https://keikat.org/helsinki"
  },
  {
    id: "as-the-sun-falls",
    title: "As The Sun Falls, Northern Genocide, Scythe Of Sorrow",
    category: "Metal",
    genre: "Melodic / atmospheric metal",
    date: "Friday 22 May 2026",
    start: "20:00",
    end: "not listed",
    venue: "Semifinal",
    area: "Kamppi",
    address: "Urho Kekkosen katu 4-6, 00100 Helsinki",
    lat: 60.1694,
    lng: 24.9337,
    price: "from 15 EUR",
    priceValue: 15,
    age: "K-18",
    status: "On sale",
    artists: ["As The Sun Falls", "Northern Genocide", "Scythe Of Sorrow"],
    note:
      "The public listing gives doors at 20:00, ticket price from 15 EUR, and K-18.",
    sourceName: "AllEvents / Keikat",
    sourceUrl: "https://allevents.in/helsinki/as-the-sun-falls-levyjulkkarit-northern-genocide-scythe-of-sorrow-semifinal/200029547765636",
    extraSourceUrl: "https://keikat.org/semifinal"
  },
  {
    id: "antivalent",
    title: "Antivalent, KELO",
    category: "Rock",
    genre: "Rock",
    date: "Friday 22 May 2026",
    start: "20:00 doors",
    end: "not listed",
    venue: "On The Rocks",
    area: "Kluuvi",
    address: "Mikonkatu 15, 00100 Helsinki",
    lat: 60.1714,
    lng: 24.9437,
    price: "from 15 EUR / door 18 EUR",
    priceValue: 15,
    age: "K-18",
    status: "On sale",
    artists: ["Antivalent", "KELO"],
    note:
      "Official On The Rocks listing gives date, doors, price tiers, venue and age restriction.",
    sourceName: "On The Rocks",
    sourceUrl: "https://www.rocks.fi/tapahtumat/"
  },
  {
    id: "oisin-on-kivempaa",
    title: "Öisin on kivempaa: DJs Mortti & Iiro",
    category: "Electronic",
    genre: "DJ night",
    date: "Friday 22 May 2026",
    start: "23:30 doors",
    end: "not listed",
    venue: "On The Rocks",
    area: "Kluuvi",
    address: "Mikonkatu 15, 00100 Helsinki",
    lat: 60.1716,
    lng: 24.9439,
    price: "7 EUR at door",
    priceValue: 7,
    age: "K-18",
    status: "At door",
    artists: ["DJ Mortti", "DJ Iiro"],
    note:
      "Official On The Rocks listing places this late-night DJ event after Antivalent/KELO.",
    sourceName: "On The Rocks",
    sourceUrl: "https://www.rocks.fi/tapahtumat/"
  },
  {
    id: "lover",
    title: "LOVER, The Chiefs, Sörnäinen",
    category: "Rock",
    genre: "Rock",
    date: "Friday 22 May 2026",
    start: "21:00",
    end: "23:30",
    venue: "Bar Loose",
    area: "Kamppi",
    address: "Annankatu 21, 00100 Helsinki",
    lat: 60.1655,
    lng: 24.9365,
    price: "13 EUR",
    priceValue: 13,
    age: "Check venue",
    status: "On sale",
    artists: ["LOVER", "The Chiefs", "Sörnäinen"],
    note:
      "Bar Loose official calendar lists this Friday show at 21:00-23:30 with a 13 EUR price.",
    sourceName: "Bar Loose",
    sourceUrl: "https://barloose.com/en/live/lista/"
  },
  {
    id: "heart2heart",
    title: "Heart2Heart",
    category: "Electronic",
    genre: "DJ night / dance classics",
    date: "Friday 22 May 2026",
    start: "23:30",
    end: "04:30",
    venue: "Bar Loose",
    area: "Kamppi",
    address: "Annankatu 21, 00100 Helsinki",
    lat: 60.1657,
    lng: 24.9368,
    price: "Free entry",
    priceValue: 0,
    age: "Check venue",
    status: "Free entry",
    artists: ["Laura Vartio", "Kalifornia-Keke"],
    note:
      "Bar Loose official calendar describes the Heart2Heart DJ duo and lists the late-night slot as free entry.",
    sourceName: "Bar Loose",
    sourceUrl: "https://barloose.com/en/live/lista/"
  },
  {
    id: "respect",
    title: "RESPECT! Aretha Franklin Tribute & Hi-Five Quintet Soul Original",
    category: "Soul",
    genre: "Soul / tribute",
    date: "Friday 22 May 2026",
    start: "22:30",
    end: "not listed",
    venue: "Storyville",
    area: "Etu-Töölö",
    address: "Museokatu 8, 00100 Helsinki",
    lat: 60.1739,
    lng: 24.9321,
    price: "15 EUR",
    priceValue: 15,
    age: "Check venue",
    status: "On sale",
    artists: ["RESPECT! Aretha Franklin Tribute", "Hi-Five Quintet Soul Original"],
    note:
      "Keikat lists the artists, Storyville venue, Friday date, 22:30 time, and 15 EUR ticket price.",
    sourceName: "Keikat",
    sourceUrl: "https://keikat.org/tupe-skenesali-162"
  },
  {
    id: "aikakone",
    title: "Aikakone",
    category: "Pop",
    genre: "Pop / electronic",
    date: "Friday 22 May 2026",
    start: "23:00",
    end: "not listed",
    venue: "Bar Ihku Helsinki",
    area: "Kamppi",
    address: "Antinkatu 1, 00100 Helsinki",
    lat: 60.169,
    lng: 24.9349,
    price: "Check Ticketmaster",
    priceValue: 999,
    age: "Check ticket seller",
    status: "On sale",
    artists: ["Aikakone"],
    note:
      "Ticketmaster confirms the artist, date, 23:00 time, and venue; price was not exposed in the public search result.",
    sourceName: "Ticketmaster",
    sourceUrl: "https://www.ticketmaster.fi/artist/aikakone-lippuja/911647"
  },
  {
    id: "jukka52",
    title: "DJ Jukka52 Rave Night",
    category: "Electronic",
    genre: "Techno / drum and bass / tech house",
    date: "Friday 22 May 2026",
    start: "time not listed",
    end: "time not listed",
    venue: "Lepakkomies",
    area: "Kallio",
    address: "Helsinginkatu 1, 00500 Helsinki",
    lat: 60.1863,
    lng: 24.9499,
    price: "3 EUR",
    priceValue: 3,
    age: "Check venue",
    status: "On sale",
    artists: ["DJ Jukka52"],
    note:
      "Helsinki Live lists the Friday event and price; Stadissa has venue details and event description, but the exact 2026 time was not public in the indexed listing.",
    sourceName: "Helsinki Live / Stadissa",
    sourceUrl: "https://helsinki-live.com/genre/electronic",
    extraSourceUrl: "https://www.stadissa.fi/tapahtumat/98894/dj-jukka52-rave-night"
  }
];

const mapBounds = {
  north: 60.198,
  south: 60.162,
  west: 24.929,
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
