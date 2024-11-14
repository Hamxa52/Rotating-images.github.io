const photoCards = document.querySelectorAll('.photo-card');
let angle = 0;

// Function to rotate images
function rotateImages() {
    photoCards.forEach((photo, index) => {
        const rotationAngle = angle + index * 45;  // Adjusted for 45-degree spacing between images
        photo.style.transform = `rotateY(${rotationAngle}deg) translateZ(250px)`; // Applying the 3D transform

        // Hide photos on the back side
        const normalizedAngle = (rotationAngle % 360 + 360) % 360;  // Normalize angle to avoid negative values
        photo.style.opacity = normalizedAngle > 90 && normalizedAngle < 270 ? 0 : 1; // Hide back-facing images
    });
}

// Interval for automatic rotation
setInterval(() => {
    angle += 45;  // Increase angle to rotate by 45 degrees
    rotateImages();
}, 2000); // Update every 2 seconds

// Loader visibility control
window.addEventListener("load", () => {
    const loaderOverlay = document.getElementById("loaderOverlay");
    if (loaderOverlay) {
        loaderOverlay.classList.add("hidden");  // Hide the loader once the page is fully loaded
    }
});

// Modal functionality to view images in larger size
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");

photoCards.forEach((photo) => {
    photo.addEventListener("click", () => {
        const bgImage = getComputedStyle(photo).getPropertyValue('background-image');  // Get the background image
        modalImage.style.backgroundImage = bgImage;  // Set it as the modal image background
        modal.classList.add("show");  // Show the modal
    });
});

// Close modal when clicked
modal.addEventListener("click", () => {
    modal.classList.remove("show");  // Remove 'show' class to close the modal
});

// Smoke effect based on mouse movement
document.body.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    document.body.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 0, 150, 0.2), transparent 60%), #000`;  // Create the smoke effect based on mouse position
});

// Onload event to hide loader (redundant, already handled above)
window.onload = function() {
    const loaderOverlay = document.getElementById('loaderOverlay');
    if (loaderOverlay) {
        loaderOverlay.classList.add('hidden');  // Hide loader on page load
    }
};
