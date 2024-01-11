nav = document.getElementById("nav");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 20) {
        nav.className = "nav-bar show"
    } else {
        nav.className = "nav-bar hide"
    }
};

window.addEventListener("scroll", myScrollFunc);