// Service Worker for advanced caching and offline support

const CACHE_NAME = "mdesk-cache-v1"
const RUNTIME_CACHE = "mdesk-runtime-v1"

// Resources to cache on install - fixed paths to match actual file locations
const PRECACHE_URLS = ["/"]

// Install event - precache static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting()),
  )
})

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  const currentCaches = [CACHE_NAME, RUNTIME_CACHE]

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return cacheNames.filter((cacheName) => !currentCaches.includes(cacheName))
      })
      .then((cachesToDelete) => {
        return Promise.all(
          cachesToDelete.map((cacheToDelete) => {
            return caches.delete(cacheToDelete)
          }),
        )
      })
      .then(() => self.clients.claim()),
  )
})

// Fetch event - network-first strategy with cache fallback
self.addEventListener("fetch", (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return
  }

  // Skip non-GET requests
  if (event.request.method !== "GET") {
    return
  }

  // Skip analytics and tracking requests
  if (event.request.url.includes("google-analytics") || event.request.url.includes("googletagmanager")) {
    return
  }

  // For HTML pages - network first, then cache
  if (event.request.headers.get("accept") && event.request.headers.get("accept").includes("text/html")) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Clone the response
          const responseToCache = response.clone()

          caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(event.request, responseToCache)
          })

          return response
        })
        .catch(() => {
          return caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse
            }

            // If no cache, return the offline page
            return caches.match("/")
          })
        }),
    )
    return
  }

  // For images, CSS, JS - stale-while-revalidate strategy
  if (event.request.url.match(/\.(js|css|png|jpg|jpeg|svg|gif|webp|avif)$/) || event.request.url.includes("/fonts/")) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          // Update the cache
          caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(event.request, networkResponse.clone())
          })

          return networkResponse
        })

        // Return cached response immediately, then update cache in background
        return cachedResponse || fetchPromise
      }),
    )
    return
  }

  // Default - network first with cache fallback
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Don't cache if not a successful response
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response
        }

        // Clone the response
        const responseToCache = response.clone()

        caches.open(RUNTIME_CACHE).then((cache) => {
          cache.put(event.request, responseToCache)
        })

        return response
      })
      .catch(() => {
        return caches.match(event.request)
      }),
  )
})

// Handle push notifications
self.addEventListener("push", (event) => {
  const title = "mdesk.tech"
  const options = {
    body: event.data.text(),
    icon: "/icon-192x192.png",
    badge: "/badge-72x72.png",
  }

  event.waitUntil(self.registration.showNotification(title, options))
})

// Handle notification clicks
self.addEventListener("notificationclick", (event) => {
  event.notification.close()

  event.waitUntil(clients.openWindow("/"))
})

