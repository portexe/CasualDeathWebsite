var intervalId = "";
$(document).ready(function() {
    intervalId = setInterval("letItRain()",150);
    $('.rain-type').change(function() {
        clearInterval(intervalId);
        intervalId = setInterval("letItRain()", $(this).val());
    });
    $('.water').animate({
        bottom: "+=20px"
    }, 20000);
});

function letItRain() {
var wHeight = $(window).height();
    var x = Math.floor(Math.random() * parseInt($('body').css('width'))) + 1;
    $('.rain').append("<div class='drop' style='left: "+x+"px;'></div>");
    $('.drop').animate({
        top: wHeight + "px",
        left: "+=200px"
    }, 1000, function() {
        $(this).remove();
    });
}