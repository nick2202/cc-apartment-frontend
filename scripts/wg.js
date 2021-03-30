function createEntity(elementId, endpoint, nextPage) {
    console.log("fired")
    const registerForm = document.getElementById(elementId);
    console.log("rf " + registerForm)
    const formData = new FormData(registerForm);
    const jsonForm = Object.fromEntries(formData);
    console.log("jf " + jsonForm)
    postRequest(endpoint, jsonForm, nextPage);
}

function createKriterien(formId, endpoint, nextPage) {
    console.log("fired")
    const registerForm = document.getElementById(formId);
    const alterNodeList = document.getElementsByName("alter");
    let alterArray = [];
    Array.from(alterNodeList).forEach(element => {
        alterArray.push(element.value)
    })
    let alterObject = {alter: alterArray};
    const formData = new FormData(registerForm);
    let jsonForm = Object.fromEntries(formData);
    Object.assign(jsonForm, alterObject);
    const id = getCookie("entityId");
    postRequestWithId(endpoint, id, jsonForm);
    document.location.href = nextPage;
}

function createHobbiesInteressen(hobOrInt, endpoint, nextPage) {
    console.log("fired")
    const hobIntNodeList = document.getElementsByTagName("input");
    console.log(hobIntNodeList)
    let hobIntMap = new Map([]);
    Array.from(hobIntNodeList).forEach(element => {
        if (element.checked) {
            hobIntMap.set(element.name, parseFloat(element.value))
        }
    })
    console.log(hobIntMap)
    let jsonForm = {[hobOrInt]: [Object.fromEntries(hobIntMap)]}
    console.log(jsonForm)
    const id = getCookie("entityId")
    patchRequestWithId(endpoint, id, jsonForm);
    document.location.href = nextPage;
};

function createAccount(endpoint, nextPage) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordRepeat = document.getElementById("password-repeat").value;
    if (password === passwordRepeat) {
        let jsonForm = {
            email: email,
            password: password
        }
        const id = getCookie("entityId");
        console.log("a");
        console.log(id);
        postRequestWithId(endpoint, id, jsonForm)
        document.location.href = nextPage;
    } else{
        throw new Error("Passwörter stimmen nicht überein")
    }
};


function clickThat() {
    console.log("fired")
    const jsonForm = {
        "strasse": "E-Strasse",
        "hausnummer": "23"
    };
    postRequest("/wg", jsonForm);
}

function cookieThat() {
    document.cookie = "aa=bb";
    console.log(getCookie("aa"));
}

