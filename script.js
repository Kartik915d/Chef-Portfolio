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