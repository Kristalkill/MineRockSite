function hamburger() {
    const hamburgerButton = document.getElementById('hamburger-button');
    const headerLinks = document.querySelectorAll('header .container .menu a');
    headerLinks.forEach((link) => {
        link.addEventListener('click', (e) => hamburgerButton.checked = false);
    })
}

export default hamburger()