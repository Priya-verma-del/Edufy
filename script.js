document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("login-page").classList.add("fade-out");
    setTimeout(() => {
        document.getElementById("login-page").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    }, 500);
});