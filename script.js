const photoCards = document.querySelectorAll('.photo-card');
let angle = 0;

// Function to rotate images
function rotateImages() {
    photoCards.forEach((photo, index) => {
        const rotationAngle = angle + index * 45;
        photo.style.transform = `rotateY(${rotationAngle}deg) translateZ(250px)`;

        // Hide photos on the back side
        const normalizedAngle = (rotationAngle % 360 + 360) % 360;
        photo.style.opacity = normalizedAngle > 90 && normalizedAngle < 270 ? 0 : 1;
    });
}

// Interval for automatic rotation
setInterval(() => {
    angle += 45;
    rotateImages();
}, 2000);

// Loader
window.addEventListener("load", () => {
    document.getElementById("loaderOverlay").classList.add("hidden");
});

// Modal functionality
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");

photoCards.forEach((photo) => {
    photo.addEventListener("click", () => {
        modalImage.style.backgroundImage = photo.style.backgroundImage;
        modal.classList.add("show");
    });
});

// Close modal on click
modal.addEventListener("click", () => {
    modal.classList.remove("show");
});

// Smoke effect based on mouse movement
document.body.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    document.body.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 0, 150, 0.2), transparent 60%), #000`;
});
