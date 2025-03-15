var nameGen = 0;
var nameLetters = -7;
var menuOpen = 0;
var menuLock = 0;

$(document).ready(function() {
    setInterval(function() {
        var randomNum1 = Math.floor(Math.random() * 100) + 1;
        var randomNum2 = Math.floor(Math.random() * 100) + 1;
        var randomNum3 = Math.floor(Math.random() * 100) + 1;
        var randomNum4 = Math.floor(Math.random() * 100) + 1;
        $("#background-element-1").css({top: randomNum1 + "svh", left: randomNum2 + "%"});
        $("#background-element-2").css({top: randomNum3 + "svh", left: randomNum4 + "%"});
    }, 5000);

    function nameRandomizer(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }

    nameChangeInterval = setInterval(function() {
        if (nameGen < 20) {
            $("#home-page-banner-name").text(nameRandomizer(nameLetters));
        } else {
            $("#home-page-banner-name").text("Jan Biernacik");
            clearInterval(nameChangeInterval);
        }
        nameGen = nameGen + 1;
        nameLetters = nameLetters + 1;
    }, 70);

    setInterval(function() {
        $("#home-page-banner-name").css({borderRight: '4px solid var(--text-paragraph)'});
        setTimeout(function() {
            $("#home-page-banner-name").css({borderRight: '0px solid var(--text-paragraph)'});
        }, 1000);
    }, 2000);
});

$(document).on('scroll', function() {
    var scrollPosition = $(document).scrollTop();
    if (scrollPosition > 80) {
        $('#navbar').css({visibility: 'visible', opacity: "100%"});
    } else {
        $('#navbar').css({visibility: 'hidden', opacity: "0"});
    }
});

function loadGitHubRepos() {
    $.getJSON("//api.github.com/users/JBNCK/repos", function(data) {
        var items = '';
        $.each(data, function(key, value) {
            items += '<a class="repo-list-item-wrapper" href="' + value.html_url + '"><div class="repo-list-item">';
            items += '<h3 class="main-section-subtitle">' + value.name + '</h3>';
            items += '<p>' + value.description + '<p>';
            items += '</div></a>';
        })
        $('.repo-list').html(items);
    });
}

function menuToggle() {
    if (menuLock != 1) {
        if (menuOpen != 1) {
            document.ontouchmove = function (e) {
                e.preventDefault();
            }
            menuLock = 1;
            $("body").css({overflowY: "hidden"});
            $("#menu").css({visibility: "visible", backdropFilter: "blur(10px)", webkitBackdropFilter: "blur(10px)", background: "var(--background-transparent)"});
            $("#menu-items").css({top: "11svh", marginLeft: "0"});
            $(".menu-link").css({fontSize: "x-large", marginBottom: "8px"});
            $(".menu-close-button").css({opacity: "100%"});
            setTimeout(function() {
                $("#menu-items").css({top: "10svh"});
                $(".menu-link").css({marginBottom: "4px"});
                setTimeout(function() {
                    menuOpen = 1;
                    menuLock = 0;
                }, 300);
            }, 300);
        } if (menuOpen == 1) {
            document.ontouchmove = function (e) {
                return true;
            }
            menuLock = 1;
            $(".menu-link").css({fontSize: "0", marginBottom: "0"});
            $("#menu-items").css({top: "6px", marginLeft: "10px"});
            $("#menu").css({visibility: "hidden", backdropFilter: "blur(0px)", webkitBackdropFilter: "blur(0px)", background: "rgba(0,0,0,0)"});
            $("body").css({overflowY: "auto"});
            $(".menu-close-button").css({opacity: "0"});
            setTimeout(function() {
                menuOpen = 0;
                menuLock = 0;
            }, 300);
        }
    }
}

$(document).ready(function() {
    $("#menu").off("click").on("click", function() {
        menuToggle();
    });
});