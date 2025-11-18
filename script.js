// ===== Load header and footer dynamically =====
document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
        .then(res => res.text())
        .then(data => { document.getElementById('header').innerHTML = data; });

    fetch('footer.html')
        .then(res => res.text())
        .then(data => { document.getElementById('footer').innerHTML = data; });

    // ===== Timer =====
    const daysEl = document.querySelector('.timer-item:nth-child(1) .timer-value');
    const hoursEl = document.querySelector('.timer-item:nth-child(2) .timer-value');
    const minutesEl = document.querySelector('.timer-item:nth-child(3) .timer-value');
    const secondsEl = document.querySelector('.timer-item:nth-child(4) .timer-value');

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 4);

    function updateTimer() {
        const now = new Date();
        const diff = targetDate - now;
        if (diff <= 0) { daysEl.textContent = hoursEl.textContent = minutesEl.textContent = secondsEl.textContent = '00'; return; }
        const d = Math.floor(diff / (1000*60*60*24));
        const h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
        const m = Math.floor((diff % (1000*60*60)) / (1000*60));
        const s = Math.floor((diff % (1000*60)) / 1000);
        daysEl.textContent = d.toString().padStart(2,'0');
        hoursEl.textContent = h.toString().padStart(2,'0');
        minutesEl.textContent = m.toString().padStart(2,'0');
        secondsEl.textContent = s.toString().padStart(2,'0');
    }

    updateTimer();
    setInterval(updateTimer, 1000);
});
