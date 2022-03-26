console.log("start")
const input = document.getElementById("searchinput")
input.addEventListener("keyup", event => onEnter(event, input))

function onEnter(event, input) {
    if (event.code === "Enter") {
        console.log("enter")
            navigateToResultPage(input)
        }
}

async function navigateToResultPage(input) {
    const translation = await getTranslationFor(input.value)
    localStorage.setItem("searchTerm", input.value)
    localStorage.setItem("translation", translation)
    location.replace("result.html")
}

async function getTranslationFor(searchTerm) {
    const json = await fetchTranslation(searchTerm)
    return await JSON.parse(json).TranslatedContent
}

async function fetchTranslation(searchTerm) {
    return await fetch(
        getUrl(searchTerm),
        { headers: {'Content-Type': 'application/x-www-form-urlencoded'} }
    ).then(
        response => response.json()
    ).then(
        json => JSON.stringify(json)
    )
}

function getUrl(searchTerm) {
    const corsProxyUrl = 'https://tzcorsproxy.herokuapp.com/'
    const translateUrl = `https://languageomega.herokuapp.com/json?lang_one=en&lang_two=de&content=${searchTerm}`
    return corsProxyUrl + translateUrl
}