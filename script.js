// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal Functionality
document.querySelectorAll('.btn-modal').forEach(button => {
    button.addEventListener('click', function() {
        this.nextElementSibling.style.display = 'block';
    });
});

document.querySelectorAll('.btn-close-modal').forEach(button => {
    button.addEventListener('click', function() {
        this.parentElement.parentElement.style.display = 'none';
    });
});
