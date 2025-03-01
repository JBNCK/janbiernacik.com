console.log("Hello, user!");
var menuToggled = 0;
var documentLanguage = document.documentElement.lang;
var menuUrl = "/assets/shared/en/menu.html";
var navbarUrl = "/assets/shared/en/navbar.html";
var footerUrl = "/assets/shared/en/footer.html";

switch(documentLanguage) {
    case 'de-DE':
    case 'de-AT':
    case 'de-CH':
    case 'de-BE':
    case 'de-LI':
    case 'de-LU':
    case 'de':
        var menuUrl = "/assets/shared/de/menu.html";
        var navbarUrl = "/assets/shared/de/navbar.html"
        var footerUrl = "/assets/shared/de/footer.html";
        break;
}

$(document).ready(function(){
    // ↓ This is severely retarded and will be addressed in the future
    $(".navbar").load(navbarUrl, function() {
        bindAjax();
    });

    $(".menu").load(menuUrl, function() {
        bindAjax();
    });

    $("footer").load(footerUrl, function() {
        bindAjax();
    });

    window.addEventListener('popstate', function() {
        loadContent(window.location.pathname);
    });

    $("main").css({opacity: '100%'});
});

function bindAjax() {
    $(".ajax-button").off("click").on("click", function(event){
        event.preventDefault();
        var pageUrl = $(this).attr("href");
        loadContent(pageUrl);
    });
}

function loadContent(url) {
    $("main").css({opacity: '0'});
    $.ajax({
        url: url,
        success: function(response) {
            console.log("Loading Content");
            var tempDiv = $('<div>').html(response);
            var title = tempDiv.find('title').text();
            var pageContent = tempDiv.find(".page-content").html(); // Copy pasted from ChatGPT, no idead what this does but the site doesn't work without it
            $(".page-content").html(pageContent);
            $("footer").load(footerUrl, function() {
                bindAjax();
            });
            $('html, body').scrollTop(0);
            $('title').text(title);
            window.history.replaceState(null, title, url);
            $("main").css({opacity: '100%'});
            var $currentPageContent = $(".page-content");
            $currentPageContent.removeData();
            bindAjax();
            if (menuToggled != 0) {
                $('.menu').css({visibility: 'hidden', marginTop: '-150px'});
                $('.menu-collapser').css({visibility: 'hidden', opacity: '0', backdropFilter: 'blur(0)', webkitBackdropFilter: 'blur(0)'});
                $('.menu-toggle i').removeClass('active');
                $('body').css({overflow: 'auto'});
                menuToggled = 0;
            }
        },
        error: function() {
            console.log("Error loading page: " + url);
            $("main").css({opacity: '100%'});
        }
    });
}

function toggleMenu() {
    if (menuToggled == 0) {
        $('.menu').css({visibility: 'visible', marginTop: '0'});
        $('.menu-collapser').css({visibility: 'visible', opacity: '100%', backdropFilter: 'blur(10px)', webkitBackdropFilter: 'blur(10px)'});
        $('.menu-toggle i').addClass('active');
        $('body').addClass('active');
        menuToggled = 1;
    }
    else {
        $('.menu').css({visibility: 'hidden', marginTop: '-150px'});
        $('.menu-collapser').css({visibility: 'hidden', opacity: '0', backdropFilter: 'blur(0)', webkitBackdropFilter: 'blur(0)'});
        $('.menu-toggle i').removeClass('active');
        $('body').removeClass('active');
        menuToggled = 0;
    }
}

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