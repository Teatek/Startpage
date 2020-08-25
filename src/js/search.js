document.querySelector('#search-bar').addEventListener('keypress', function (e) {
    let searchData = document.getElementById("search-bar").value;
    if (e.key === 'Enter' && searchData != "") {
        searchData = searchData
        window.location.href = "https://duckduckgo.com/?q="+ searchData.trim();
    }
});
