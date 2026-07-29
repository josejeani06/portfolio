const popularSuggestions = [
  { id: "usa", name: "United States", type: "USA", lat: 39.8283, lng: -98.5795, zoom: 4 },
  { id: "sf", name: "San Francisco, California", type: "City", lat: 37.7749, lng: -122.4194, zoom: 11 },
  { id: "san-jose", name: "San Jose, California", type: "City", lat: 37.3382, lng: -121.8863, zoom: 11 },
  { id: "la", name: "Los Angeles, California", type: "City", lat: 34.0522, lng: -118.2437, zoom: 10 },
  { id: "seattle", name: "Seattle, Washington", type: "City", lat: 47.6062, lng: -122.3321, zoom: 10 },
  { id: "chicago", name: "Chicago, Illinois", type: "City", lat: 41.8781, lng: -87.6298, zoom: 10 },
  { id: "houston", name: "Houston, Texas", type: "City", lat: 29.7604, lng: -95.3698, zoom: 10 },
  { id: "new-york", name: "New York, New York", type: "City", lat: 40.7128, lng: -74.006, zoom: 10 }
];

const STATE_GEOJSON_URL = "https://raw.githubusercontent.com/python-visualization/folium/master/examples/data/us-states.json";
const COUNTY_GEOJSON_URL = "https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json";
const ZIP_STATE_URL_PREFIX = "https://raw.githubusercontent.com/OpenDataDE/State-zip-code-GeoJSON/master/";
const TIGERWEB_SERVICE = "TIGERweb/tigerWMS_Current/MapServer";
const TIGERWEB_LAYERS = {
  zcta: 2,
  incorporatedPlaces: 28,
  censusDesignatedPlaces: 30
};
const TIGERWEB_BASE = "https://tigerweb.geo.census.gov/arcgis/rest/services";
const STATE_FILE_SLUGS = {
  AL: "alabama", AK: "alaska", AZ: "arizona", AR: "arkansas", CA: "california", CO: "colorado",
  CT: "connecticut", DE: "delaware", FL: "florida", GA: "georgia", HI: "hawaii", ID: "idaho",
  IL: "illinois", IN: "indiana", IA: "iowa", KS: "kansas", KY: "kentucky", LA: "louisiana",
  ME: "maine", MD: "maryland", MA: "massachusetts", MI: "michigan", MN: "minnesota",
  MS: "mississippi", MO: "missouri", MT: "montana", NE: "nebraska", NV: "nevada",
  NH: "new_hampshire", NJ: "new_jersey", NM: "new_mexico", NY: "new_york",
  NC: "north_carolina", ND: "north_dakota", OH: "ohio", OK: "oklahoma", OR: "oregon",
  PA: "pennsylvania", RI: "rhode_island", SC: "south_carolina", SD: "south_dakota",
  TN: "tennessee", TX: "texas", UT: "utah", VT: "vermont", VA: "virginia",
  WA: "washington", WV: "west_virginia", WI: "wisconsin", WY: "wyoming"
};
const ZIP_STATE_FILE_MAP = Object.fromEntries(
  Object.entries(STATE_FILE_SLUGS).map(([code, slug]) => [code, `${code.toLowerCase()}_${slug}`])
);

const selected = new Map();
const MIN_RADIUS_METERS = 1000;
const DETAILED_BOUNDARY_ZOOM = {
  City: 8,
  "ZIP Code": 10
};
let boundariesVisible = true;
let drawMode = null;
let areaMode = "State";
let searchRequestId = 0;
let draftRadius = null;
let draftPolygonPoints = [];
let currentPopupSelection = null;
let drawSelectionMode = "include";

const searchWrap = document.querySelector(".search-wrap");
// SearchField owns its input and its own clear button.
const searchMenu = document.getElementById("searchMenu");
const emptyState = document.getElementById("emptyState");
const selectedState = document.getElementById("selectedState");
const selectedList = document.getElementById("selectedList");
const bulkBar = document.getElementById("bulkBar");
const prototypeShell = document.querySelector(".prototype-shell");
const locationPanelToggle = document.getElementById("locationPanelToggle");
const closeLocationPanel = document.getElementById("closeLocationPanel");
const mapCanvas = document.getElementById("mapCanvas");
const addMapButton = document.getElementById("addMapButton");
const areaMenu = document.getElementById("areaMenu");
const boundaryLoading = document.getElementById("boundaryLoading");

// Design-system hosts. These divs hold nothing; ds-mount.js renders the real
// components into them and the state below stays exactly where it was.
const searchField = document.getElementById("searchField");
const selectedSummary = document.getElementById("selectedSummary");
const mapOptionsHost = document.getElementById("mapOptionsHost");
const drawActions = document.getElementById("drawActions");
const drawModeActions = document.getElementById("drawModeActions");
const zoomControl = document.getElementById("zoomControl");
const viewToggle = document.getElementById("viewToggle");
const areaSelect = document.getElementById("areaSelect");

let searchQuery = "";
const AREA_LEVELS = ["USA", "State", "County", "City", "ZIP Code"];

const BULK_UPLOAD_FILES = [
  {
    id: "miami",
    name: "miami_bulk_locations.csv",
    label: "Miami, Florida",
    stateCode: "FL",
    center: [25.7617, -80.1918],
    rows: [
      ["33101", "include"], ["33109", "include"], ["33122", "include"], ["33125", "include"], ["33126", "include"],
      ["33127", "include"], ["33128", "include"], ["33129", "include"], ["33130", "include"], ["33131", "include"],
      ["33132", "include"], ["33133", "include"], ["33134", "include"], ["33135", "include"], ["33136", "include"],
      ["33137", "include"], ["33138", "include"], ["33139", "include"], ["33140", "include"], ["33141", "include"],
      ["33142", "include"], ["33143", "include"], ["33144", "include"], ["33145", "include"], ["33146", "include"]
    ]
  },
  {
    id: "washington",
    name: "washington_bulk_locations.csv",
    label: "Washington",
    stateCode: "WA",
    center: [47.6062, -122.3321],
    rows: [
      ["98004", "include"], ["98005", "include"], ["98006", "include"], ["98007", "include"], ["98008", "include"],
      ["98011", "include"], ["98012", "include"], ["98021", "include"], ["98027", "include"], ["98033", "include"],
      ["98034", "include"], ["98036", "include"], ["98037", "include"], ["98040", "include"], ["98052", "include"],
      ["98053", "include"], ["98072", "include"], ["98101", "include"], ["98102", "include"], ["98103", "include"],
      ["98104", "include"], ["98105", "include"], ["98107", "include"], ["98109", "include"], ["98112", "include"]
    ]
  },
  {
    id: "denver",
    name: "denver_bulk_locations.csv",
    label: "Denver, Colorado",
    stateCode: "CO",
    center: [39.7392, -104.9903],
    rows: [
      ["80014", "include"], ["80015", "include"], ["80016", "include"], ["80017", "include"], ["80021", "include"],
      ["80022", "include"], ["80023", "include"], ["80027", "include"], ["80110", "include"], ["80111", "include"],
      ["80112", "include"], ["80113", "include"], ["80120", "include"], ["80121", "include"], ["80122", "include"],
      ["80202", "include"], ["80203", "include"], ["80204", "include"], ["80205", "include"], ["80206", "include"],
      ["80207", "include"], ["80209", "include"], ["80210", "include"], ["80211", "include"], ["80212", "include"]
    ]
  },
  {
    id: "utah",
    name: "utah_bulk_locations.csv",
    label: "Utah",
    stateCode: "UT",
    center: [40.7608, -111.891],
    rows: [
      ["84003", "include"], ["84004", "include"], ["84005", "include"], ["84020", "include"], ["84043", "include"],
      ["84044", "include"], ["84047", "include"], ["84057", "include"], ["84058", "include"], ["84070", "include"],
      ["84074", "include"], ["84081", "include"], ["84084", "include"], ["84088", "include"], ["84092", "include"],
      ["84093", "include"], ["84094", "include"], ["84101", "include"], ["84102", "include"], ["84103", "include"],
      ["84104", "include"], ["84105", "include"], ["84106", "include"], ["84107", "include"], ["84108", "include"]
    ]
  }
];

const BULK_REVIEW_ERRORS = {
  "33109": "ZIP is outside active service radius",
  "98004": "Duplicate ZIP in current map",
  "80202": "Area type conflicts with an existing exclusion",
  "84101": "ZIP could not be processed"
};

const bulkUploadState = {
  step: "upload",
  files: [],
  loadingFileId: null,
  rows: [],
  selectedRows: new Set(),
  adding: false,
  confirmingDiscard: false
};

const savedMaps = [];
let savedMapSearchQuery = "";
let activeSavedMapId = null;
let savedMapDirty = false;
let previewMapInstance = null;

const map = L.map("leafletMap", {
  center: [39.8283, -98.5795],
  zoom: 4,
  zoomControl: false,
  attributionControl: true
});

map.attributionControl.setPrefix(false);
map.createPane("boundaryPane");
map.getPane("boundaryPane").style.zIndex = "640";
map.createPane("previewPane");
map.getPane("previewPane").style.zIndex = "660";
map.createPane("draftPane");
map.getPane("draftPane").style.zIndex = "650";
map.createPane("handlePane");
map.getPane("handlePane").style.zIndex = "720";
map.getPane("popupPane").style.zIndex = "900";

const streetLayer = L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png", {
  subdomains: "abcd",
  maxZoom: 20,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; CARTO'
}).addTo(map);

const streetLabelsLayer = L.tileLayer("https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png", {
  subdomains: "abcd",
  maxZoom: 20,
  pane: "tooltipPane",
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; CARTO'
}).addTo(map);

const satelliteLayer = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  {
    maxZoom: 18,
    attribution: "Tiles &copy; Esri"
  }
);

const satelliteLabelsLayer = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
  {
    maxZoom: 18,
    pane: "tooltipPane",
    attribution: "Labels &copy; Esri"
  }
);

const previewLayer = L.layerGroup([], { pane: "previewPane" }).addTo(map);
const draftLayer = L.layerGroup([], { pane: "draftPane" }).addTo(map);
const jumpLayer = L.layerGroup().addTo(map);
let boundaryFeatures = [];
let hoveredBoundaryKey = null;
let activeBoundaryKey = null;
let boundaryFetchToken = 0;
const boundaryDataCache = new Map();

const popup = L.popup({
  closeButton: false,
  autoPan: true,
  className: "selection-popup-shell",
  offset: [0, -10]
});

const boundaryLayer = L.geoJSON(null, {
  pane: "boundaryPane",
  style: (feature) => boundaryFeatureStyle(feature),
  onEachFeature: (feature, layer) => attachBoundaryFeatureEvents(feature, layer)
}).addTo(map);

const debugState = {
  lastBoundaryError: null,
  lastBoundaryFetchUrl: null,
  lastBoundaryFetchCount: 0,
  lastBoundaryMode: areaMode,
  lastBoundaryDetail: "detail",
  lastBoundaryUsingFallback: false
};

window.__audienceBuilderDebug = {
  map,
  boundaryLayer,
  boundaryFeatures,
  debugState
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(Math.max(0, Math.round(value)));
}

function signedStructureCount(row) {
  const count = row.count || 0;
  return row.mode === "exclude" ? -count : count;
}

function formatSignedStructureCount(row) {
  const count = row.count || 0;
  return `${row.mode === "exclude" ? "- " : ""}${formatNumber(count)}`;
}

function icon(name, size = "small", extraClass = "") {
  const className = `icon-wrap icon-wrap--${size}${extraClass ? ` ${extraClass}` : ""}`;
  return `<span class="${className}" aria-hidden="true"><span class="material-symbols-rounded">${name}</span></span>`;
}

function locationTypeIcon(row) {
  if (row.kind === "radius") return "my_location";
  if (row.kind === "polygon") return "polyline";
  return row.mode === "exclude" ? "remove_circle" : "location_on";
}

function deriveAddressLabel(address, fallbackName = "Selected Area") {
  if (areaMode === "USA") return "United States";
  if (areaMode === "State") return address.state || address.region || address.state_district || fallbackName;
  if (areaMode === "County") return address.county || address.state_district || address.state || fallbackName;
  if (areaMode === "City") {
    return address.city || address.town || address.village || address.municipality || address.hamlet || address.county || fallbackName;
  }
  return address.postcode || address.neighbourhood || address.suburb || fallbackName;
}

function deriveMeta(address) {
  return [
    address.city || address.town || address.village || address.municipality,
    address.county,
    address.state,
    address.country
  ].filter(Boolean).join(", ");
}

function estimateStructures(mode, kind) {
  if (kind === "radius") return 6800;
  if (kind === "polygon") return 9200;
  return {
    USA: 24500000,
    State: 1750000,
    County: 250000,
    City: 92000,
    "ZIP Code": 18600
  }[mode] || 0;
}

function regionPreviewRadius(mode) {
  return {
    USA: 1100000,
    State: 150000,
    County: 65000,
    City: 30000,
    "ZIP Code": 12000
  }[mode] || 40000;
}

function previewStyle(selection) {
  if (selection.mode === "exclude") {
    return { color: "#e04656", fillColor: "#ff5a66", fillOpacity: 0.12, weight: 2.5, dashArray: null };
  }
  if (selection.mode === "include") {
    return { color: "#3378ff", fillColor: "#3378ff", fillOpacity: 0.12, weight: 2.5, dashArray: null };
  }
  return { color: "#6d7788", fillColor: "#9aa6b9", fillOpacity: 0.08, weight: 2.2, dashArray: "6 5" };
}

function boundaryFeatureKey(feature) {
  const props = feature.properties || {};
  return String(props.boundaryKey || props.id || props.name || JSON.stringify(feature.geometry?.coordinates?.[0]?.[0] || ""));
}

function boundaryFeatureName(feature) {
  const props = feature.properties || {};
  return props.displayName || props.NAME || props.BASENAME || props.ZCTA5 || props.GEOID || "Selected Area";
}

function boundaryFeatureMeta(feature) {
  const props = feature.properties || {};
  if (props.boundaryType === "USA") {
    return "United States region";
  }
  if (props.boundaryType === "ZIP Code") {
    return "ZIP Code Tabulation Area";
  }
  if (props.boundaryType === "City") {
    return props.NAMELSAD || "City boundary";
  }
  if (props.boundaryType === "County") {
    return props.NAMELSAD || "County boundary";
  }
  if (props.boundaryType === "State") {
    return props.STUSAB ? `${props.STUSAB}, United States` : "State boundary";
  }
  if (areaMode === "ZIP Code") {
    return [props.city, props.town, props.village, props.county, props.state].filter(Boolean).join(", ");
  }
  if (areaMode === "City") {
    return [props.county, props.state, props.country].filter(Boolean).join(", ");
  }
  if (areaMode === "County") {
    return [props.state, props.country].filter(Boolean).join(", ");
  }
  if (areaMode === "State") {
    return props.country || "United States";
  }
  return [props.country].filter(Boolean).join(", ");
}

function featureSelectionMode(feature) {
  const key = boundaryFeatureKey(feature);
  const rows = [...selected.values()].reverse();
  for (const row of rows) {
    if (row.kind === "region" && row.featureKey === key) return row.mode;
  }
  return null;
}

function boundaryFeatureStyle(feature) {
  const key = boundaryFeatureKey(feature);
  const selectedMode = featureSelectionMode(feature);
  if (selectedMode === "exclude") {
    return { color: "#e04656", fillColor: "#ff5a66", fillOpacity: 0.18, weight: 3.2 };
  }
  if (selectedMode === "include") {
    return { color: "#3378ff", fillColor: "#3378ff", fillOpacity: 0.18, weight: 3.2 };
  }
  if (key === activeBoundaryKey) {
    return { color: "#3378ff", fillColor: "#3378ff", fillOpacity: 0.18, weight: 3.4, dashArray: "6 4" };
  }
  if (key === hoveredBoundaryKey) {
    return { color: "#3378ff", fillColor: "#3378ff", fillOpacity: 0.16, weight: 3.2, dashArray: "6 4" };
  }
  return { color: "#6d7788", fillColor: "#9aa6b9", fillOpacity: 0.08, weight: 2.8, dashArray: "6 5" };
}

function refreshBoundaryFeatureStyles() {
  if (boundaryLayer) boundaryLayer.setStyle((feature) => boundaryFeatureStyle(feature));
}

function syncDebugState() {
  window.__audienceBuilderDebug = {
    map,
    boundaryLayer,
    boundaryFeatures,
    drawMode,
    draftRadius,
    areaMode,
    boundariesVisible,
    debugState
  };
}

function boundaryLayerFromSelection(selection, style, interactive = false) {
  if (selection.geojson) {
    return L.geoJSON(selection.geojson, {
      pane: "previewPane",
      interactive,
      bubblingMouseEvents: false,
      style: {
        color: style.color,
        fillColor: style.fillColor,
        fillOpacity: style.fillOpacity,
        weight: style.weight,
        dashArray: style.dashArray || undefined
      }
    });
  }

  if (selection.boundingbox?.length === 4) {
    const [south, north, west, east] = selection.boundingbox.map(Number);
    return L.rectangle([[south, west], [north, east]], {
      pane: "previewPane",
      interactive,
      bubblingMouseEvents: false,
      color: style.color,
      fillColor: style.fillColor,
      fillOpacity: style.fillOpacity,
      weight: style.weight,
      dashArray: style.dashArray || undefined
    });
  }

  return L.circle(selection.center, {
    pane: "previewPane",
    interactive,
    bubblingMouseEvents: false,
    radius: regionPreviewRadius(selection.areaMode),
    color: style.color,
    fillColor: style.fillColor,
    fillOpacity: style.fillOpacity,
    weight: style.weight,
    dashArray: style.dashArray || undefined
  });
}

async function currentBoundarySources() {
  if (areaMode === "USA") {
    return [
      { provider: "usa-regions", url: STATE_GEOJSON_URL, boundaryType: "USA", allFeatures: true }
    ];
  }
  if (areaMode === "State") {
    return [
      { provider: "geojson", url: STATE_GEOJSON_URL, boundaryType: "State", allFeatures: true }
    ];
  }
  if (areaMode === "County") {
    return [
      { provider: "geojson", url: COUNTY_GEOJSON_URL, boundaryType: "County" }
    ];
  }

  if (areaMode === "City") {
    return [
      { provider: "tigerweb", service: TIGERWEB_SERVICE, layerId: TIGERWEB_LAYERS.incorporatedPlaces, boundaryType: "City" },
      { provider: "tigerweb", service: TIGERWEB_SERVICE, layerId: TIGERWEB_LAYERS.censusDesignatedPlaces, boundaryType: "City" }
    ];
  }

  return [
    { provider: "tigerweb", service: TIGERWEB_SERVICE, layerId: TIGERWEB_LAYERS.zcta, boundaryType: "ZIP Code" }
  ];
}

function tigerWebDetailLevel(source) {
  const detailZoom = DETAILED_BOUNDARY_ZOOM[source.boundaryType] || 0;
  return map.getZoom() >= detailZoom ? "detail" : "overview";
}

function tigerWebResultLimit(source) {
  if (source.boundaryType === "ZIP Code") return tigerWebDetailLevel(source) === "detail" ? "1500" : "180";
  if (source.boundaryType === "City") return tigerWebDetailLevel(source) === "detail" ? "2000" : "300";
  return "2000";
}

function tigerWebGeometryPrecision(source) {
  if (tigerWebDetailLevel(source) === "detail") return "5";
  return source.boundaryType === "ZIP Code" ? "1" : "3";
}

function buildTigerWebSourceUrl(source, format = "geoJSON") {
  const params = new URLSearchParams({
    where: "1=1",
    outFields: "*",
    returnGeometry: "true",
    outSR: "4326",
    resultRecordCount: tigerWebResultLimit(source),
    f: format
  });

  const bounds = map.getBounds();
  const south = bounds.getSouth().toFixed(6);
  const west = bounds.getWest().toFixed(6);
  const north = bounds.getNorth().toFixed(6);
  const east = bounds.getEast().toFixed(6);
  params.set("geometry", `${west},${south},${east},${north}`);
  params.set("geometryType", "esriGeometryEnvelope");
  params.set("inSR", "4326");
  params.set("spatialRel", "esriSpatialRelIntersects");

  if (tigerWebDetailLevel(source) === "overview") {
    params.set("orderByFields", "AREALAND DESC");
  }

  if (format === "geoJSON") {
    params.set("geometryPrecision", tigerWebGeometryPrecision(source));
    params.set("maxAllowableOffset", tigerWebDetailLevel(source) === "detail" ? "0.0001" : source.boundaryType === "ZIP Code" ? "0.1" : "0.05");
  }

  return `${TIGERWEB_BASE}/${source.service}/${source.layerId}/query?${params.toString()}`;
}

function buildBoundarySourceUrl(source) {
  if (source.provider === "tigerweb") {
    return buildTigerWebSourceUrl(source, "geoJSON");
  }
  return source.url;
}

function buildTigerWebJsonpSourceUrl(source) {
  const params = new URLSearchParams({
    where: "1=1",
    outFields: "*",
    returnGeometry: "true",
    outSR: "4326",
    resultRecordCount: tigerWebResultLimit(source),
    f: "json"
  });

  const bounds = map.getBounds();
  const south = bounds.getSouth().toFixed(6);
  const west = bounds.getWest().toFixed(6);
  const north = bounds.getNorth().toFixed(6);
  const east = bounds.getEast().toFixed(6);
  params.set("geometry", `${west},${south},${east},${north}`);
  params.set("geometryType", "esriGeometryEnvelope");
  params.set("inSR", "4326");
  params.set("spatialRel", "esriSpatialRelIntersects");
  if (tigerWebDetailLevel(source) === "overview") {
    params.set("orderByFields", "AREALAND DESC");
  }

  return `${TIGERWEB_BASE}/${source.service}/${source.layerId}/query?${params.toString()}`;
}

function boundarySourceUrlCandidates(url) {
  const candidates = [url];
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "raw.githubusercontent.com") {
      const [, owner, repo, branch, ...pathParts] = parsed.pathname.split("/");
      if (owner && repo && branch && pathParts.length) {
        candidates.push(`https://cdn.jsdelivr.net/gh/${owner}/${repo}@${branch}/${pathParts.join("/")}`);
      }
    }
  } catch {
    return candidates;
  }
  return candidates;
}

async function fetchBoundaryGeojson(url) {
  const urls = boundarySourceUrlCandidates(url);
  let lastError = null;
  for (const candidateUrl of urls) {
    debugState.lastBoundaryFetchUrl = candidateUrl;
    try {
      const response = await fetch(candidateUrl, {
        headers: { Accept: "application/geo+json, application/json" }
      });
      if (!response.ok) {
        lastError = new Error(`Boundary layer fetch failed (${response.status})`);
        continue;
      }
      const geojson = await response.json();
      if (geojson?.error) {
        lastError = new Error(geojson.error.message || "Boundary layer returned an error");
        continue;
      }
      return geojson;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error("Boundary layer fetch failed");
}

function fetchJsonp(url) {
  return new Promise((resolve, reject) => {
    const callbackName = `tigerwebBoundary${Date.now()}${Math.round(Math.random() * 100000)}`;
    const script = document.createElement("script");
    const separator = url.includes("?") ? "&" : "?";
    let settled = false;

    window[callbackName] = (payload) => {
      settled = true;
      cleanup();
      resolve(payload);
    };

    function cleanup() {
      delete window[callbackName];
      script.remove();
    }

    script.onerror = () => {
      if (settled) return;
      settled = true;
      cleanup();
      reject(new Error("Boundary layer JSONP request failed"));
    };

    script.src = `${url}${separator}callback=${callbackName}`;
    document.head.appendChild(script);

    window.setTimeout(() => {
      if (settled) return;
      settled = true;
      cleanup();
      reject(new Error("Boundary layer JSONP request timed out"));
    }, 12000);
  });
}

function esriFeatureToGeojsonFeature(feature) {
  const rings = feature.geometry?.rings;
  if (!Array.isArray(rings) || !rings.length) return null;
  return {
    type: "Feature",
    properties: feature.attributes || {},
    geometry: {
      type: "Polygon",
      coordinates: rings
    }
  };
}

async function fetchTigerWebGeojson(source) {
  const geojsonUrl = buildBoundarySourceUrl(source);
  try {
    return await fetchBoundaryGeojson(geojsonUrl);
  } catch (fetchError) {
    const jsonpUrl = buildTigerWebJsonpSourceUrl(source);
    debugState.lastBoundaryFetchUrl = jsonpUrl;
    const payload = await fetchJsonp(jsonpUrl);
    if (payload?.error) {
      throw new Error(payload.error.message || "TigerWeb boundary request failed");
    }

    return {
      type: "FeatureCollection",
      features: (payload?.features || []).map(esriFeatureToGeojsonFeature).filter(Boolean)
    };
  }
}

function featureIntersectsMapBounds(feature) {
  try {
    const layerBounds = L.geoJSON(feature).getBounds();
    return layerBounds.isValid() && layerBounds.intersects(map.getBounds());
  } catch {
    return false;
  }
}

function normalizeBoundaryFeature(feature, source) {
  const props = feature.properties || {};
  const displayName = props.name || props.NAME || props.NAMELSAD || props.BASENAME || props.city || props.CITY || props.ZCTA5 || props.ZCTA5CE10 || props.ZCTA5CE20 || props.ZCTA5CE || props.ZIP || props.zip || props.GEOID || props.GEOID10 || props.GEOID20 || feature.id || "Selected Area";
  const keyPart = props.GEOID || props.GEOID10 || props.GEOID20 || props.GEOIDFQ || props.ZCTA5 || props.ZCTA5CE10 || props.ZCTA5CE20 || props.ZCTA5CE || props.ZIP || props.zip || props.BASENAME || props.NAME || props.city || displayName;
  feature.properties = {
    ...props,
    displayName,
    boundaryKey: `${source.boundaryType}:${keyPart}`,
    boundaryType: source.boundaryType
  };
  return feature;
}

function buildUsaRegionFeatures(geojson) {
  const stateFeatures = geojson.features || [];
  const alaska = stateFeatures.find((feature) => String(feature.id || feature.properties?.STUSAB || "").toUpperCase() === "AK");
  const hawaii = stateFeatures.find((feature) => String(feature.id || feature.properties?.STUSAB || "").toUpperCase() === "HI");
  const mainlandStates = stateFeatures.filter((feature) => {
    const code = String(feature.id || feature.properties?.STUSAB || "").toUpperCase();
    return code && code !== "AK" && code !== "HI";
  });

  const mainlandFeature = buildUsaRegionFeature("mainland", "Mainland USA", mainlandStates, true);
  const alaskaFeature = alaska ? buildUsaRegionFeature("alaska", "Alaska", [alaska], false) : null;
  const hawaiiFeature = hawaii ? buildUsaRegionFeature("hawaii", "Hawaii", [hawaii], false) : null;

  return [mainlandFeature, alaskaFeature, hawaiiFeature].filter(Boolean);
}

function buildUsaRegionFeature(regionKey, displayName, features, dissolve) {
  if (!features.length) return null;

  let geometry = null;

  if (dissolve && typeof turf !== "undefined") {
    try {
      const dissolved = turf.dissolve(turf.featureCollection(features));
      const dissolvedFeatures = dissolved?.features || [];
      const coordinates = dissolvedFeatures.flatMap((feature) => {
        if (feature.geometry?.type === "Polygon") return [feature.geometry.coordinates];
        if (feature.geometry?.type === "MultiPolygon") return feature.geometry.coordinates;
        return [];
      });
      if (coordinates.length) {
        geometry = {
          type: "MultiPolygon",
          coordinates
        };
      }
    } catch (error) {
      geometry = null;
    }
  }

  if (!geometry) {
    const coordinates = features.flatMap((feature) => {
      if (feature.geometry?.type === "Polygon") return [feature.geometry.coordinates];
      if (feature.geometry?.type === "MultiPolygon") return feature.geometry.coordinates;
      return [];
    });
    geometry = {
      type: "MultiPolygon",
      coordinates
    };
  }

  return {
    type: "Feature",
    properties: {
      displayName,
      boundaryKey: `USA:${regionKey}`,
      boundaryType: "USA",
      regionKey
    },
    geometry
  };
}

function clearBoundaryPreviewForMode(message = null) {
  boundaryLayer.clearLayers();
  boundaryFeatures = [];
  debugState.lastBoundaryMode = areaMode;
  debugState.lastBoundaryFetchCount = 0;
  debugState.lastBoundaryError = message;
  debugState.lastBoundaryDetail = "detail";
  debugState.lastBoundaryUsingFallback = false;
  syncDebugState();
}

function setBoundaryLoading(isLoading, mode = areaMode) {
  if (!boundaryLoading) return;
  boundaryLoading.hidden = !isLoading;
  mapCanvas.classList.toggle("is-loading-boundaries", isLoading);
  if (isLoading) DS.boundaryLoading(boundaryLoading, `Loading ${mode} boundaries…`);
}

async function fetchVisibleBoundaries() {
  if (!boundariesVisible || drawMode) {
    clearBoundaryPreviewForMode(null);
    setBoundaryLoading(false);
    return;
  }

  const token = ++boundaryFetchToken;
  setBoundaryLoading(true, areaMode);
  try {
    const sources = await currentBoundarySources();
    const sourceResults = await Promise.allSettled(
      sources.map(async (source) => {
        const sourceUrl = buildBoundarySourceUrl(source);
        const cacheKey = source.url
          ? `${source.boundaryType}:${source.url}`
          : `${source.provider}:${source.layerId}:${tigerWebDetailLevel(source)}:${map.getBounds().toBBoxString()}`;
        if (boundaryDataCache.has(cacheKey)) {
          debugState.lastBoundaryFetchUrl = `cache:${cacheKey}`;
          return { source, geojson: boundaryDataCache.get(cacheKey) };
        }
        const geojson = source.provider === "tigerweb"
          ? await fetchTigerWebGeojson(source)
          : await fetchBoundaryGeojson(sourceUrl);
        boundaryDataCache.set(cacheKey, geojson);
        return { source, geojson };
      })
    );
    if (token !== boundaryFetchToken) return;
    const responses = sourceResults
      .filter((result) => result.status === "fulfilled")
      .map((result) => result.value);
    const failures = sourceResults.filter((result) => result.status === "rejected");
    if (!responses.length && failures.length) {
      throw failures[0].reason;
    }

    boundaryFeatures = responses
      .flatMap(({ source, geojson }) => {
        const features = source.provider === "usa-regions"
          ? buildUsaRegionFeatures(geojson)
          : (geojson.features || []).map((feature) => normalizeBoundaryFeature(feature, source));
        return source.allFeatures ? features : features.filter(featureIntersectsMapBounds);
      })
      .filter((feature) => feature.geometry && (feature.geometry.type === "Polygon" || feature.geometry.type === "MultiPolygon"));

    boundaryLayer.clearLayers();
    boundaryLayer.addData(boundaryFeatures);
    debugState.lastBoundaryError = null;
    debugState.lastBoundaryMode = areaMode;
    debugState.lastBoundaryFetchCount = boundaryFeatures.length;
    debugState.lastBoundaryDetail = sources.some((source) => source.provider === "tigerweb")
      ? tigerWebDetailLevel(sources.find((source) => source.provider === "tigerweb"))
      : "detail";
    debugState.lastBoundaryUsingFallback = false;
    if (failures.length) {
      console.warn("Some boundary sources failed", failures.map((result) => result.reason));
    }
    syncDebugState();
    refreshBoundaryFeatureStyles();
  } catch (error) {
    if (token !== boundaryFetchToken) return;
    boundaryLayer.clearLayers();
    boundaryFeatures = [];
    debugState.lastBoundaryMode = areaMode;
    debugState.lastBoundaryFetchCount = 0;
    debugState.lastBoundaryError = error instanceof Error ? error.message : String(error);
    debugState.lastBoundaryUsingFallback = false;
    console.error("Boundary fetch failed", {
      areaMode,
      message: debugState.lastBoundaryError,
      url: debugState.lastBoundaryFetchUrl
    });
    syncDebugState();
  } finally {
    if (token === boundaryFetchToken) {
      setBoundaryLoading(false);
    }
  }
}

function boundarySelectionFromFeature(feature, latlng) {
  const center = latlng || L.geoJSON(feature).getBounds().getCenter();
  return {
    kind: "region",
    areaMode,
    name: boundaryFeatureName(feature),
    meta: boundaryFeatureMeta(feature),
    center,
    featureKey: boundaryFeatureKey(feature),
    geojson: feature,
    count: estimateStructures(areaMode, "region"),
    radiusLabel: areaMode,
    zoom: Math.max(map.getZoom(), 8)
  };
}

function attachBoundaryFeatureEvents(feature, layer) {
  layer.options.bubblingMouseEvents = false;
  layer.bindTooltip(boundaryFeatureName(feature), {
    sticky: true,
    direction: "top",
    className: "boundary-hover-label",
    offset: [0, -2]
  });
  layer.on("mouseover", () => {
    hoveredBoundaryKey = boundaryFeatureKey(feature);
    refreshBoundaryFeatureStyles();
    layer.openTooltip();
  });
  layer.on("mouseout", () => {
    hoveredBoundaryKey = null;
    refreshBoundaryFeatureStyles();
    layer.closeTooltip();
  });
  layer.on("click", (event) => {
    if (event.originalEvent) L.DomEvent.stop(event.originalEvent);
    activeBoundaryKey = boundaryFeatureKey(feature);
    currentPopupSelection = boundarySelectionFromFeature(feature, event.latlng);
    refreshBoundaryFeatureStyles();
    openSelectionPopup(currentPopupSelection);
  });
}

function setMapView(lat, lng, zoom) {
  map.flyTo([lat, lng], zoom, { duration: 0.45 });
}

function makeHandleIcon() {
  return L.divIcon({
    className: "radius-handle-icon",
    html: '<span></span>',
    iconSize: [18, 18],
    iconAnchor: [9, 9]
  });
}

function makeCenterMoveIcon() {
  return L.divIcon({
    className: "radius-center-icon",
    html: '<span></span>',
    iconSize: [22, 22],
    iconAnchor: [11, 11]
  });
}

function metersToLatLng(center, metersEast) {
  const dLng = metersEast / (111320 * Math.cos(center.lat * Math.PI / 180));
  return L.latLng(center.lat, center.lng + dLng);
}

function syncBoundaryVisibility() {
  const showAreaSelector = !drawMode;
  if (!showAreaSelector) areaMenu.hidden = true;
  DS.areaSelect(areaSelect, {
    boundaryLabel: boundariesVisible ? "Hide Boundary" : "Show Boundary",
    areaLabel: areaMode,
    showArea: showAreaSelector,
  }, {
    toggleBoundary: () => {
      if (drawMode) return;
      boundariesVisible = !boundariesVisible;
      syncBoundaryVisibility();
      if (!boundariesVisible) {
        activeBoundaryKey = null;
        hoveredBoundaryKey = null;
        boundaryLayer.clearLayers();
      }
    },
    openArea: () => { areaMenu.hidden = !areaMenu.hidden; if (!areaMenu.hidden) renderAreaMenu(); },
  });
  if (!boundariesVisible) {
    activeBoundaryKey = null;
    hoveredBoundaryKey = null;
    boundaryLayer.clearLayers();
  }
  renderSelections();
  fetchVisibleBoundaries();
}

function syncDrawModeBar() {
  const active = Boolean(drawMode);
  const allowExclude = hasIncludedSelection();
  if (!allowExclude && drawSelectionMode === "exclude") {
    drawSelectionMode = "include";
  }
  drawActions.hidden = active;
  drawModeActions.hidden = !active;

  if (!active) return;

  // MapModeBanner picks its own title, message and finish label from `mode` —
  // those strings live in the design system now, not here.
  DS.modeBanner(drawModeActions, {
    mode: drawMode,
    selectionMode: drawSelectionMode,
    canFinish: drawMode === "radius" ? Boolean(draftRadius) : draftPolygonPoints.length >= 3,
  }, {
    cancel: cancelCurrentDraw,
    finish: finishCurrentDraw,
    selectionMode: (mode) => {
      if (mode === "exclude" && !hasIncludedSelection()) return;
      drawSelectionMode = mode;
      if (drawMode === "radius") renderDraftRadius();
      if (drawMode === "polygon") renderDraftPolygon();
      syncDrawModeBar();
    },
  });
}

function clearDraftLayers() {
  draftLayer.clearLayers();
}

function renderDraftRadius() {
  clearDraftLayers();
  if (drawMode !== "radius" || !draftRadius) {
    syncDrawModeBar();
    syncDebugState();
    return;
  }

  function moveDraftRadiusCenter(latlng) {
    draftRadius.center = latlng;
    draftRadius.circle.setLatLng(latlng);
    draftRadius.centerMarker.setLatLng(latlng);
    draftRadius.handleMarker.setLatLng(metersToLatLng(latlng, draftRadius.radiusMeters));
  }

  const style = previewStyle({ mode: drawSelectionMode });
  const circle = L.circle(draftRadius.center, {
    pane: "draftPane",
    interactive: true,
    bubblingMouseEvents: false,
    radius: draftRadius.radiusMeters,
    color: style.color,
    fillColor: style.fillColor,
    fillOpacity: 0.18,
    weight: 2
  }).addTo(draftLayer);

  const handleMarker = L.marker(metersToLatLng(draftRadius.center, draftRadius.radiusMeters), {
    draggable: true,
    icon: makeHandleIcon(),
    keyboard: false,
    pane: "handlePane"
  }).addTo(draftLayer);

  const centerMarker = L.marker(draftRadius.center, {
    draggable: true,
    icon: makeCenterMoveIcon(),
    keyboard: false,
    pane: "handlePane"
  }).addTo(draftLayer);

  handleMarker.on("drag", (event) => {
    draftRadius.radiusMeters = Math.max(
      MIN_RADIUS_METERS,
    draftRadius.center.distanceTo(event.target.getLatLng())
    );
    draftRadius.circle.setRadius(draftRadius.radiusMeters);
  });

  let radiusMoveStart = null;
  circle.on("mousedown", (event) => {
    if (event.originalEvent) L.DomEvent.stop(event.originalEvent);
    radiusMoveStart = {
      pointer: event.latlng,
      center: draftRadius.center
    };
    map.dragging.disable();
    map.on("mousemove", handleRadiusMove);
    map.once("mouseup", finishRadiusMove);
  });

  centerMarker.on("drag", (event) => {
    moveDraftRadiusCenter(event.target.getLatLng());
  });

  centerMarker.on("dragstart", () => {
    map.dragging.disable();
  });

  centerMarker.on("dragend", () => {
    map.dragging.enable();
    syncDrawModeBar();
    syncDebugState();
  });

  function handleRadiusMove(event) {
    if (!radiusMoveStart) return;
    const nextCenter = L.latLng(
      radiusMoveStart.center.lat + (event.latlng.lat - radiusMoveStart.pointer.lat),
      radiusMoveStart.center.lng + (event.latlng.lng - radiusMoveStart.pointer.lng)
    );
    moveDraftRadiusCenter(nextCenter);
  }

  function finishRadiusMove() {
    radiusMoveStart = null;
    map.off("mousemove", handleRadiusMove);
    map.dragging.enable();
    syncDrawModeBar();
  }

  handleMarker.on("dragstart", () => {
    map.dragging.disable();
  });

  handleMarker.on("dragend", () => {
    map.dragging.enable();
    syncDrawModeBar();
  });

  draftRadius.circle = circle;
  draftRadius.centerMarker = centerMarker;
  draftRadius.handleMarker = handleMarker;
  syncDrawModeBar();
  syncDebugState();
}

function renderDraftPolygon() {
  clearDraftLayers();
  if (drawMode !== "polygon" || !draftPolygonPoints.length) {
    syncDrawModeBar();
    return;
  }

  const style = previewStyle({ mode: drawSelectionMode });
  const shape = draftPolygonPoints.length > 2
    ? L.polygon(draftPolygonPoints, {
        pane: "draftPane",
        color: style.color,
        fillColor: style.fillColor,
        fillOpacity: 0.18,
        weight: 2
      })
    : L.polyline(draftPolygonPoints, {
        pane: "draftPane",
        color: style.color,
        weight: 2
      });

  shape.addTo(draftLayer);

  draftPolygonPoints.forEach((latlng) => {
    L.circleMarker(latlng, {
      pane: "draftPane",
      radius: 5,
      color: style.color,
      fillColor: "#ffffff",
      fillOpacity: 1,
      weight: 2,
      interactive: false
    }).addTo(draftLayer);
  });

  syncDrawModeBar();
}

function renderSelections() {
  previewLayer.clearLayers();
  const selectedInteractive = !boundariesVisible;
  map.getPane("previewPane").style.pointerEvents = selectedInteractive ? "auto" : "none";

  selected.forEach((selection) => {
    if (selection.kind === "region") {
      const style = previewStyle(selection);
      const boundary = boundaryLayerFromSelection(selection, style, selectedInteractive);
      if (selectedInteractive) {
        boundary.bindTooltip(selection.name, { direction: "top" });
        boundary.on("click", (event) => {
          if (event.originalEvent) L.DomEvent.stop(event.originalEvent);
          openSelectedSelectionPopup(selection, event.latlng);
        });
      }
      boundary.addTo(previewLayer);
      return;
    }

    if (selection.kind === "radius") {
      const style = previewStyle(selection);
      const circle = L.circle(selection.center, {
        pane: "previewPane",
        interactive: selectedInteractive,
        bubblingMouseEvents: false,
        radius: selection.radiusMeters,
        color: style.color,
        fillColor: style.fillColor,
        fillOpacity: 0.18,
        weight: 2
      });
      if (selectedInteractive) {
        circle.bindTooltip(selection.name, { direction: "top" });
        circle.on("click", (event) => {
          if (event.originalEvent) L.DomEvent.stop(event.originalEvent);
          openSelectedSelectionPopup(selection, event.latlng);
        });
      }
      circle.addTo(previewLayer);
      return;
    }

    if (selection.kind === "polygon") {
      const style = previewStyle(selection);
      const polygon = L.polygon(selection.points, {
        pane: "previewPane",
        interactive: selectedInteractive,
        bubblingMouseEvents: false,
        color: style.color,
        fillColor: style.fillColor,
        fillOpacity: 0.18,
        weight: 2
      });
      if (selectedInteractive) {
        polygon.bindTooltip(selection.name, { direction: "top" });
        polygon.on("click", (event) => {
          if (event.originalEvent) L.DomEvent.stop(event.originalEvent);
          openSelectedSelectionPopup(selection, event.latlng);
        });
      }
      polygon.addTo(previewLayer);
    }
  });
}

function centerSelection(row) {
  if (row.kind === "polygon") {
    const bounds = L.latLngBounds(row.points);
    map.fitBounds(bounds.pad(0.4));
    return;
  }
  setMapView(row.center.lat, row.center.lng, row.zoom || 11);
}

function deleteSelection(rowId) {
  selected.delete(rowId);
  savedMapDirty = Boolean(activeSavedMapId);
  renderSelected();
  renderSelections();
  refreshBoundaryFeatureStyles();
}

// The shape LocationRow wants, from the shape this app keeps.
function rowType(row) {
  if (row.kind === "radius") return "radius";
  if (row.kind === "polygon") return "polygon";
  return "location";
}

function renderSelected() {
  const rows = [...selected.values()];
  emptyState.hidden = rows.length > 0;
  selectedState.hidden = rows.length === 0;

  if (!rows.length) DS.emptyState(emptyState);

  DS.summary(selectedSummary, {
    total: rows.length,
    included: rows.filter((row) => row.mode !== "exclude").length,
    excluded: rows.filter((row) => row.mode === "exclude").length,
  }, {
    clear: () => { [...selected.keys()].forEach(deleteSelection); },
    expand: openLocationsModal,
  });

  DS.rows(selectedList, rows.map((row) => ({
    id: row.id,
    name: row.name,
    type: rowType(row),
    meta: row.radiusLabel || row.areaMode || "",
    structures: formatSignedStructureCount(row),
    mode: row.mode,
    checked: row.checked,
  })), {
    check: (id, next) => {
      const row = selected.get(id);
      if (!row) return;
      row.checked = next;
      selected.set(id, row);
      renderSelected();
    },
    center: (id) => { const row = selected.get(id); if (row) centerSelection(row); },
    remove: deleteSelection,
  });

  const checkedCount = rows.filter((row) => row.checked).length;
  bulkBar.hidden = checkedCount === 0;
  document.getElementById("bulkCount").textContent = checkedCount;
}

function closeLocationsModal() {
  document.querySelector(".locations-modal-backdrop")?.remove();
}

function buildLocationModalRow(row) {
  return `
    <div class="location-row location-row--modal${row.mode === "exclude" ? " is-warning" : ""}" data-row-id="${escapeHtml(row.id)}">
      <input type="checkbox" ${row.checked ? "checked" : ""} aria-label="Select ${escapeHtml(row.name)}" />
      <div class="location-name">${icon(locationTypeIcon(row), "small", "location-icon")}<span class="location-label">${escapeHtml(row.name)}</span></div>
      <span class="miles">${escapeHtml(row.radiusLabel || row.areaMode || "")}</span>
      <span class="home-count">${icon("home", "small")} ${formatSignedStructureCount(row)}</span>
      <div class="row-actions"><button type="button" data-action="center" aria-label="Center ${escapeHtml(row.name)}">${icon("my_location", "small")}</button><button type="button" data-action="delete" aria-label="Delete ${escapeHtml(row.name)}">${icon("delete", "small")}</button></div>
    </div>
  `;
}

function openLocationsModal() {
  const rows = [...selected.values()];
  let backdrop = document.querySelector(".locations-modal-backdrop");
  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.className = "locations-modal-backdrop";
    document.body.append(backdrop);
  }

  const structures = rows.reduce((sum, row) => sum + signedStructureCount(row), 0);
  backdrop.innerHTML = `
    <section class="bulk-modal locations-modal" role="dialog" aria-modal="true" aria-label="Selected locations">
      <header class="bulk-modal__header">
        <h2>Selected Locations</h2>
        <button class="bulk-modal__close" type="button" aria-label="Close">${icon("close", "small")}</button>
      </header>
      <div class="bulk-modal__body locations-modal__body">
        <div class="locations-modal-summary">
          <span><strong>${formatNumber(rows.length)}</strong> Location(s)</span>
          <span>${icon("home", "small")} <strong>${formatNumber(structures)}</strong> Included</span>
        </div>
        <div class="locations-modal-list">
          ${rows.length ? rows.map(buildLocationModalRow).join("") : `<div class="locations-modal-empty">No locations selected</div>`}
        </div>
      </div>
    </section>
  `;

  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) closeLocationsModal();
  });
  backdrop.querySelector(".bulk-modal__close").addEventListener("click", closeLocationsModal);
  backdrop.querySelectorAll(".location-row--modal").forEach((item) => {
    const row = selected.get(item.dataset.rowId);
    if (!row) return;
    item.querySelector("input")?.addEventListener("change", (event) => {
      row.checked = event.target.checked;
      selected.set(row.id, row);
      renderSelected();
      openLocationsModal();
    });
    item.querySelector('[data-action="center"]')?.addEventListener("click", () => centerSelection(row));
    item.querySelector('[data-action="delete"]')?.addEventListener("click", () => {
      deleteSelection(row.id);
      if (selected.size) openLocationsModal();
      else closeLocationsModal();
    });
  });
}

function createSelectionId(seed) {
  return `${seed}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function hasIncludedSelection() {
  return [...selected.values()].some((row) => row.mode === "include");
}

function replaceExistingRegionSelection(selection) {
  if (selection.kind !== "region" || !selection.featureKey) return;
  for (const [id, row] of selected.entries()) {
    if (row.kind === "region" && row.featureKey === selection.featureKey) {
      selected.delete(id);
    }
  }
}

function addSelection(selection) {
  replaceExistingRegionSelection(selection);
  selected.set(selection.id, selection);
  savedMapDirty = Boolean(activeSavedMapId);
  renderSelected();
  renderSelections();
  refreshBoundaryFeatureStyles();
  map.closePopup();
}

function closeSelectionPopup() {
  currentPopupSelection = null;
  map.closePopup();
}

// BubbleBox. The map's area glyphs come from the component's own `type` enum,
// so a drawn radius and a clicked boundary can't disagree about what they are.
function buildPopupContent(selection) {
  const typeLabel = selection.areaMode === "ZIP Code" ? "ZIP Code" : selection.areaMode;
  const kind = selection.kind === "radius" ? "radius" : selection.kind === "polygon" ? "polygon" : "location";
  const existing = selection.existingSelectionId && selected.has(selection.existingSelectionId);

  return DS.bubbleBox({
    id: selection.existingSelectionId || selection.featureKey || selection.name,
    type: kind,
    typeLabel: kind === "location" ? typeLabel : undefined,
    typeIcon: kind === "location" ? "map" : undefined,
    address: selection.name,
    meta: selection.meta || "United States",
    structures: formatNumber(selection.count || 0),
    selected: selection.existingSelectionId ? selection.mode : null,
    excludeDisabled: !hasIncludedSelection(),
    removable: Boolean(existing),
  }, {
    include: () => setPopupSelectionMode("include"),
    exclude: () => { if (hasIncludedSelection()) setPopupSelectionMode("exclude"); },
    remove: () => {
      if (!existing) return;
      deleteSelection(selection.existingSelectionId);
      closeSelectionPopup();
    },
  });
}

function latLngToTurfPoint(latlng) {
  if (typeof turf === "undefined" || !turf.point) return null;
  return turf.point([latlng.lng, latlng.lat]);
}

function selectedRegionContainsLatLng(selection, latlng) {
  if (!selection.geojson || typeof turf === "undefined" || !turf.booleanPointInPolygon) return false;
  const point = latLngToTurfPoint(latlng);
  if (!point) return false;
  try {
    return turf.booleanPointInPolygon(point, selection.geojson);
  } catch (error) {
    return false;
  }
}

function selectedPolygonContainsLatLng(selection, latlng) {
  if (!selection.points?.length || typeof turf === "undefined" || !turf.booleanPointInPolygon || !turf.polygon) return false;
  const coordinates = selection.points.map((point) => [point.lng, point.lat]);
  const first = coordinates[0];
  const last = coordinates[coordinates.length - 1];
  if (!first || !last) return false;
  if (first[0] !== last[0] || first[1] !== last[1]) coordinates.push(first);
  try {
    return turf.booleanPointInPolygon(latLngToTurfPoint(latlng), turf.polygon([coordinates]));
  } catch (error) {
    return false;
  }
}

function selectedContainsLatLng(selection, latlng) {
  if (selection.kind === "region") {
    if (selectedRegionContainsLatLng(selection, latlng)) return true;
    if (selection.boundingbox?.length === 4) {
      const [south, north, west, east] = selection.boundingbox.map(Number);
      return L.latLngBounds([[south, west], [north, east]]).contains(latlng);
    }
    return false;
  }

  if (selection.kind === "radius") {
    return selection.center && selection.radiusMeters && selection.center.distanceTo(latlng) <= selection.radiusMeters;
  }

  if (selection.kind === "polygon") {
    return selectedPolygonContainsLatLng(selection, latlng);
  }

  return false;
}

function findSelectedSelectionAtLatLng(latlng) {
  const rows = [...selected.values()].reverse();
  return rows.find((selection) => selectedContainsLatLng(selection, latlng)) || null;
}

function openSelectedSelectionPopup(selection, latlng) {
  openSelectionPopup({
    ...selection,
    center: latlng || selection.center,
    zoom: selection.zoom || Math.max(map.getZoom(), 8),
    existingSelectionId: selection.id
  });
}

function setPopupSelectionMode(mode) {
  if (!currentPopupSelection) return;

  if (currentPopupSelection.existingSelectionId && selected.has(currentPopupSelection.existingSelectionId)) {
    const original = selected.get(currentPopupSelection.existingSelectionId);
    const updated = {
      ...original,
      mode,
      checked: false
    };
    selected.set(updated.id, updated);
    savedMapDirty = Boolean(activeSavedMapId);
    currentPopupSelection = {
      ...updated,
      center: currentPopupSelection.center,
      existingSelectionId: updated.id
    };
    renderSelected();
    renderSelections();
    refreshBoundaryFeatureStyles();
    map.closePopup();
    return;
  }

  addSelection({
    ...currentPopupSelection,
    id: createSelectionId(mode),
    mode,
    checked: false
  });
}

function openSelectionPopup(selection) {
  currentPopupSelection = selection;
  activeBoundaryKey = selection.featureKey || null;
  refreshBoundaryFeatureStyles();
  // setContent takes the element BubbleBox is mounted into, so the component
  // wires its own clicks — no re-querying the DOM a tick later.
  popup
    .setLatLng(selection.center)
    .setContent(buildPopupContent(selection))
    .openOn(map);
}

async function reverseLookup(latlng) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&zoom=18&addressdetails=1&lat=${latlng.lat}&lon=${latlng.lng}`,
    {
      headers: {
        Accept: "application/json"
      }
    }
  );

  if (!response.ok) throw new Error("Reverse geocoding failed");
  return response.json();
}

async function handleMapSelection(latlng) {
  if (boundariesVisible && !drawMode) return;
  try {
    const data = await reverseLookup(latlng);
    const address = data.address || {};
    openSelectionPopup({
      kind: "region",
      areaMode,
      name: deriveAddressLabel(address, data.display_name || "Selected Area"),
      meta: deriveMeta(address) || data.display_name || "United States",
      center: latlng,
      count: estimateStructures(areaMode, "region"),
      radiusLabel: areaMode,
      zoom: Math.max(map.getZoom(), 8)
    });
  } catch (error) {
    openSelectionPopup({
      kind: "region",
      areaMode,
      name: "Selected Area",
      meta: `${latlng.lat.toFixed(4)}, ${latlng.lng.toFixed(4)}`,
      center: latlng,
      count: estimateStructures(areaMode, "region"),
      radiusLabel: areaMode,
      zoom: Math.max(map.getZoom(), 8)
    });
  }
}

async function searchPlaces(query) {
  const localResults = popularSuggestions.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=8&countrycodes=us&addressdetails=1&q=${encodeURIComponent(query)}`,
      {
        headers: {
          Accept: "application/json"
        }
      }
    );

    if (!response.ok) throw new Error("Search failed");
    const results = await response.json();
    return results.map((item, index) => ({
      id: item.place_id || `remote-${index}`,
      name: item.display_name,
      type: item.type || item.addresstype || "Place",
      lat: Number(item.lat),
      lng: Number(item.lon),
      zoom: item.type === "administrative" ? 7 : 12
    }));
  } catch (error) {
    return localResults;
  }
}

function renderSearchField() {
  DS.search(searchField, searchQuery, {
    change: (value) => {
      searchQuery = value;
      renderSearchField();
      renderSearchMenu();
      if (!value) jumpLayer.clearLayers();
    },
    focus: renderSearchMenu,
  });
}

function renderSearchMenuItems(items) {
  DS.searchMenu(searchMenu, items, {
    pick: (item) => {
      searchQuery = item.name;
      renderSearchField();
      searchMenu.hidden = true;
      jumpLayer.clearLayers();
      L.circleMarker([item.lat, item.lng], {
        radius: 7,
        color: getComputedStyle(document.documentElement).getPropertyValue("--info-bg-default").trim(),
        fillColor: getComputedStyle(document.documentElement).getPropertyValue("--info-bg-default").trim(),
        fillOpacity: 1,
        weight: 0
      }).addTo(jumpLayer);
      setMapView(item.lat, item.lng, item.zoom || 11);
    },
  });
  searchMenu.hidden = false;
}

async function renderSearchMenu() {
  const query = searchQuery.trim();

  if (!query) {
    renderSearchMenuItems(popularSuggestions);
    return;
  }

  const requestId = ++searchRequestId;
  const items = await searchPlaces(query);
  if (requestId !== searchRequestId) return;
  renderSearchMenuItems(items);
}

function setDrawMode(mode) {
  map.closePopup();
  activeBoundaryKey = null;
  hoveredBoundaryKey = null;
  refreshBoundaryFeatureStyles();
  if (drawMode === mode) {
    drawMode = null;
  } else {
    drawMode = mode;
  }

  if (!drawMode) {
    draftRadius = null;
    draftPolygonPoints = [];
    clearDraftLayers();
    map.closePopup();
    drawSelectionMode = "include";
  }

  syncBoundaryVisibility();
  syncDrawModeBar();

  if (drawMode === "radius") {
    renderDraftRadius();
  }

  if (drawMode === "polygon") {
    renderDraftPolygon();
  }
}

function finishCurrentDraw() {
  if (drawSelectionMode === "exclude" && !hasIncludedSelection()) {
    drawSelectionMode = "include";
    syncDrawModeBar();
    if (drawMode === "radius") renderDraftRadius();
    if (drawMode === "polygon") renderDraftPolygon();
    return;
  }

  if (drawMode === "radius" && draftRadius) {
    addSelection({
      id: createSelectionId("radius"),
      kind: "radius",
      mode: drawSelectionMode,
      name: `Radius around ${draftRadius.center.lat.toFixed(4)}, ${draftRadius.center.lng.toFixed(4)}`,
      areaMode: "Radius",
      center: draftRadius.center,
      radiusMeters: draftRadius.radiusMeters,
      radiusLabel: `${Math.round(draftRadius.radiusMeters / 1609.34)} mi`,
      count: estimateStructures("State", "radius"),
      checked: false,
      zoom: Math.max(map.getZoom(), 10)
    });
    setDrawMode("radius");
    return;
  }

  if (drawMode === "polygon" && draftPolygonPoints.length >= 3) {
    addSelection({
      id: createSelectionId("polygon"),
      kind: "polygon",
      mode: drawSelectionMode,
      name: `Polygon area (${draftPolygonPoints.length} points)`,
      areaMode: "Polygon",
      points: [...draftPolygonPoints],
      center: draftPolygonPoints[0],
      radiusLabel: `${draftPolygonPoints.length} pts`,
      count: estimateStructures("City", "polygon"),
      checked: false,
      zoom: Math.max(map.getZoom(), 10)
    });
    setDrawMode("polygon");
  }
}

function cancelCurrentDraw() {
  draftRadius = null;
  draftPolygonPoints = [];
  clearDraftLayers();
  drawMode = null;
  syncBoundaryVisibility();
  syncDrawModeBar();
}

function resetBulkUploadState() {
  bulkUploadState.step = "upload";
  bulkUploadState.files = [];
  bulkUploadState.loadingFileId = null;
  bulkUploadState.rows = [];
  bulkUploadState.selectedRows = new Set();
  bulkUploadState.adding = false;
  bulkUploadState.confirmingDiscard = false;
}

function openBulkCsvModal() {
  resetBulkUploadState();
  renderBulkCsvModal();
}

function closeBulkCsvModal() {
  document.querySelector(".bulk-modal-backdrop")?.remove();
}

function hasBulkDraftWork() {
  return bulkUploadState.files.length > 0 || bulkUploadState.rows.length > 0 || Boolean(bulkUploadState.loadingFileId);
}

function requestBulkModalClose() {
  if (hasBulkDraftWork()) {
    showBulkDiscardWarning();
    return;
  }
  closeBulkCsvModal();
}

function showBulkDiscardWarning() {
  bulkUploadState.confirmingDiscard = true;
  let backdrop = document.querySelector(".bulk-modal-backdrop");
  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.className = "bulk-modal-backdrop";
    document.body.append(backdrop);
  }
  backdrop.innerHTML = `
    <section class="bulk-modal bulk-discard" role="alertdialog" aria-modal="true" aria-label="Discard uploaded CSVs">
      <header class="bulk-modal__header">
        <h2>Discard Uploaded Files?</h2>
        <button class="bulk-modal__close" type="button" aria-label="Close">${icon("close", "small")}</button>
      </header>
      <div class="bulk-modal__body">
        <p class="bulk-modal__intro">Everything you uploaded in this modal will be lost if you leave now.</p>
      </div>
      <footer class="bulk-modal__footer">
        <span class="bulk-modal__footer-spacer"></span>
        <button class="bulk-btn bulk-btn--ghost" type="button" data-action="keep-upload">Cancel</button>
        <button class="bulk-btn bulk-btn--primary" type="button" data-action="discard-upload">Continue</button>
      </footer>
    </section>
  `;
  backdrop.querySelector(".bulk-modal__close").addEventListener("click", () => {
    bulkUploadState.confirmingDiscard = false;
    renderBulkCsvModal();
  });
  backdrop.querySelector('[data-action="keep-upload"]').addEventListener("click", () => {
    bulkUploadState.confirmingDiscard = false;
    renderBulkCsvModal();
  });
  backdrop.querySelector('[data-action="discard-upload"]').addEventListener("click", () => {
    closeBulkCsvModal();
    resetBulkUploadState();
  });
}

function getNextBulkFile() {
  return BULK_UPLOAD_FILES.find((file) => !bulkUploadState.files.some((entry) => entry.id === file.id));
}

function buildBulkReviewRows() {
  bulkUploadState.rows = bulkUploadState.files.flatMap((file) =>
    file.rows.map(([zip, mode], index) => ({
      id: `${file.id}-${zip}`,
      zip,
      mode,
      stateCode: file.stateCode,
      sourceFileId: file.id,
      sourceName: file.name,
      sourceLabel: file.label,
      error: BULK_REVIEW_ERRORS[zip] || "",
      selected: index < 2 && file.id === bulkUploadState.files[0]?.id
    }))
  );
  bulkUploadState.selectedRows = new Set(bulkUploadState.rows.filter((row) => row.selected).map((row) => row.id));
}

function renderBulkCsvModal() {
  let backdrop = document.querySelector(".bulk-modal-backdrop");
  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.className = "bulk-modal-backdrop";
    document.body.append(backdrop);
  }

  const isReview = bulkUploadState.step === "review";
  backdrop.innerHTML = `
    <section class="bulk-modal${isReview ? " bulk-modal--review" : ""}" role="dialog" aria-modal="true" aria-label="${isReview ? "Review Uploaded Zip Codes" : "Upload a File"}">
      <header class="bulk-modal__header">
        <h2>Upload a File</h2>
        <button class="bulk-modal__close" type="button" aria-label="Close">${icon("close", "small")}</button>
      </header>
      ${isReview ? buildBulkReviewHtml() : buildBulkUploadHtml()}
    </section>
  `;

  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) requestBulkModalClose();
  });
  backdrop.querySelector(".bulk-modal__close").addEventListener("click", requestBulkModalClose);

  if (isReview) {
    wireBulkReviewModal(backdrop);
  } else {
    wireBulkUploadModal(backdrop);
  }
}

function buildBulkUploadHtml() {
  const nextFile = getNextBulkFile();
  const fileRows = bulkUploadState.files.map((file) => `
    <div class="bulk-file-row is-ready" data-file-id="${escapeHtml(file.id)}">
      ${icon("draft", "small")}
      <span>${escapeHtml(file.name)}</span>
      <button class="bulk-file-remove icon-button-plain" type="button" aria-label="Remove ${escapeHtml(file.name)}">${icon("delete", "small")}</button>
    </div>
  `).join("");
  const loadingRow = bulkUploadState.loadingFileId ? `
    <div class="bulk-file-row is-loading">
      <span class="bulk-file-spinner" aria-hidden="true"></span>
      <span>Uploading your file...</span>
      ${icon("more_horiz", "small")}
    </div>
  ` : "";
  const completeRow = !nextFile && !bulkUploadState.loadingFileId ? `
    <div class="bulk-file-row is-ready">
      ${icon("check_circle", "small")}
      <span>4 CSV files ready for review</span>
      ${icon("lock", "small")}
    </div>
  ` : "";
  return `
    <div class="bulk-modal__body">
      <p class="bulk-modal__intro">Upload a CSV of ZIP codes file.</p>
      <button class="bulk-dropzone" type="button" ${!nextFile || bulkUploadState.adding ? "disabled" : ""}>
        <span class="bulk-dropzone__inner">
          <span class="bulk-upload-icon">${icon("upload", "small")}</span>
          <strong>Drag and drop or select document to upload</strong>
          <span>${nextFile ? `Upload a CSV of ZIP codes file for ${escapeHtml(nextFile.label)}.` : "Prototype limit reached."}</span>
          <span class="bulk-dropzone__button">${nextFile ? "Click to add" : "All Files Added"}</span>
        </span>
      </button>
      <div class="bulk-file-list">${loadingRow}${fileRows}${completeRow}</div>
    </div>
    <footer class="bulk-modal__footer">
      <a class="bulk-btn bulk-btn--ghost" href="data/miami_bulk_locations.csv" download>Download Template</a>
      <span class="bulk-modal__footer-spacer"></span>
      <button class="bulk-btn bulk-btn--ghost" type="button" data-action="cancel">Cancel</button>
      <button class="bulk-btn bulk-btn--primary" type="button" data-action="continue" ${bulkUploadState.files.length === 0 || bulkUploadState.adding ? "disabled" : ""}>Continue</button>
    </footer>
  `;
}

function buildBulkReviewHtml() {
  const errorCount = bulkUploadState.rows.filter((row) => row.error).length;
  const validCount = bulkUploadState.rows.length - errorCount;
  const selectedCount = bulkUploadState.selectedRows.size;
  const banner = errorCount ? `
    <div class="bulk-error-banner">
      <div class="bulk-error-content">
        ${icon("error", "large", "bulk-error-icon")}
        <span><strong>Some ZIP codes couldn't be processed</strong>${errorCount} ZIP codes will not be added. Review the highlighted rows and upload the rest into the automation map.</span>
      </div>
      <button class="bulk-error-remove" type="button" data-action="remove-errors">Remove all error</button>
    </div>
  ` : "";
  const rows = bulkUploadState.rows.map((row) => `
    <tr class="${bulkUploadState.selectedRows.has(row.id) ? "is-selected" : ""}${row.error ? " is-error" : ""}" data-row-id="${escapeHtml(row.id)}">
      <td><input type="checkbox" ${bulkUploadState.selectedRows.has(row.id) ? "checked" : ""} aria-label="Select ${escapeHtml(row.zip)}" /></td>
      <td>${escapeHtml(row.zip)}</td>
      <td>${escapeHtml(row.mode === "exclude" ? "Exclude" : "Include")}</td>
      <td><span class="bulk-row-error">${escapeHtml(row.error || row.sourceLabel)}</span></td>
      <td><span class="bulk-row-actions"><button type="button" data-action="edit" aria-label="Edit ${escapeHtml(row.zip)}">${icon("edit", "small")}</button><button type="button" data-action="delete" aria-label="Delete ${escapeHtml(row.zip)}">${icon("delete", "small")}</button></span></td>
    </tr>
  `).join("");
  return `
    <div class="bulk-modal__body">
      ${banner}
      <div class="bulk-review-tools">
        <strong>Review Uploaded Zip Codes</strong>
        <span>${formatNumber(validCount)} valid</span>
        <button class="bulk-link" type="button" data-action="delete-selected" ${selectedCount ? "" : "disabled"}>${icon("delete", "small")} Delete Selected</button>
        <button class="bulk-link" type="button" data-action="delete-all">${icon("delete", "small")} Delete All</button>
      </div>
      <div class="bulk-table">
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" aria-label="Select all rows" ${selectedCount === bulkUploadState.rows.length ? "checked" : ""} /></th>
              <th>Zip Code</th>
              <th>Area Type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>
    <footer class="bulk-modal__footer">
      <span class="bulk-modal__footer-spacer"></span>
      <button class="bulk-btn bulk-btn--ghost" type="button" data-action="cancel">Cancel</button>
      <button class="bulk-btn bulk-btn--primary" type="button" data-action="upload" ${validCount ? "" : "disabled"}>Upload</button>
    </footer>
  `;
}

function wireBulkUploadModal(backdrop) {
  const dropzone = backdrop.querySelector(".bulk-dropzone");
  dropzone?.addEventListener("click", () => simulateBulkFileAdd());
  backdrop.querySelectorAll(".bulk-file-remove").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const fileId = event.currentTarget.closest(".bulk-file-row")?.dataset.fileId;
      if (!fileId) return;
      bulkUploadState.files = bulkUploadState.files.filter((file) => file.id !== fileId);
      renderBulkCsvModal();
    });
  });
  backdrop.querySelector('[data-action="cancel"]')?.addEventListener("click", requestBulkModalClose);
  backdrop.querySelector('[data-action="continue"]')?.addEventListener("click", () => {
    buildBulkReviewRows();
    bulkUploadState.step = "review";
    renderBulkCsvModal();
  });
}

function wireBulkReviewModal(backdrop) {
  backdrop.querySelector('[data-action="cancel"]')?.addEventListener("click", requestBulkModalClose);
  backdrop.querySelector('[data-action="upload"]')?.addEventListener("click", uploadBulkZipRows);
  backdrop.querySelector('[data-action="remove-errors"]')?.addEventListener("click", () => {
    const errorIds = new Set(bulkUploadState.rows.filter((row) => row.error).map((row) => row.id));
    bulkUploadState.rows = bulkUploadState.rows.filter((row) => !row.error);
    bulkUploadState.selectedRows = new Set([...bulkUploadState.selectedRows].filter((id) => !errorIds.has(id)));
    renderBulkCsvModal();
  });
  backdrop.querySelector('[data-action="delete-selected"]')?.addEventListener("click", () => {
    bulkUploadState.rows = bulkUploadState.rows.filter((row) => !bulkUploadState.selectedRows.has(row.id));
    bulkUploadState.selectedRows = new Set();
    renderBulkCsvModal();
  });
  backdrop.querySelector('[data-action="delete-all"]')?.addEventListener("click", () => {
    bulkUploadState.rows = [];
    bulkUploadState.selectedRows = new Set();
    renderBulkCsvModal();
  });
  backdrop.querySelector("thead input")?.addEventListener("change", (event) => {
    bulkUploadState.selectedRows = event.target.checked
      ? new Set(bulkUploadState.rows.map((row) => row.id))
      : new Set();
    renderBulkCsvModal();
  });
  backdrop.querySelectorAll("tbody tr").forEach((tr) => {
    const rowId = tr.dataset.rowId;
    tr.querySelector("input")?.addEventListener("change", (event) => {
      if (event.target.checked) bulkUploadState.selectedRows.add(rowId);
      else bulkUploadState.selectedRows.delete(rowId);
      renderBulkCsvModal();
    });
    tr.querySelector('[data-action="delete"]')?.addEventListener("click", () => {
      bulkUploadState.rows = bulkUploadState.rows.filter((row) => row.id !== rowId);
      bulkUploadState.selectedRows.delete(rowId);
      renderBulkCsvModal();
    });
    tr.querySelector('[data-action="edit"]')?.addEventListener("click", () => {
      const row = bulkUploadState.rows.find((entry) => entry.id === rowId);
      if (!row || row.error) return;
      row.mode = row.mode === "include" ? "exclude" : "include";
      renderBulkCsvModal();
    });
  });
}

function simulateBulkFileAdd() {
  const nextFile = getNextBulkFile();
  if (!nextFile || bulkUploadState.adding) return;
  bulkUploadState.adding = true;
  bulkUploadState.loadingFileId = nextFile.id;
  renderBulkCsvModal();
  window.setTimeout(() => {
    bulkUploadState.files.push(nextFile);
    bulkUploadState.adding = false;
    bulkUploadState.loadingFileId = null;
    renderBulkCsvModal();
  }, 720);
}

async function getZipFeatureCollectionForState(stateCode) {
  const fileSlug = ZIP_STATE_FILE_MAP[stateCode];
  if (!fileSlug) return null;
  const url = `${ZIP_STATE_URL_PREFIX}${fileSlug}_zip_codes_geo.min.json`;
  const cacheKey = `bulk-zip:${stateCode}`;
  if (boundaryDataCache.has(cacheKey)) return boundaryDataCache.get(cacheKey);
  const geojson = await fetchBoundaryGeojson(url);
  boundaryDataCache.set(cacheKey, geojson);
  return geojson;
}

function getZipCodeFromFeature(feature) {
  const props = feature.properties || {};
  return String(props.ZCTA5CE10 || props.ZCTA5 || props.ZIP || props.zip || props.GEOID10 || props.GEOID || props.name || "").padStart(5, "0");
}

async function uploadBulkZipRows() {
  const rows = bulkUploadState.rows.filter((row) => !row.error);
  if (!rows.length) return;

  const featuresByState = new Map();
  const uploadedBounds = L.latLngBounds([]);
  const states = [...new Set(rows.map((row) => row.stateCode))];

  await Promise.all(states.map(async (stateCode) => {
    const geojson = await getZipFeatureCollectionForState(stateCode);
    const featureMap = new Map();
    (geojson?.features || []).forEach((feature) => {
      const zip = getZipCodeFromFeature(feature);
      if (zip) featureMap.set(zip, normalizeBoundaryFeature(feature, { boundaryType: "ZIP Code" }));
    });
    featuresByState.set(stateCode, featureMap);
  }));

  rows.forEach((row) => {
    const feature = featuresByState.get(row.stateCode)?.get(row.zip);
    if (!feature) return;
    const layerBounds = L.geoJSON(feature).getBounds();
    if (layerBounds.isValid()) uploadedBounds.extend(layerBounds);
    addSelection({
      id: createSelectionId(`bulk-${row.mode}`),
      kind: "region",
      mode: row.mode,
      areaMode: "ZIP Code",
      name: row.zip,
      meta: `${row.sourceLabel} ZIP Code`,
      center: layerBounds.isValid() ? layerBounds.getCenter() : L.latLng(BULK_UPLOAD_FILES.find((file) => file.id === row.sourceFileId)?.center || [39.8283, -98.5795]),
      featureKey: boundaryFeatureKey(feature),
      geojson: feature,
      count: 18600,
      radiusLabel: "ZIP Code",
      checked: false,
      zoom: 11
    });
  });

  boundariesVisible = true;
  syncBoundaryVisibility();
  if (uploadedBounds.isValid()) map.fitBounds(uploadedBounds.pad(0.18));
  closeBulkCsvModal();
  showBulkSuccessToast();
}

function showBulkSuccessToast() {
  showMapToast("CSV uploaded successfully", "success");
}

function showMapToast(message, type = "success") {
  document.querySelector(".bulk-success-toast")?.remove();
  const toast = document.createElement("div");
  toast.className = `bulk-success-toast map-toast--${type}`;
  toast.innerHTML = `${icon(type === "warning" ? "error" : "check_circle", "small")} ${escapeHtml(message)}`;
  mapCanvas.append(toast);
  window.setTimeout(() => toast.remove(), 2600);
}

function closeSavedMapModal() {
  if (previewMapInstance) {
    previewMapInstance.remove();
    previewMapInstance = null;
  }
  document.querySelector(".saved-map-backdrop")?.remove();
}

function plainLatLng(value) {
  if (!value) return null;
  if (Array.isArray(value)) return { lat: Number(value[0]), lng: Number(value[1]) };
  return { lat: Number(value.lat), lng: Number(value.lng) };
}

function restoreLatLng(value) {
  if (!value) return null;
  return L.latLng(Number(value.lat), Number(value.lng));
}

function cloneGeoJson(feature) {
  return feature ? JSON.parse(JSON.stringify(feature)) : null;
}

function serializeSelection(row) {
  return {
    id: row.id,
    kind: row.kind,
    mode: row.mode,
    areaMode: row.areaMode,
    name: row.name,
    meta: row.meta || "",
    center: plainLatLng(row.center),
    featureKey: row.featureKey || "",
    geojson: cloneGeoJson(row.geojson),
    boundingbox: row.boundingbox ? [...row.boundingbox] : null,
    points: row.points ? row.points.map(plainLatLng) : null,
    radiusMeters: row.radiusMeters || null,
    radiusLabel: row.radiusLabel || row.areaMode || "",
    count: row.count || 0,
    zoom: row.zoom || Math.max(map.getZoom(), 8)
  };
}

function restoreSelection(row) {
  return {
    ...row,
    center: restoreLatLng(row.center),
    points: row.points ? row.points.map(restoreLatLng) : null,
    geojson: cloneGeoJson(row.geojson),
    checked: false
  };
}

function snapshotBounds(rows) {
  const bounds = L.latLngBounds([]);
  rows.forEach((row) => {
    if (row.kind === "region" && row.geojson) {
      const layerBounds = L.geoJSON(row.geojson).getBounds();
      if (layerBounds.isValid()) bounds.extend(layerBounds);
      return;
    }
    if (row.kind === "region" && row.boundingbox?.length === 4) {
      const [south, north, west, east] = row.boundingbox.map(Number);
      bounds.extend(L.latLngBounds([[south, west], [north, east]]));
      return;
    }
    if (row.kind === "radius" && row.center && row.radiusMeters) {
      bounds.extend(restoreLatLng(row.center).toBounds(row.radiusMeters * 2));
      return;
    }
    if (row.kind === "polygon" && row.points?.length) {
      bounds.extend(L.latLngBounds(row.points.map(restoreLatLng)));
      return;
    }
    if (row.center) bounds.extend(restoreLatLng(row.center));
  });
  return bounds;
}

function savedMapStructureTotal(rows) {
  return rows.reduce((sum, row) => sum + signedStructureCount(row), 0);
}

function selectedSnapshotRows() {
  return [...selected.values()].map(serializeSelection);
}

function syncActiveSavedMapButton() {
  const activeMap = savedMaps.find((entry) => entry.id === activeSavedMapId);
  addMapButton.hidden = !activeMap;
  if (!activeMap) return;
  const nameNode = addMapButton.querySelector(".active-map-name");
  if (nameNode) nameNode.textContent = activeMap.name || "Unnamed";
  addMapButton.title = activeMap.name || "Unnamed";
}

function saveCurrentMap(name, options = {}) {
  const rows = selectedSnapshotRows();
  if (!rows.length) {
    showMapToast("No locations added, can't be saved", "warning");
    return null;
  }

  const mapName = name.trim() || "Unnamed";
  const savedMap = {
    id: options.mapId || createSelectionId("saved-map"),
    name: mapName,
    rows,
    structures: savedMapStructureTotal(rows),
    locationCount: rows.length,
    updatedAt: new Date()
  };

  const existingIndex = savedMaps.findIndex((entry) => entry.id === savedMap.id);
  if (options.overwrite && existingIndex > -1) {
    savedMaps[existingIndex] = savedMap;
  } else {
    savedMaps.unshift(savedMap);
  }

  activeSavedMapId = savedMap.id;
  savedMapDirty = false;
  syncActiveSavedMapButton();
  closeSavedMapModal();
  showMapToast(options.overwrite ? "Saved map updated" : "Map saved successfully", "success");
  return savedMap;
}

function openSaveNameModal(options = {}) {
  const existing = options.mapId ? savedMaps.find((entry) => entry.id === options.mapId) : null;
  let backdrop = document.querySelector(".saved-map-backdrop");
  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.className = "saved-map-backdrop";
    document.body.append(backdrop);
  }
  backdrop.innerHTML = `
    <section class="bulk-modal saved-map-modal saved-map-modal--name" role="dialog" aria-modal="true" aria-label="Save this Map">
      <header class="bulk-modal__header">
        <h2>Save this Map</h2>
        <button class="bulk-modal__close" type="button" aria-label="Close">${icon("close", "small")}</button>
      </header>
      <div class="bulk-modal__body">
        <label class="saved-map-field">
          <span>Map name</span>
          <input id="savedMapNameInput" type="text" placeholder="Unnamed" value="${escapeHtml(existing?.name || "")}" />
        </label>
      </div>
      <footer class="bulk-modal__footer">
        <span class="bulk-modal__footer-spacer"></span>
        <button class="bulk-btn bulk-btn--ghost" type="button" data-action="cancel">Cancel</button>
        <button class="bulk-btn bulk-btn--primary" type="button" data-action="save">Save</button>
      </footer>
    </section>
  `;
  const input = backdrop.querySelector("#savedMapNameInput");
  input?.focus();
  input?.select();
  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) closeSavedMapModal();
  });
  backdrop.querySelector(".bulk-modal__close").addEventListener("click", closeSavedMapModal);
  backdrop.querySelector('[data-action="cancel"]').addEventListener("click", closeSavedMapModal);
  backdrop.querySelector('[data-action="save"]').addEventListener("click", () => {
    saveCurrentMap(input?.value || "", {
      overwrite: Boolean(options.overwrite),
      mapId: options.overwrite ? options.mapId : null
    });
  });
}

function openSaveChoiceModal() {
  let backdrop = document.querySelector(".saved-map-backdrop");
  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.className = "saved-map-backdrop";
    document.body.append(backdrop);
  }
  const activeMap = savedMaps.find((entry) => entry.id === activeSavedMapId);
  backdrop.innerHTML = `
    <section class="bulk-modal saved-map-modal saved-map-modal--choice" role="dialog" aria-modal="true" aria-label="Save this Map">
      <header class="bulk-modal__header">
        <h2>Save this Map</h2>
        <button class="bulk-modal__close" type="button" aria-label="Close">${icon("close", "small")}</button>
      </header>
      <div class="bulk-modal__body">
        <p class="bulk-modal__intro">You are editing ${escapeHtml(activeMap?.name || "a saved map")}. Choose how to save these locations.</p>
        <div class="saved-map-choice-grid">
          <button class="saved-map-choice" type="button" data-action="overwrite">
            ${icon("sync_saved_locally", "large")}
            <span><strong>Overwrite saved map</strong><small>Replace the existing saved map with the current locations.</small></span>
          </button>
          <button class="saved-map-choice" type="button" data-action="create-new">
            ${icon("add_circle", "large")}
            <span><strong>Create new saved map</strong><small>Keep the existing saved map and save this as a new one.</small></span>
          </button>
        </div>
      </div>
    </section>
  `;
  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) closeSavedMapModal();
  });
  backdrop.querySelector(".bulk-modal__close").addEventListener("click", closeSavedMapModal);
  backdrop.querySelector('[data-action="overwrite"]').addEventListener("click", () => {
    openSaveNameModal({ overwrite: true, mapId: activeSavedMapId });
  });
  backdrop.querySelector('[data-action="create-new"]').addEventListener("click", () => {
    openSaveNameModal();
  });
}

function requestSaveCurrentMap() {
  if (!selected.size) {
    showMapToast("No locations added, can't be saved", "warning");
    return;
  }
  if (activeSavedMapId && savedMapDirty) {
    openSaveChoiceModal();
    return;
  }
  openSaveNameModal({ overwrite: Boolean(activeSavedMapId), mapId: activeSavedMapId });
}

function formatSavedMapDate(date) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }).format(date);
}

function filteredSavedMaps() {
  const query = savedMapSearchQuery.trim().toLowerCase();
  if (!query) return savedMaps;
  return savedMaps.filter((entry) => {
    const haystack = [
      entry.name,
      ...entry.rows.flatMap((row) => [row.name, row.areaMode, row.mode, row.meta])
    ].join(" ").toLowerCase();
    return haystack.includes(query);
  });
}

function renderSavedMapListModal() {
  let backdrop = document.querySelector(".saved-map-backdrop");
  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.className = "saved-map-backdrop";
    document.body.append(backdrop);
  }

  if (!savedMaps.length) {
    backdrop.innerHTML = `
      <section class="bulk-modal saved-map-modal saved-map-modal--empty" role="dialog" aria-modal="true" aria-label="Use Saved Map">
        <header class="bulk-modal__header">
          <h2>Use Saved Map</h2>
          <button class="bulk-modal__close" type="button" aria-label="Close">${icon("close", "small")}</button>
        </header>
        <div class="bulk-modal__body">
          <div class="saved-map-empty">
            <span class="saved-map-empty__icon">${icon("map", "large")}</span>
            <strong>No saved maps yet</strong>
            <span>Save a map with selected locations before using this option.</span>
          </div>
        </div>
      </section>
    `;
  } else {
    const rows = filteredSavedMaps().map((entry) => `
      <tr data-map-id="${escapeHtml(entry.id)}">
        <td><strong>${escapeHtml(entry.name)}</strong><span>${formatSavedMapDate(entry.updatedAt)}</span></td>
        <td>${formatNumber(entry.locationCount)}</td>
        <td>${formatNumber(entry.structures)}</td>
        <td><span class="bulk-row-actions"><button type="button" data-action="preview" aria-label="Preview ${escapeHtml(entry.name)}">${icon("visibility", "small")}</button><button type="button" data-action="use" aria-label="Use ${escapeHtml(entry.name)}">${icon("arrow_forward", "small")}</button></span></td>
      </tr>
    `).join("");
    backdrop.innerHTML = `
      <section class="bulk-modal saved-map-modal saved-map-modal--list" role="dialog" aria-modal="true" aria-label="Use Saved Map">
        <header class="bulk-modal__header">
          <h2>Use Saved Map</h2>
          <button class="bulk-modal__close" type="button" aria-label="Close">${icon("close", "small")}</button>
        </header>
        <div class="bulk-modal__body">
          <div class="saved-map-search">
            ${icon("search", "small")}
            <input id="savedMapSearch" type="search" placeholder="Search saved maps" value="${escapeHtml(savedMapSearchQuery)}" />
          </div>
          <div class="bulk-table saved-map-table">
            <table>
              <thead>
                <tr>
                  <th>Map Name</th>
                  <th>Locations</th>
                  <th>Structures</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>${rows || `<tr><td colspan="4" class="saved-map-no-results">No saved maps found</td></tr>`}</tbody>
            </table>
          </div>
        </div>
      </section>
    `;
  }

  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) closeSavedMapModal();
  });
  backdrop.querySelector(".bulk-modal__close").addEventListener("click", closeSavedMapModal);
  backdrop.querySelector("#savedMapSearch")?.addEventListener("input", (event) => {
    savedMapSearchQuery = event.target.value;
    renderSavedMapListModal();
    document.querySelector("#savedMapSearch")?.focus();
  });
  backdrop.querySelectorAll("tbody tr[data-map-id]").forEach((tr) => {
    const savedMap = savedMaps.find((entry) => entry.id === tr.dataset.mapId);
    if (!savedMap) return;
    tr.querySelector('[data-action="preview"]')?.addEventListener("click", () => openPreviewMapModal(savedMap));
    tr.querySelector('[data-action="use"]')?.addEventListener("click", () => applySavedMap(savedMap));
  });
}

function renderRowsOnLeafletMap(targetMap, rows) {
  const bounds = snapshotBounds(rows);
  rows.forEach((row) => {
    const style = previewStyle(row);
    if (row.kind === "region" && row.geojson) {
      L.geoJSON(row.geojson, {
        style: {
          color: style.color,
          fillColor: style.fillColor,
          fillOpacity: row.mode === "exclude" ? 0.16 : 0.18,
          weight: 2
        }
      }).addTo(targetMap);
      return;
    }
    if (row.kind === "radius" && row.center && row.radiusMeters) {
      L.circle(restoreLatLng(row.center), {
        radius: row.radiusMeters,
        color: style.color,
        fillColor: style.fillColor,
        fillOpacity: 0.18,
        weight: 2
      }).addTo(targetMap);
      return;
    }
    if (row.kind === "polygon" && row.points?.length) {
      L.polygon(row.points.map(restoreLatLng), {
        color: style.color,
        fillColor: style.fillColor,
        fillOpacity: 0.18,
        weight: 2
      }).addTo(targetMap);
    }
  });
  if (bounds.isValid()) targetMap.fitBounds(bounds.pad(0.22));
  else targetMap.setView([39.8283, -98.5795], 4);
}

function openPreviewMapModal(savedMap) {
  closeSavedMapModal();
  const backdrop = document.createElement("div");
  backdrop.className = "saved-map-backdrop";
  document.body.append(backdrop);
  backdrop.innerHTML = `
    <section class="bulk-modal saved-map-modal saved-map-modal--preview" role="dialog" aria-modal="true" aria-label="Preview Map">
      <header class="bulk-modal__header">
        <h2>Preview Map</h2>
        <button class="bulk-modal__close" type="button" aria-label="Close">${icon("close", "small")}</button>
      </header>
      <div class="bulk-modal__body">
        <div class="saved-preview-summary">
          <strong>${escapeHtml(savedMap.name)}</strong>
          <span>${formatNumber(savedMap.structures)} structures</span>
        </div>
        <div id="savedPreviewMap" class="saved-preview-map" aria-label="Preview of saved map"></div>
      </div>
      <footer class="bulk-modal__footer">
        <span class="bulk-modal__footer-spacer"></span>
        <button class="bulk-btn bulk-btn--ghost" type="button" data-action="back">Back</button>
        <button class="bulk-btn bulk-btn--primary" type="button" data-action="proceed">Proceed</button>
      </footer>
    </section>
  `;
  const closePreview = () => {
    closeSavedMapModal();
    renderSavedMapListModal();
  };
  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) closePreview();
  });
  backdrop.querySelector(".bulk-modal__close").addEventListener("click", closePreview);
  backdrop.querySelector('[data-action="back"]').addEventListener("click", closePreview);
  backdrop.querySelector('[data-action="proceed"]').addEventListener("click", () => applySavedMap(savedMap));

  window.setTimeout(() => {
    previewMapInstance = L.map("savedPreviewMap", {
      zoomControl: false,
      attributionControl: false,
      dragging: true,
      scrollWheelZoom: false
    });
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png", {
      subdomains: "abcd",
      maxZoom: 20
    }).addTo(previewMapInstance);
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png", {
      subdomains: "abcd",
      maxZoom: 20
    }).addTo(previewMapInstance);
    renderRowsOnLeafletMap(previewMapInstance, savedMap.rows);
  }, 0);
}

function applySavedMap(savedMap) {
  selected.clear();
  savedMap.rows.map(restoreSelection).forEach((row) => selected.set(row.id, row));
  activeSavedMapId = savedMap.id;
  savedMapDirty = false;
  syncActiveSavedMapButton();
  renderSelected();
  renderSelections();
  refreshBoundaryFeatureStyles();
  const bounds = snapshotBounds(savedMap.rows);
  if (bounds.isValid()) map.fitBounds(bounds.pad(0.18));
  closeSavedMapModal();
  showMapToast("Saved map applied", "success");
}

document.addEventListener("click", (event) => {
  if (!event.target.closest(".search-wrap")) searchMenu.hidden = true;
  // MapOptions is a SelectButton — it dismisses itself.
  if (!event.target.closest(".area-select-wrap")) areaMenu.hidden = true;
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!document.querySelector(".leaflet-popup-content")) return;
  closeSelectionPopup();
});

// Every control below is a design-system component. The handlers are the same
// functions the old buttons called — only the thing being clicked changed.
function setAreaMode(level) {
  areaMode = level === "Zip Code" ? "ZIP Code" : level;
  areaMenu.hidden = true;
  activeBoundaryKey = null;
  hoveredBoundaryKey = null;
  currentPopupSelection = null;
  boundaryFetchToken += 1;
  syncBoundaryVisibility();
  clearBoundaryPreviewForMode(null);
  fetchVisibleBoundaries();
}

function renderAreaMenu() {
  DS.areaMenu(areaMenu, AREA_LEVELS, areaMode, { pick: setAreaMode });
}

function setBaseLayer(index) {
  const satellite = index === 1;
  if (satellite && !map.hasLayer(satelliteLayer)) {
    map.removeLayer(streetLayer);
    map.removeLayer(streetLabelsLayer);
    satelliteLayer.addTo(map);
    satelliteLabelsLayer.addTo(map);
  }
  if (!satellite && !map.hasLayer(streetLayer)) {
    map.removeLayer(satelliteLayer);
    map.removeLayer(satelliteLabelsLayer);
    streetLayer.addTo(map);
    streetLabelsLayer.addTo(map);
  }
}

function mountDesignSystem() {
  renderSearchField();
  renderAreaMenu();

  DS.mapOptions(mapOptionsHost, {
    pick: (value) => {
      if (value === "bulk") return openBulkCsvModal();
      if (value === "saved") { savedMapSearchQuery = ""; return renderSavedMapListModal(); }
      if (value === "save") return requestSaveCurrentMap();
    },
  });

  DS.drawActions(drawActions, {
    radius: () => setDrawMode("radius"),
    polygon: () => setDrawMode("polygon"),
  });

  DS.zoom(zoomControl, { in: () => map.zoomIn(), out: () => map.zoomOut() });

  DS.viewToggle(viewToggle, 0, { change: setBaseLayer });
}

mountDesignSystem();

locationPanelToggle.addEventListener("click", () => {
  prototypeShell.classList.add("is-location-panel-open");
  window.setTimeout(() => map.invalidateSize(), 180);
});

closeLocationPanel.addEventListener("click", () => {
  prototypeShell.classList.remove("is-location-panel-open");
  window.setTimeout(() => map.invalidateSize(), 180);
});

let resizeInvalidateToken = 0;
window.addEventListener("resize", () => {
  window.clearTimeout(resizeInvalidateToken);
  resizeInvalidateToken = window.setTimeout(() => map.invalidateSize(), 160);
});

map.on("click", (event) => {
  if (!boundariesVisible) {
    const clickedSelection = findSelectedSelectionAtLatLng(event.latlng);
    if (clickedSelection) {
      openSelectedSelectionPopup(clickedSelection, event.latlng);
      return;
    }
  }

  if (drawMode === "radius") {
    if (!draftRadius) {
      draftRadius = {
        center: event.latlng,
        radiusMeters: 25000
      };
    } else {
      draftRadius.center = event.latlng;
    }
    renderDraftRadius();
    return;
  }

  if (drawMode === "polygon") {
    draftPolygonPoints.push(event.latlng);
    renderDraftPolygon();
    return;
  }

  if (boundariesVisible) {
    map.closePopup();
    currentPopupSelection = null;
    activeBoundaryKey = null;
    refreshBoundaryFeatureStyles();
    return;
  }

  handleMapSelection(event.latlng);
});

map.on("moveend", () => {
  fetchVisibleBoundaries();
});

map.on("popupclose", () => {
  currentPopupSelection = null;
  if (!selected.size) {
    activeBoundaryKey = null;
    refreshBoundaryFeatureStyles();
  }
});

renderSelected();
syncActiveSavedMapButton();
syncBoundaryVisibility();
syncDrawModeBar();
