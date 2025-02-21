console.log("Hello, user!");
var menuToggled = 0;



$(document).ready(function(){
    var documentLanguage = document.documentElement.lang;
    switch(documentLanguage) {
        case 'de-DE':
        case 'de-AT':
        case 'de-CH':
        case 'de-BE':
        case 'de-LI':
        case 'de-LU':
        case 'de':
            $(".navbar").load("/de/shared/navbar.html");
            $(".menu").load("/de/shared/menu.html");
            break;
        
        default:
            $(".navbar").load("/en/shared/navbar.html");
            $(".menu").load("/en/shared/menu.html");
            break;
    }

    window.addEventListener('popstate', function() {
        loadContent(window.location.pathname);
    });
    bindAjax();

    $("main").css({opacity: '100%'});
    
});

function bindAjax() {
    $(".ajax-button").click(function(event){
        event.preventDefault();
        var pageUrl = $(this).attr("href");
        loadContent(pageUrl);
    });
}

function loadContent(url) {
    $.ajax({
        url: url,
        success: function(response) {
            var tempDiv = $('<div>').html(response);
            var title = tempDiv.find('title').text();
            var pageContent = tempDiv.find(".page-content").html();
            $(".page-content").html(pageContent);
            $('html, body').scrollTop(0);
            $('title').text(title);
            window.history.replaceState(null, title, url);
            bindAjax();
            $("main").css({opacity: '100%'});
        },
        error: function() {
            console.log("Error loading page: " + url);
        }
    });
}

function toggleMenu() {
    if (menuToggled == 0) {
        $('.menu').css({visibility: 'visible', marginTop: '0'});
        $('.menu-collapser').css({visibility: 'visible', opacity: '100%', backdropFilter: 'blur(10px)', webkitBackdropFilter: 'blur(10px)'});
        $('.menu-toggle i').addClass('active');
        $('body').css({overflow: 'hidden'});
        menuToggled = 1;
    }
    else {
        $('.menu').css({visibility: 'hidden', marginTop: '-150px'});
        $('.menu-collapser').css({visibility: 'hidden', opacity: '0', backdropFilter: 'blur(0)', webkitBackdropFilter: 'blur(0)'});
        $('.menu-toggle i').removeClass('active');
        $('body').css({overflow: 'auto'});
        menuToggled = 0;
    }
}