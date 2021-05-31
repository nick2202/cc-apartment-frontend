function createEntity(elementId, endpoint, nextPage) {
    const registerForm = document.getElementById(elementId);
    const formData = new FormData(registerForm);
    const jsonForm = Object.fromEntries(formData);
    postRequest(endpoint, jsonForm, nextPage);
}

function createKriterienBew(formId, endpoint, nextPage) {
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

function createKriterienWg(formId, endpoint, nextPage) {
    const registerForm = document.getElementsByClassName("select");
    const alterNodeList = document.getElementsByName("alter");
    let alterArray = [];
    Array.from(alterNodeList).forEach(element => {
        alterArray.push(element.value)
    });
    let kriterienMap = new Map([]);
    Array.from(registerForm).forEach(element => {
        for (var option of element.options) {
            if (option.selected) {
                if (!kriterienMap.has(element.name)) {
                    kriterienMap.set(element.name, [option.value])
                } else {
                    kriterienMap.get(element.name).push(option.value)
                }
            }
        }
    });
    let alterObject = {alter: alterArray};
    let jsonForm = Object.fromEntries(kriterienMap);
    Object.assign(jsonForm, alterObject);
    const id = getCookie("entityId");
    postRequestWithId(endpoint, id, jsonForm);
    document.location.href = nextPage;
}

function createHobbiesInteressen(hobOrInt, endpoint, nextPage) {
    const hobIntNodeList = document.getElementsByTagName("input");
    let hobIntMap = new Map([]);
    Array.from(hobIntNodeList).forEach(element => {
        if (element.checked) {
            hobIntMap.set(element.name, parseFloat(element.value))
        }
    })
    let jsonForm = {[hobOrInt]: [Object.fromEntries(hobIntMap)]}
    const id = getCookie("entityId")
    patchRequestWithId(endpoint, id, jsonForm);
    document.location.href = nextPage;
};

function createAccount(endpoint, nextPage) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordRepeat = document.getElementById("password-repeat").value;
    const id = getCookie("entityId");
    if (password === passwordRepeat) {
        let jsonForm = {
            email: email,
            password: password,
            profileId: id
        }
        postRequestWithId(endpoint, "", jsonForm)
        document.location.href = nextPage;
    } else {
        throw new Error("Passwörter stimmen nicht überein")
    }
};

