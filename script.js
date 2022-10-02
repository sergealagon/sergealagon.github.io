//execute once per page reload
function oneTime() {
    var icon = document.getElementById("toggle");
    var page = document.body;

    //checks default theme set

    if (localStorage.getItem("theme") == null) {
        localStorage.setItem("theme", "light");
    }

    var theme = localStorage.getItem("theme");

    if (theme == "dark") {
        icon.className = "fa-regular fa-moon";
        page.className = "dark";
    }

    if (theme == "light") {
        icon.className = "fa-regular fa-sun";
        page.classList.remove("dark");
    }


}

function toggleTheme() {
    var theme = localStorage.getItem("theme");
    var icon = document.getElementById("toggle");
    var page = document.body;

    if (theme == "light") {
        page.className = "dark";
        icon.className = "fa-regular fa-moon";
        localStorage.setItem("theme", "dark");
    }

    if (theme == "dark") {
        icon.className = "fa-regular fa-sun";
        page.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
}