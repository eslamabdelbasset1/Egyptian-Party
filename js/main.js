
function openNav() {
    document.getElementById("mySideNav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

$('a').click(function () {
    let sectionID = $(this).attr("href");
    let positionOfSection = $(sectionID).offset().top();
    $("html,body").animate({scrollTop: positionOfSection},2000);
});


$(document).ready(function ()
{
    $('#acc .signer-caption:first').css("display", "block");
    $('#acc h3').click(function () {
        $(this).next().slideToggle(500);
        $('#acc .signer-caption').not($(this).next()).slideUp(500);
    });
});


function countDown() {
    const now = new Date();
    const eventDate = new Date(2022, 1 , 1);
    let currentTime = now.getTime();
    let eventTime = eventDate.getTime();
    let remTime = eventTime - currentTime;

    let seconds = Math.floor(remTime/1000);
    let minutes = Math.floor(seconds/60);
    let hours = Math.floor(minutes/60);
    let days = Math.floor(hours/24)-30;

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById("days").innerHTML = `<h3>${days} D</h3>`;
    document.getElementById("hours").innerHTML = `<h3>${hours} h</h3>`;
    document.getElementById("minutes").innerHTML = `<h3>${minutes} m</h3>`;
    document.getElementById("seconds").innerHTML = `<h3>${seconds} s</h3>`;
    setInterval(countDown,1000)

}
countDown();

$(function () {
    "use strick";
    let max = 100;
    $('textarea').keyup(function () {
        let len = $(this).val().length;
        let character = max -len;
        if (character <= 0)
        {
            $('#char').text("Your available character finished");
        }else
        {
            $('#char').text(character);
        }
    });

})