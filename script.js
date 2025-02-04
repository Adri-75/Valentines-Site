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

    // If the user clicked "Yes", store the play state
    if (sessionStorage.getItem("playMusic") === "true") {
        audio.play().catch(error => console.log("Playback error:", error));
    }
});

// Function to start music & redirect from valentine.html
function playMusicAndRedirect() {
    sessionStorage.setItem("playMusic", "true"); // Store that music should play
    window.location.href = "yes.html"; // Redirect after storing state
}