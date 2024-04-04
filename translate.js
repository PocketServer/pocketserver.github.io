function toggleLanguageList() {
    var languageList = document.getElementById("language-list");
    if (languageList.style.display === "none") {
        languageList.style.display = "block";
    } else {
        languageList.style.display = "none";
    }
}

function redirectToLanguage(url) {
    window.location.href = url;
}