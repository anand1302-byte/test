// navbar toggle

const mobileMenu = document.getElementById('mobile-menu');
        const navbar = document.getElementById('navbar');

        mobileMenu.addEventListener('click', () => {
            navbar.classList.toggle('responsive');
        });

        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const question = item.querySelector('h4');

            question.addEventListener('click', () => {
                // Toggle the visibility of the answer
                const answer = item.querySelector('p');
                const isVisible = answer.style.display === 'block';

                // Hide all answers first
                faqItems.forEach(i => i.querySelector('p').style.display = 'none');

                // Show the clicked answer if it was hidden
                if (!isVisible) {
                    answer.style.display = 'block';
                }
            });
        });

        const serviceCards = document.querySelector('.service-card');
        const dots = document.querySelectorAll('.dot');

        let currentIndex = 0;

        function updateActiveDot(index) {
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
        }

        serviceCards.addEventListener('scroll', () => {
            const cardWidth = serviceCards.querySelector('.card').offsetWidth;
            const scrollPosition = serviceCards.scrollLeft;
            currentIndex = Math.round(scrollPosition / cardWidth);
            updateActiveDot(currentIndex);
        });

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                currentIndex = parseInt(dot.dataset.index);
                serviceCards.scrollTo({
                    left: currentIndex * serviceCards.querySelector('.card').offsetWidth,
                    behavior: 'smooth',
                });
                updateActiveDot(currentIndex);
            });
        });