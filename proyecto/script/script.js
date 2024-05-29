// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const searchInput = document.querySelector('.search input');

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            alert(`Buscar: ${searchInput.value}`);
        }
    });
});

window.onscroll = function() {
    var backToTopButton = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

