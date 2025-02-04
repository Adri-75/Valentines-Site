document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById("noBtn");

    noBtn.addEventListener("mouseover", function () {
        const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });
});

function playMusicAndRedirect() {
    const audio = document.getElementById("background-music");

    // Check if audio has already played before
    sessionStorage.setItem("musicPlayed", "true");

    // Play music only when she clicks "Yes"
    audio.play()
        .then(() => {
            console.log("Music is playing...");
            setTimeout(() => {
                window.location.href = "yes.html";
            }, 1500);
        })
        .catch(error => {
            console.log("iPhone Safari blocked autoplay. Redirecting anyway...", error);
            window.location.href = "yes.html"; // Redirect even if audio is blocked
        });
}

// Stop music from auto-playing when going back
document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-music");

    // If coming back to this page, prevent autoplay
    if (sessionStorage.getItem("musicPlayed") === "true") {
        audio.pause();
        audio.currentTime = 0;
    }
});