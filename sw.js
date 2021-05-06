self.addEventListener('install', e =>{
    console.log("Install!");
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll(["./","./index.html", "./index.css", "./initials.png", "./maskable_icon.png", "./initials250.png", "./initials512.png", "./model.js", './manifest.json', './register.js', '/img/1.jpg', '/img/2.jpg', './img/3.jpg', './img/4.jpg', './img/5.jpg', './img/6.jpg', './img/7.jpg', './img/8.jpg', './img/covid.png', './img/edulogo.png', './img/medlogo.png', './img/pclogo.png', './404.css', './404.html', './about.css', './about.html', './contact.css', './contact.html', './covid.css', './covid.html', './eduportal.html', './eduportal.css', './medical.css', './medical.html', './particles.json', './projects.css', './projects.html', './robots.txt', './skills.css', './skills.html', './store.css', './store.html', './svgtagcloud.js', './sw.js', './vocab.css', './vocab.html', './404','./index','./contact','./about','./skills','./projects','./covid','./medical','./store','./vocab','./eduportal']);
        })
    );
});

self.addEventListener('fetch', e=>{
    console.log("Intercepting Fetch URL: "+e.request.url);

    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
})