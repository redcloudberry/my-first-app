const CACHE_NAME = "my-first-pwa-v1";
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json"
];

// 설치될 때 파일 저장
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// 요청이 오면 캐시 먼저 사용
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
