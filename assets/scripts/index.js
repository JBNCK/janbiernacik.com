console.log("Hello, user!");
let menuToggled = 0;

function toggleMenu() {
    if (menuToggled == 0) {
        document.getElementById("menu").style.display = "block";
        document.getElementById("menuCollapser").style.visibility = "visible";
        menuToggled = 1;
    }
    else {
        document.getElementById("menu").style.display = "none";
        document.getElementById("menuCollapser").style.visibility = "hidden";
        menuToggled = 0;
    }
}