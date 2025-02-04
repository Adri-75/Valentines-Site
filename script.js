document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById("noBtn");

    noBtn.addEventListener("mouseover", function () {
        const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-music");

    // Check if the device is a mobile device
    function isMobile() {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    }

    if (!isMobile()) {
        // If it's a desktop, autoplay music
        audio.play().catch(error => console.log("Autoplay blocked on desktop:", error));
    }
});

// Function to toggle music manually on mobile
function toggleMusic() {
    const audio = document.getElementById("background-music");

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}