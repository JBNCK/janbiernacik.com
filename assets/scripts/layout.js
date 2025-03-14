var nameGen = 0;
var nameLetters = -7;

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