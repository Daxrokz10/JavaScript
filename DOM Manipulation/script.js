let lastScroll = 0;
const navbar = document.getElementById('navbar');
const progress = document.getElementById('progress');

window.addEventListener('scroll', function () {
    let st = window.pageYOffset;
    if (st > lastScroll) {
        navbar.classList.add('navbar-hidden');
    } else {
        navbar.classList.remove('navbar-hidden');
    }
    lastScroll = st;

    // Go to Top button logic
    const btn = document.getElementById('goTopBtn');
    if (window.scrollY > 200) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }

    // Update progress bar height
    let scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    let currentPercent = (window.pageYOffset / scrollableHeight) * 100;
    if (currentPercent < 0) currentPercent = 0;
    if (currentPercent > 100) currentPercent = 100;
    progress.style.height = currentPercent + "%";
});

document.getElementById('goTopBtn').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});