const searchTerm = document.getElementById("search");
const result = document.getElementById("result");
initView()

function initView() {
    searchTerm.innerText = localStorage.getItem("searchTerm");
    result.innerText = "english : " + localStorage.getItem("searchTerm");
}