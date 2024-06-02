document.getElementById('menu-icon').addEventListener('click', () => {
    const navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(e.target.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        if (window.innerWidth <= 768) {
            document.getElementById('nav-links').style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('active');
    });

    document.querySelectorAll('.section').forEach(section => {
        section.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});

const imageWrapper = document.querySelector('.image-wrapper');
const profileImage = document.querySelector('.profile-image');

let isDragging = false;
let startX, startY, initialLeft, initialTop, scale = 1;

imageWrapper.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    initialLeft = profileImage.offsetLeft;
    initialTop = profileImage.offsetTop;
    imageWrapper.style.cursor = 'grabbing';
});

imageWrapper.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        profileImage.style.left = `${initialLeft + dx}px`;
        profileImage.style.top = `${initialTop + dy}px`;
    }
});

imageWrapper.addEventListener('mouseup', () => {
    isDragging = false;
    imageWrapper.style.cursor = 'grab';
});

imageWrapper.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
        scale *= 1.1;
    } else {
        scale /= 1.1;
    }
    profileImage.style.transform = `scale(${scale})`;
});
