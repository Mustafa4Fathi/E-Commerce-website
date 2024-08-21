// Toggle Sign Out
function signOut() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("email");
    window.location.href = "index.html";
}

// On page load
window.onload = function() {
    if (localStorage.getItem("loggedIn")) {
        const email = localStorage.getItem("email");
        document.getElementById("email").value = email;
    } else {
        window.location.href = "login.html";
    }
};
