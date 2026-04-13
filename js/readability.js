document.addEventListener("DOMContentLoaded", () => {
    // Inject the HTML directly into the Navbar!
    const navLinks = document.querySelector('.nav-links');
    if(navLinks) {
        const widgetHtml = `
            <li class="readability-nav-item">
                <div class="readability-dropdown">
                    <button class="nav-theme-toggle" title="Theme Settings">⚙️ Theme</button>
                    <div class="readability-dropdown-content">
                        <div class="rw-group">
                            <span class="rw-title">Theme</span>
                            <div class="rw-controls">
                                <button class="rw-btn" data-r-theme="light">Light</button>
                                <button class="rw-btn" data-r-theme="dark">Dark</button>
                                <button class="rw-btn" data-r-theme="system">Auto</button>
                            </div>
                        </div>
                        <div class="rw-group">
                            <span class="rw-title">Font Size</span>
                            <div class="rw-controls">
                                <button class="rw-btn active" data-r-font="default">A</button>
                                <button class="rw-btn" data-r-font="large" style="font-size:15px">A</button>
                                <button class="rw-btn" data-r-font="huge" style="font-size:17px">A</button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        `;
        navLinks.insertAdjacentHTML('beforeend', widgetHtml);
    }

    // 2. Logic Functions
    const htmlElem = document.documentElement;

    function applyTheme(theme) {
        if (theme === 'system') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            htmlElem.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        } else {
            htmlElem.setAttribute('data-theme', theme);
        }
        localStorage.setItem('corelume_theme', theme);
        document.querySelectorAll('[data-r-theme]').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-r-theme') === theme);
        });
    }

    function applyFont(font) {
        htmlElem.setAttribute('data-font', font);
        localStorage.setItem('corelume_font', font);
        document.querySelectorAll('[data-r-font]').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-r-font') === font);
        });
    }

    // 3. Attach Listeners
    document.querySelectorAll('[data-r-theme]').forEach(btn => {
        btn.addEventListener('click', () => applyTheme(btn.getAttribute('data-r-theme')));
    });

    document.querySelectorAll('[data-r-font]').forEach(btn => {
        btn.addEventListener('click', () => applyFont(btn.getAttribute('data-r-font')));
    });

    // Toggle Dropdown Mobile
    const toggleBtn = document.querySelector('.nav-theme-toggle');
    if(toggleBtn) {
        toggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const content = document.querySelector('.readability-dropdown-content');
            content.classList.toggle('show');
        });
    }

    // 4. Initial Load state
    const savedTheme = localStorage.getItem('corelume_theme') || 'system'; 
    const savedFont = localStorage.getItem('corelume_font') || 'default';

    applyTheme(savedTheme);
    applyFont(savedFont);

    // Listen for system theme changes if set to system
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (localStorage.getItem('corelume_theme') === 'system') {
            htmlElem.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
    });
});
