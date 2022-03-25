const input = document.getElementById("search");
addListener(input)

function addListener(input) {
    input.addEventListener("keyup", function(event) {
        handleOnEnter(event, input);
    });
}

function handleOnEnter(event, input) {
    if (event.code === "Enter") {
        console.log("success");
        navigateToResultPage(input);
    }
}

function navigateToResultPage(input) {
    localStorage.setItem("searchTerm", input.value)
    location.replace("result.html")
}