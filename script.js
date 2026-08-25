// Add basic interactivity to the dashboard

document.addEventListener('DOMContentLoaded', () => {
    // Navigation active state handling
    const navItems = document.querySelectorAll('.nav-menu .nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add to clicked
            item.classList.add('active');
        });
    });

    // Simple search interaction (just visual for now)
    const searchInput = document.querySelector('.search-bar input');
    const searchIcon = document.querySelector('.search-bar i');

    searchInput.addEventListener('focus', () => {
        searchIcon.style.color = 'var(--accent-primary)';
    });

    searchInput.addEventListener('blur', () => {
        if (!searchInput.value) {
            searchIcon.style.color = 'var(--text-muted)';
        }
    });

    // Action buttons ripple effect or simple alert
    const actionBtns = document.querySelectorAll('.action-btn');
    
    actionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const actionName = btn.querySelector('span').textContent;
            console.log(`Action clicked: ${actionName}`);
            // You could add a modal open logic here
        });
    });

    // Notification click
    const notifBtn = document.querySelector('.icon-btn');
    notifBtn.addEventListener('click', () => {
        const dot = notifBtn.querySelector('.notification-dot');
        if (dot.style.display !== 'none') {
            dot.style.display = 'none';
        } else {
            dot.style.display = 'block';
        }
    });
});
