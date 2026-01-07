function showMenu(category) {
            const allMenus = document.querySelectorAll('.menu-items');
            allMenus.forEach(menu => menu.classList.remove('active'));

            const allTabs = document.querySelectorAll('.menu-tab');
            allTabs.forEach(tab => tab.classList.remove('active'));

            document.getElementById(category).classList.add('active');
            event.target.classList.add('active');
        }

        function scrollToSection(id) {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }

        function handleContact(event) {
            event.preventDefault();
            const name = document.getElementById('cname').value;
            const email = document.getElementById('cemail').value;

            const form = event.target;
            const msg = document.createElement('div');
            msg.style.cssText = `
                background:#4CAF50;
                color:#fff;
                padding:12px;
                border-radius:5px;
                margin-top:15px;
                text-align:center;
                font-weight:bold;
            `;
            msg.textContent = `✓ Thank you, ${name}. Your message has been noted.`;
            form.insertAdjacentElement('afterend', msg);
            form.reset();
            setTimeout(() => msg.remove(), 5000);
        }

        // Intersection Observer to handle "Scroll to Reveal" animation
        document.addEventListener("DOMContentLoaded", function() {
            const scrollElements = document.querySelectorAll(".js-scroll");

            const elementInView = (el, dividend = 1) => {
                const elementTop = el.getBoundingClientRect().top;
                return (
                    elementTop <=
                    (window.innerHeight || document.documentElement.clientHeight) / dividend
                );
            };

            const displayScrollElement = (element) => {
                element.classList.add("animate-in");
            };

            const handleScrollAnimation = () => {
                scrollElements.forEach((el) => {
                    if (elementInView(el, 1.1)) { // 1.1 means trigger slightly before bottom
                        displayScrollElement(el);
                    }
                });
            };

            // Run once on load in case elements are already visible
            handleScrollAnimation();

            // Run on scroll
            window.addEventListener("scroll", () => {
                handleScrollAnimation();
            });
        });