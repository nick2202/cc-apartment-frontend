window.onload = function() { transformButtons()};

function transformButtons() {
    const token = getCookie("token");
    if (token) {
        var registerBtn = document.getElementById("register");
        registerBtn.innerHTML = "Profil";
        registerBtn.setAttribute("href", "../shared/matches.html")
        var loginBtn = document.getElementById("login");
        loginBtn.innerHTML = "Logout";
        loginBtn.setAttribute("onclick", "logout()");
        loginBtn.removeAttribute("href");
    }
};