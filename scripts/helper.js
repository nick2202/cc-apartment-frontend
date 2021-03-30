function postRequest(endpoint, values, nextPage) {
    fetch(BASE_URL + endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
    }).then(res => {
        if (res.ok) {
            console.log("SUCC")
            console.log(res)
            res.json()
                .then(data => {
                console.log(JSON.stringify(data))
                console.log(data._id)
                document.cookie = "entityId=" + data._id;
            })
                .then(document.location.href = nextPage)
        } else {
            console.log("Not SUCC")
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
                console.log("SUCC")
                console.log(res)
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
                console.log(res)
                res.json().then(data => {
                    console.log(JSON.stringify(data))
                    console.log(data.n)
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
                console.log(res)
                return res.json()

                // .then(document.location.href = nextPage)
            } else {
                console.log("Not SUCC")
            }
        })
        .then(data => {
            console.log(JSON.stringify(data))
            console.log(data)
            return data
        })
        .catch(err => console.trace())
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
}
