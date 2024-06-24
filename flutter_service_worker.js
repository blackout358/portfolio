'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"index.html": "92c50367ae9a109beb202e7bf50eb6ce",
"/": "92c50367ae9a109beb202e7bf50eb6ce",
"flutter_bootstrap.js": "6b6a918d7e023a25559419bbf6006979",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/index": "2ddc37795aa2115238b62a02674dc3cc",
".git/logs/refs/heads/main": "fd0b78d4bc61929e261a31c4287c68b4",
".git/logs/refs/remotes/origin/main": "e98dd3f17ceac94bebac6c7c0fb96019",
".git/logs/HEAD": "fd0b78d4bc61929e261a31c4287c68b4",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/objects/8b/2068cb7035ba65b6fd720f5511d93d895d04ec": "cba950f8a50fa499c8122ec07b4c35a3",
".git/objects/93/1cb54ce0b1c1bf19bbadac4fa891918edbb2f2": "4f6eb50bc2978a0716118ede79600762",
".git/objects/6b/ad084ce3d6c542cb6c39467aa0c72c9e34ed81": "192c54e007fe92c3a9a3816316a5883e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/44/acddc6a17f6f38a8b3ff583cb6ea68fe9d32a5": "9e3e3615599bbcb22ac7d38da01835ea",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/5f/23e7bd8bc65ca1c91e73c288f5e2fe66c30d38": "ba1ffe21d35d85bbfee5fba77445f9de",
".git/objects/41/7d84fcb01d6fbeef550903006f24dc5f7b5e28": "d0e0e651f929f885564ae1a721cc791b",
".git/objects/f0/5d542cf14ba99ea5406c177733120540815bc4": "c0203c185b22df80b307258c7134c8b7",
".git/objects/c3/e6781430465b1fde1d698e7fd28328f25b0a3f": "6856fb8fd86a54588f139f59a3df7aa6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/da/ffd5fb6a82fcb982c749b0a43d0908166fdee5": "54e7699e45b5f836b38f4949bc5e7718",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/c1/9573e626f39425916d6e26f68bb611b743b341": "f1cda0b784fda801435d676a5706b258",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/77/8cbd8a7e42e8d8e1329507211018257b201199": "75f9b4c006adfa7a7158a196f440cb9e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/b8/4b18c3e4bf27d5abf4e9da689c1fb8c6eac065": "8eb074e0bc9da207225484f7fb86062b",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/57/8b5e459ba843be6f94b95b3ecb2186410848a8": "23150ca586c9467f65efc2d23ab9ccd0",
".git/objects/9a/ba4600d44bb3451cbb3c1089057f511eb65b83": "31abf642416ffe2eb8566fe240c0e041",
".git/objects/a3/08455ca445d8af836eaa765897b4671b992c9d": "153886e1fb78f4b6a6163fd14233be52",
".git/objects/38/88948f5a608b6e78db59a98639a8691e6fb42c": "cb99b6453f6663df97e13cea3a4b2692",
".git/objects/45/7568538b132383c561c7d9251b0d0bd59a95c4": "0948c98faf7a4d35d0bdb35260a39a98",
".git/objects/3e/110b1d97e1b82eb3acecb08363a175d4384fd5": "b89a044331d2c076020426c0fc0ea1dc",
".git/objects/b5/f376b6a6f0002fc61ed7f731ad7ff37a27e778": "b762aeedd843a0e40af8605c3b2a84e3",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/0f/8d43a981e1969a3a72d98b5b97bdc50fbff6d7": "5b9904eb672da4f874ef079cdd1668d6",
".git/objects/80/82474cb774678abb23887b1af7c0d78ddc8b04": "744262c61caa30f40c89bc3b7c3094e3",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/2ccfad5d852d0218cf141964b98e8cd983facc": "7726a84b01597e4473472d381ed77003",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/08/79e9f4c25e8b502e79c79ba666e0b6eb3a0ec8": "d4d37ac5edb14880ba88dfdf254d3666",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/bb/23143d540d8601692f3cd5d32de053397e565f": "75ea895fa45ff3cc530a22c4691ea14c",
".git/objects/e8/3d39c9ed3a918b98eb49d399cb5c414590fe35": "d70e5729024f4b9d767a74e07d0ee8c5",
".git/objects/c8/43cd6cdd75678518dc585f30164b323906fe51": "0fc97b7335f65038a5ec4e915ddfb34d",
".git/objects/85/cc9293d13ec8f7c9415a7c5232643edb5a6de0": "cd82784ef1b7a021dddc38027e9aa036",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/82/36dc8f293e49156f0d307e9b9d0ae40a4675b9": "d8051e1a39996594e2dd02778c7255f4",
".git/objects/c2/3c850b719ad5f846c97af623c03ace7ce0b283": "c9727b2349496336e69d582692063a1a",
".git/objects/f7/f53a6153039783fe5284eb8e2b1e751746d748": "ffc2144958afd19251d9949f93e2c82b",
".git/objects/8c/cdb0be4a0f844e0b8555618dd38c50b55c1a1b": "1f1116a36ed14c435ee6f5b1dfeac8f2",
".git/objects/62/39edd272e49efbb9a19da200a7f8c13ca2d8a0": "7512e958953446ee86e0c1199486ccd8",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/35/34be4ebbfc081ae9ea342ba724ba7bd9808d51": "e0cd9e8e22591b9236af0d53f67b5907",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/55/e1714207965b664d5789d60f24cd779df36d6a": "ac222539073e0e1e200e4455d2fca7c7",
".git/objects/88/98b13e95528799ca48035afdf4f798ced0ad6e": "c75f0d15fbafda9d5df54c1cc51d315e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/refs/heads/main": "9ccfd13c9c9bf51525e5457c757d427b",
".git/refs/remotes/origin/main": "9ccfd13c9c9bf51525e5457c757d427b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "506c7e554d789bff27f31e89dacd21c2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"favicon.png": "7e01d00af1e8ea935357481e08558ef0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "bd34c107d499207c322153abbca5e4ae",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "36006a2aee699bab11e4562e9bd81963",
"assets/packages/dev_icons/fonts/devicon.ttf": "1dede8d498067ea893dc79a5bfd7692c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/AssetManifest.bin": "1e01f6b95270c731e9e5308b81470f9c",
"assets/FontManifest.json": "ec4ce7e97cf15da97d658891df08b0b6",
"assets/NOTICES": "4aa006ee6f93ed485792fbdbbc68073b",
"assets/fonts/MaterialIcons-Regular.otf": "066eb6051da2641f9dbe35b373400908",
"assets/assets/images/profile.jpeg": "f02386ddbdf67628abd8dd5ce83398e6",
"assets/assets/images/Github/Mizu.png": "129c8443c2280def2a34c7700e874d4c",
"assets/assets/images/Github/ShoppingListFRB.png": "fafcadced2f56abb79cc32cb82cbffee",
"assets/assets/images/Github/Stopwatch.png": "22263d130aef5ee4e6ad6c3104c487d1",
"assets/assets/images/Github/Hungarian21.png": "e2475a7c7a47dd62b3583aefa4d09100",
"assets/assets/images/Github/SwiftShoppingList.png": "226c161eedb1a97cf3cad1ec13e9864e",
"assets/assets/CV/CV.pdf": "29fc7bec6a07ac5e0aa28ca494a0666f",
"assets/AssetManifest.bin.json": "731a5daabb067dfadc915e467b469c85",
"main.dart.js": "ba89554d3d3143e2c3dd5b736438146d",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
