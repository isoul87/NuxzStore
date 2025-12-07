const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('bg-white/95');
                navbar.classList.remove('bg-white/90');
            } else {
                navbar.classList.add('bg-white/90');
                navbar.classList.remove('bg-white/95');
            }
        });

        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                // Close mobile menu if open
                mobileMenu.classList.add('hidden');
            });
        });

        // Back to Top Button
        const backToTopBtn = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.classList.remove('opacity-0', 'invisible');
                backToTopBtn.classList.add('opacity-100', 'visible');
            } else {
                backToTopBtn.classList.add('opacity-0', 'invisible');
                backToTopBtn.classList.remove('opacity-100', 'visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Countdown Timer
        function updateCountdown() {
            const now = new Date().getTime();
            const tomorrow = new Date();
            tomorrow.setHours(24, 0, 0, 0); // Set to midnight tomorrow
            const distance = tomorrow - now;

            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        }

        // Update countdown every second
        setInterval(updateCountdown, 1000);
        updateCountdown(); // Initial call

        // Intersection Observer for Animation on Scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-slide-up');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.group').forEach(el => {
            observer.observe(el);
        });

        // Add loading animation when page loads
        window.addEventListener('load', () => {
            document.body.classList.add('animate-fade-in');
        });

        // Product Quick View Modal (Simple Implementation)
        document.querySelectorAll('.group button').forEach(btn => {
            if (btn.textContent.includes('Quick View')) {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    // Simple alert for demo - in real app, this would open a modal
                    alert('Quick View Modal - In a real application, this would show product details in a modal window.');
                });
            }
        });

        // Add to Cart Animation
        document.querySelectorAll('.fa-cart-plus').forEach(btn => {
            btn.parentElement.addEventListener('click', (e) => {
                e.preventDefault();
                const button = e.target.closest('button');
                button.classList.add('animate-bounce');
                
                // Create floating cart icon animation
                const floatingIcon = document.createElement('div');
                floatingIcon.innerHTML = '<i class="fas fa-check-circle text-green-500 text-2xl"></i>';
                floatingIcon.className = 'fixed z-50 pointer-events-none animate-bounce';
                floatingIcon.style.left = e.clientX + 'px';
                floatingIcon.style.top = e.clientY + 'px';
                
                document.body.appendChild(floatingIcon);
                
                // Remove the floating icon after animation
                setTimeout(() => {
                    floatingIcon.remove();
                    button.classList.remove('animate-bounce');
                }, 1000);
                
                // Show success message (in real app, this would update cart count)
                console.log('Product added to cart!');
            });
        });

        // Newsletter Subscription
        document.querySelector('input[type="email"]').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleNewsletterSubmit();
            }
        });

        document.querySelector('input[type="email"]').nextElementSibling.addEventListener('click', handleNewsletterSubmit);

        function handleNewsletterSubmit() {
            const email = document.querySelector('input[type="email"]').value;
            if (email && isValidEmail(email)) {
                // In real app, this would make an API call
                alert('Terima kasih! Anda telah berhasil subscribe newsletter.');
                document.querySelector('input[type="email"]').value = '';
            } else {
                alert('Silakan masukkan email yang valid.');
            }
        }

        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        // Add hover effects for better UX
        document.querySelectorAll('.group').forEach(group => {
            group.addEventListener('mouseenter', () => {
                group.style.transform = 'translateY(-8px)';
            });
            
            group.addEventListener('mouseleave', () => {
                group.style.transform = 'translateY(0)';
            });
        });

        // Performance optimization - lazy loading for images
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }

        