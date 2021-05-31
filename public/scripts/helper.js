function postRequest(endpoint, values, nextPage) {
    fetch(BASE_URL + endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
    }).then(res => {
        if (res.ok) {
            res.json()
                .then(data => {
                    document.cookie = "entityId=" + data._id
                })
                .then(document.location.href = nextPage)
        } else {
            console.log("ERROR")
        }
    }).catch(err => console.log("ERROR"))
};

function postRequestWithId(endpoint, entityId, values) {
    fetch(BASE_URL + endpoint + "/" + entityId, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
    })
        .then(res => {
            if (res.ok) {
                res.json().then(data => {
                    console.log(JSON.stringify(data))
                    console.log(data)
                })

            } else {
                console.log("Not SUCC")
            }
        })
        .catch(err => console.trace())
};

function patchRequestWithId(endpoint, entityId, values) {
    fetch(BASE_URL + endpoint + "/" + entityId, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
    })
        .then(res => {
            if (res.ok) {
                console.log("SUCC")
                res.json()
                    .then(data => {
                    console.log("SUCC")
                })
            } else {
                console.log("Not SUCC")
            }
        })
        .catch(err => console.trace())
};

function getRequestWithId(endpoint, entityId) {
    return fetch(BASE_URL + endpoint + "/" + entityId, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(res => {
            if (res.ok) {
                console.log("SUCC")
                return res.json()

                // .then(document.location.href = nextPage)
            } else {
                console.log("Not SUCC")
            }
        })
        .then(data => {
            return data
        })
        .catch(err => console.trace())
};

function requestWithToken(method, endpoint, token) {
    return fetch(BASE_URL + endpoint, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
    })
        .then(res => {
            if (res.ok) {
                console.log("SUCC")
                return res.json()
            } else {
                console.log("Not SUCC")
            }
        })
        .then(data => {
            return data;
        })
        .catch(err => console.trace())
};

function logout(){
    document.cookie = "token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;sameSite=strict;";
    console.log("logged out")
    document.location.href = "/";
};

/**
 * Get the value of a cookie with specified name
 * @param   {String}    cname   The name of the cookie to find
 * @return  {String}            The value of the cookie
 */
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};


