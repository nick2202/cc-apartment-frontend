function login(nextPage) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let jsonForm = {
        email: email,
        password: password
    }
    fetch(BASE_URL + "/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonForm)
    }).then(res => {
        if (res.status === 200) {
            console.log("SUCC")
            console.log(res)
            res.json()
                .then(data => {
                    console.log(data.token)
                    var expireDate = getExpireDate();
                    document.cookie = "token=" + data.token + "; expires=" + expireDate + ";path=/;sameSite=strict";
                })
                .then(document.location.href = nextPage)
        } else {
            console.log("Not SUCC")
        }
    }).catch(err => console.log("ERROR"))
};



function getExpireDate() {
    var now = new Date();
    var time = now.getTime();
    time += 3600 * 1000;
    now.setTime(time);
    return now.toUTCString();
}