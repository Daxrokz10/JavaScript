 let lastScroll = 0;
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', function () {
            let st = window.pageYOffset;
            if (st > lastScroll) {
                // Scrolling down, hide navbar
                navbar.classList.add('navbar-hidden');
            } else {
                // Scrolling up, show navbar
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
        });
        document.getElementById('goTopBtn').addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });