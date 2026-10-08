const CACHE = "plano-v9";
const FILES = [
  "./",
  "./index.html",
  "./styles.css",
  "./shop.js",
  "./moves.js",
  "./app.js",
  "./manifest.webmanifest",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png",
  "./mov/supino.mp4",
  "./mov/remada.mp4",
  "./mov/inclinado.mp4",
  "./mov/puxada.mp4",
  "./mov/legpress.mp4",
  "./mov/rdl.mp4",
  "./mov/afundo.mp4",
  "./mov/prancha.mp4",
  "./mov/press.mp4",
  "./mov/cardio.mp4",
  "./mov/walk.mp4",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(offlineFirst(event.request));
});

async function offlineFirst(request) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(request, { ignoreSearch: true });
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response && response.ok) cache.put(request, response.clone());
    return response;
  } catch (error) {
    if (request.mode === "navigate") {
      const page = await cache.match("./index.html");
      if (page) return page;
    }
    throw error;
  }
}
