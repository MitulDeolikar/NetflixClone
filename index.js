document.addEventListener("DOMContentLoaded", function () {
    const langBtn = document.getElementById("langBtn");
    const langDropdown = document.getElementById("langDropdown");

    langBtn.addEventListener("click", function () {
        langDropdown.style.display = langDropdown.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function (event) {
        if (!event.target.matches("#langBtn") && !event.target.matches("#selectedLang")) {
            langDropdown.style.display = "none";
        }
    });
});

function changeLanguage(language) {
    document.getElementById("selectedLang").innerText = language;
    // Add logic to change the language as needed
}
