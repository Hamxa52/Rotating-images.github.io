const photoCards = document.querySelectorAll('.photo-card');
        let angle = 0;

        function rotateImages() {
            photoCards.forEach((photo, index) => {
                const rotationAngle = angle + index * 45;
                photo.style.transform = `rotateY(${rotationAngle}deg) translateZ(250px)`;

                const normalizedAngle = (rotationAngle % 360 + 360) % 360;
                photo.style.opacity = normalizedAngle > 90 && normalizedAngle < 270 ? 0 : 1;
            });
        }

        setInterval(() => {
            angle += 45;
            rotateImages();
        }, 2000);

        // Event handling for drag on desktops and touch on mobile
        let startX, isDragging = false;

        function startRotate(event) {
            isDragging = true;
            startX = event.clientX || event.touches[0].clientX;
        }

        function rotateMove(event) {
            if (isDragging) {
                const currentX = event.clientX || event.touches[0].clientX;
                const deltaX = currentX - startX;
                angle -= deltaX * 0.1;
                rotateImages();
                startX = currentX;
            }
        }

        function endRotate() {
            isDragging = false;
        }

        const gallery = document.querySelector('.photo-gallery');
        gallery.addEventListener('mousedown', startRotate);
        gallery.addEventListener('mousemove', rotateMove);
        document.addEventListener('mouseup', endRotate);
        gallery.addEventListener('touchstart', startRotate);
        gallery.addEventListener('touchmove', rotateMove);
        gallery.addEventListener('touchend', endRotate);

        window.addEventListener("load", () => {
            document.getElementById("loaderOverlay").classList.add("hidden");
        });