class ComponentLoader {
    constructor() {
        this.components = {};
    }

    async loadComponent(name, elementId) {
        try {
            const response = await fetch(`components/${name}.html`);
            const html = await response.text();
            document.getElementById(elementId).innerHTML = html;
            this.components[name] = html;
            
            const scripts = document.getElementById(elementId).getElementsByTagName('script');
            for (let script of scripts) {
                eval(script.innerHTML);
            }
            
            this.initEvents();
        } catch (error) {
            console.error(`Error loading component ${name}:`, error);
        }
    }

    initEvents() {
        const userDropdown = document.getElementById("userDropdown");
        if (userDropdown) {
            userDropdown.addEventListener("click", function() {
                const dropdown = document.getElementById("dropdownMenu");
                dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
            });
        }

        window.addEventListener("click", function(e) {
            if (!e.target.closest("#userDropdown")) {
                const dropdown = document.getElementById("dropdownMenu");
                if (dropdown) dropdown.style.display = "none";
            }
        });

        document.querySelectorAll('.sidebar-left li').forEach(li => {
            li.addEventListener('click', function() {
                document.querySelectorAll('.sidebar-left li').forEach(el => el.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
}

const componentLoader = new ComponentLoader();