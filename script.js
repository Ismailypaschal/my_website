const hamburger = document.getElementById("hamburger");
const x = document.getElementById("x");
const mobile_navbar = document.getElementById("mobile_navbar");

function showNavBar() {
        // defensive: elements might not be present on every page
        if (hamburger) hamburger.classList.toggle("hide");
        if (x) x.classList.toggle("show");
        if (mobile_navbar) mobile_navbar.classList.toggle("show");
}

// highlight active link in navigation
function highlightActiveLink() {
    const links = Array.from(document.querySelectorAll('.list_items a, .mobile_listitems a'));
    const current = window.location.pathname.split('/').pop() || 'index.html';
    links.forEach(link => {
        const href = (link.getAttribute('href') || '').split('/').pop();
        if (!href) return;
        if (href === current) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    highlightActiveLink();
});
