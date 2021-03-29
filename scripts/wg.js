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
    let alterArray= [];
    Array.from(alterNodeList).forEach(element => {
        alterArray.push(element.value)
    })
    let alterObject = {alter: alterArray}
    const formData = new FormData(registerForm);
    let jsonForm = Object.fromEntries(formData);
    Object.assign(jsonForm, alterObject)
    const id = getCookie("entityId")
    postRequestWithId(endpoint, id, jsonForm, nextPage);
}

function createHobbies(formId, endpoint) {
    console.log("fired")
    const hobbiesNodeList = document.getElementsByTagName("input");
    console.log(hobbiesNodeList)
    let hobbiesMap = new Map([]);
    Array.from(hobbiesNodeList).forEach(element => {
        if (element.checked) {
            hobbiesMap.set(element.name, parseFloat(element.value))
        }
    })
    console.log(hobbiesMap)
    let jsonForm = {hobbies: [Object.fromEntries(hobbiesMap)]}
    console.log(jsonForm)
    const id = getCookie("entityId")
    patchRequestWithId(endpoint, id, jsonForm);
}

function getInputItems(inputs) {
    var inputItems = {};
    Array.from(inputs).forEach(function(item) {
        inputItems[item.name] = inputItems[item.value];
    });
    return JSON.stringify(inputItems);
}

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

