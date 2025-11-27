// Add this to mainscript.js
document.addEventListener('DOMContentLoaded', function() {
    // Load all partials
    const elements = document.querySelectorAll('[data-include]');
    elements.forEach(el => {
        const file = el.getAttribute('data-include');
        fetch(file)
            .then(response => response.text())
            .then(data => {
                el.innerHTML = data;
                // initialize any dropdowns inside newly loaded partial
                initNavDropdowns();
            });
    });

    // Initialize navigation dropdowns (language/currency and ship-to)
    function initNavDropdowns() {
        // nav language/currency
        const navLangToggle = document.querySelector('.nav-lang-toggle');
        const navLangList = document.querySelector('.nav-lang-list');
        if (navLangToggle && navLangList) {
            const items = Array.from(navLangList.querySelectorAll('li'));

            function closeList() { navLangList.classList.remove('show'); navLangToggle.setAttribute('aria-expanded', 'false'); }
            function openList() { navLangList.classList.add('show'); navLangToggle.setAttribute('aria-expanded', 'true'); }

            navLangToggle.addEventListener('click', function(e) {
                const expanded = navLangToggle.getAttribute('aria-expanded') === 'true';
                if (expanded) closeList(); else openList();
            });

            items.forEach(item => {
                item.addEventListener('click', function() {
                    const text = item.textContent.trim();
                    const label = navLangToggle.querySelector('.nav-lang-text');
                    if (label) label.textContent = text;
                    items.forEach(i => i.removeAttribute('aria-selected'));
                    item.setAttribute('aria-selected', 'true');
                    closeList();
                });
                item.addEventListener('keydown', function(e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.click(); } });
            });

            document.addEventListener('click', function(e) { if (!navLangToggle.contains(e.target) && !navLangList.contains(e.target)) closeList(); });
            document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeList(); });
        }

        // nav ship-to
        const navShipToggle = document.querySelector('.nav-ship-toggle');
        const navShipList = document.querySelector('.nav-ship-list');
        if (navShipToggle && navShipList) {
            const items = Array.from(navShipList.querySelectorAll('li'));

            function closeShip() { navShipList.classList.remove('show'); navShipToggle.setAttribute('aria-expanded', 'false'); }
            function openShip() { navShipList.classList.add('show'); navShipToggle.setAttribute('aria-expanded', 'true'); }

            navShipToggle.addEventListener('click', function(e) {
                const expanded = navShipToggle.getAttribute('aria-expanded') === 'true';
                if (expanded) closeShip(); else openShip();
            });

            items.forEach(item => {
                item.addEventListener('click', function() {
                    const img = item.querySelector('img');
                    const text = item.textContent.trim();
                    const toggleImg = navShipToggle.querySelector('img.flag');
                    const toggleText = navShipToggle.querySelector('.nav-ship-text');
                    if (img && toggleImg) toggleImg.src = img.src;
                    if (toggleText) toggleText.textContent = text;

                    items.forEach(i => i.removeAttribute('aria-selected'));
                    item.setAttribute('aria-selected', 'true');
                    closeShip();
                });
                item.addEventListener('keydown', function(e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.click(); } });
            });

            document.addEventListener('click', function(e) { if (!navShipToggle.contains(e.target) && !navShipList.contains(e.target)) closeShip(); });
            document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeShip(); });
        }
    }

    // run once on initial load (in case partials are already present)
    initNavDropdowns();
});