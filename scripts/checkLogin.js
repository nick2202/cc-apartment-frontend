window.onload = function() { transformButtons()};

function transformButtons() {
    var registerBtn = document.getElementById("register");
    registerBtn.innerHTML = "Profil";
    var loginBtn = document.getElementById("login");
    loginBtn.innerHTML = "Logout";
    loginBtn.setAttribute("href", "/")
}