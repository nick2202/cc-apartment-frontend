async function getMatches() {
    // const id = getCookie("entityId")
    const matches = await getRequestWithId("/match/wg", "6062fbf95716955a1c1c4208");
    const bews = await getRequestWithId("/match/wg/getBews", "6062fbf95716955a1c1c4208");
    let containerMatches = document.getElementById("cont-matches");
    for (let i = 0; i < bews.length; i++) {
        let outerDiv = document.createElement("div")
        outerDiv.setAttribute("class", "col-xxl-8 offset-xxl-2 p-2 mb-2 justify-content-center o-div-ma")
        outerDiv.setAttribute("style", "background-color:#FFA500; border-radius: 10px; font-weight:bold")
        let row = document.createElement("div")
        row.setAttribute("class", "row")
        let innerLeftDiv = document.createElement("div")
        innerLeftDiv.setAttribute("class", "col p-2 mb-2 justify-content-center i-div-ma")
        let innerMiddleLeftDiv = document.createElement("div")
        innerMiddleLeftDiv.setAttribute("class", "col p-2 mb-2 justify-content-center i-div-ma")
        let innerMiddleRightDiv = document.createElement("div")
        innerMiddleRightDiv.setAttribute("class", "col p-2 mb-2 justify-content-center i-div-ma")
        let innerRightDiv = document.createElement("div")
        innerRightDiv.setAttribute("class", "col p-2 mb-2 justify-content-center i-div-ma")
        let buttonProfil = document.createElement("a")
        buttonProfil.setAttribute("class", "btn btn-outline-light sr-only mx-2")
        buttonProfil.innerHTML = "Profil"
        let buttonChat = document.createElement("a")
        buttonChat.setAttribute("class", "btn btn-outline-light sr-only")
        buttonChat.innerHTML = "Chat"
        let image = document.createElement('img');
        image.src = bews[i].bilderUrls[0]
        image.setAttribute("class", "pic-match")
        innerLeftDiv.appendChild(image)
        innerMiddleLeftDiv.innerHTML = "Score:" + "<br/>" + (Math.round(matches[i].faktor * 100)) + " %"
        innerMiddleRightDiv.innerHTML = bews[i].vorname + ", " + bews[i].matchingKriterien[0].alter[0]
        innerRightDiv.append(buttonChat, buttonProfil)
        row.appendChild(innerLeftDiv)
        row.appendChild(innerMiddleLeftDiv)
        row.appendChild(innerMiddleRightDiv)
        row.appendChild(innerRightDiv)
        outerDiv.appendChild(row)
        containerMatches.appendChild(outerDiv);

    }
}

