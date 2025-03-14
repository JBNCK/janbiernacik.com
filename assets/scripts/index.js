var documentLanguage = document.documentElement.lang;
var userLangDir = "en/";
switch(documentLanguage) {
    case 'de':
        userLangDir = "de/";
        break;
}
var assetPath = "/assets/shared/" + userLangDir;

$(document).ready(function() {
    $("#background-elements").load(assetPath + "background-elements.html", function() {
        setTimeout(function() {
            var randomNum1 = Math.floor(Math.random() * 100) + 1;
            var randomNum2 = Math.floor(Math.random() * 100) + 1;
            var randomNum3 = Math.floor(Math.random() * 100) + 1;
            var randomNum4 = Math.floor(Math.random() * 100) + 1;
            $("#background-element-1").css({top: randomNum1 + "svh", left: randomNum2 + "%", opacity: "100%"});
            $("#background-element-2").css({top: randomNum3 + "svh", left: randomNum4 + "%", opacity: "100%"});
        }, 500);
    });
    $("footer").load(assetPath + "footer.html");
    $("#menu").load(assetPath + "menu.html");
    $("#navbar").load(assetPath + "navbar.html");

    $("main").css({opacity: "100%"});
});