const searchTerm = document.getElementById("search");
const result = document.getElementById("result");
initView()

function initView() {
    searchTerm.innerText = "en: " + localStorage.getItem("searchTerm");
    result.innerText = "de: " + localStorage.getItem("translation");
}