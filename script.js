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

    // Play audio when she clicks "Yes"
    audio.play()
        .then(() => {
            console.log("Music playing...");
        })
        .catch(error => {
            console.log("Autoplay blocked, requires user interaction", error);
        });

    // Redirect to yes.html after 1 second delay (smooth transition)
    setTimeout(() => {
        window.location.href = "yes.html";
    }, 1000);
}