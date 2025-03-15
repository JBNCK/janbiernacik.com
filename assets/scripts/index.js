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
    $("#menu").load(assetPath + "menu.html", function() {
        var menuItems = "";
        $("main").find(".main-section").each(function() {
            var sectionTitle = "";
            var sectionName = "";
            var sectionPosition = "";
            sectionTitle = $(this).find("h1").text();
            sectionName = $(this).attr("name");
            sectionPosition = this.getBoundingClientRect();
            sectionPosition = sectionPosition.y - 80;
            console.log(sectionPosition);
            if (sectionTitle == "") {
                sectionTitle = sectionName;
            }
            menuItems += `<a class='menu-link clickable' onclick='$("html, body").animate({scrollTop: "${sectionPosition}"});'>${sectionTitle}</a>`
        });
        $("#menu-items").html(menuItems);
    });
    $("#navbar").load(assetPath + "navbar.html");

    $("main").css({opacity: "100%"});
});