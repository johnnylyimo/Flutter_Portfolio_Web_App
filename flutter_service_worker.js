'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "4f5963508dbd8871ce7acc81293d2032",
".git/config": "8e3dc2832339b9b580ee0487cdbf9492",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4338310ca8b50137d40c722c3400bccd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "73680217843293385ab86b3dd93f84e9",
".git/logs/refs/heads/main": "73680217843293385ab86b3dd93f84e9",
".git/logs/refs/remotes/origin/main": "9ae1698ddc8e5233a163cb143058bb74",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/09/5a491be36bf1f8e7caecb6b13139d569ae7d83": "84dc4915cc0747ca379fcd54a34c48ee",
".git/objects/0c/42c75e518c9889b1faa7ae2e4b678806a10d4e": "f0d727d3574e7e27726f89e1fe2df1a7",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/d1bb89b6417840209c67256de385ff23254ab0": "7d1bf40751056fb9554fc45d971a8770",
".git/objects/26/feb05362b1b26275997ef6c554de5e431c6a96": "65c513b9e55f9fd8d45dc210d5233cf4",
".git/objects/29/80bdef59c876324c4001e6490782163b451598": "457561e2a6d5c003289abab551d58504",
".git/objects/44/507cc4a04c0d4c4647271c2047ad7e15e1b865": "96126b63ffa5af0d0eff620012548205",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/4b/acbacf8d3b94acb0356f8f8431b3cf1f5da37a": "f1737d75babd765bab336d63f3372262",
".git/objects/56/719fdaaae000803a5856c1c498f0fbbc530d16": "5add61fcb4d7878024e48b1644f9cbd4",
".git/objects/64/0cf6df6b284c855b34ed0f5f31205a30c12a9c": "c7712d49351a33056cd7a0a942dcc3e7",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/8e2d345f65fd803d914e510849a9ae37f11178": "696ea66d992061bb33a9ac5b05eb1285",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/e081574718238299d50003bff460fdf2566350": "04cee0b478a8472f825d46dc7874735c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9b/60ccc86b19d4afea72a1d9c63ebcebf4a178b7": "89a92627021959091376d63d0587644d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/2514d993837d3e06c3e621a8d6a3e11927b8a8": "e81582561a5901809ab1ca6a113dc5fd",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c0/8ee12ee23aa9b0fcbc06fe9b6df705f4146e3a": "47ff02014ab08e28ce8e2e1bfc82a833",
".git/objects/c8/7a6192c95474c8e6d6b6061b186018aeb48ed9": "c1a381cbe745596777b80de56a7dcd4b",
".git/objects/cc/f2095bbc77da2561f103132018a16500566175": "ecf50e54b34e516c0f01193bcd438058",
".git/objects/cf/d075f711d8d3d32fcaba6550dff177cfa7fd60": "784aaad3aded6950ff6454a95d1fc82a",
".git/objects/d3/c837de46055b69f670ecb29ce3dbafbef33f30": "e09a7b2812739a36b5598ea6b8ccdac0",
".git/objects/d5/1d533fee43e3085a6cb38905000dfa4f0bf85d": "d193a69ca9d5b0dcf717ddc91f9f7d83",
".git/objects/db/1d9fa5a3058ebd89d1c24295da1ddb5fe2014b": "9e9257d7c7b6fa1c5adb8468ce1c2c33",
".git/objects/dc/68eec632d58e27919743f27c30d52ef3500f5a": "bf521e3bbf402b864f0d2481b9a4c1e9",
".git/objects/e2/38d354b810672fdef414aeb994e11a73dedc98": "9ea48573677bd0f7555542deb02a5ef0",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/10edd6a14e9919704da09c5632a28edc645246": "d80a69cbe9dd08ad4172d21524376f57",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f2/7c45ead1bc0919498059303c4ed417b4b9a153": "de34d4c1759aa37783b3662f0cbace3d",
".git/objects/f8/c2d8204d9b92211784536038dcf34c4b0d45a5": "e7c84bb2285ed1f4ac65481f0d8cc6bc",
".git/refs/heads/main": "218b2c5d150b858180f0d3c13e5b37b0",
".git/refs/remotes/origin/main": "218b2c5d150b858180f0d3c13e5b37b0",
"assets/AssetManifest.json": "4e03f5f77c26094ac2e51b571b7adbc5",
"assets/FontManifest.json": "6f4d2ba6f84d13d62c153dfc1612ec8e",
"assets/fonts/DelaGothicOne-Regular.ttf": "55f399efa5f812390e55d7452727ccea",
"assets/fonts/Lato-Regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/images/brand.png": "79ff347b7751b994dfccc6c4a7d5d6bb",
"assets/images/me.jpg": "d1a5beb7214bfb41ed747feecb8082bd",
"assets/NOTICES": "acc0507eeb3490384ddb5d6d450c1261",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1dc408cd27cfded61b43cd87a4e351a2",
"/": "1dc408cd27cfded61b43cd87a4e351a2",
"main.dart.js": "a3a80a9447c30ec39915173afdd85c3b",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
"README.md": "a1ea8e590682d795683a817357cfbb63",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
