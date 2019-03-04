var colors = ["#9c51ba", "#ff62ff", "#ebd527", "#17e4f7", "#cba2c0"];
var colorsText = ["#000000",  "#f76fcd", "#000000","#f531f6", "#d8452e"];
var i = 0;
// $("body").css("background-color","#cba2c0");
// function changeColor()
// {
//     i++;
//     i=i%5;
//     $("body").animate({backgroundColor: colors[i]},5000);
//     setTimeout(changeColor,0);
// }
function changeColorText(){
    i++;
    i=i%5;
    $("#feature-header").animate({color: colorsText[i]},5000);
    setTimeout(changeColorText,0);
}
// $( document ).ready(changeColor());
$( document ).ready(changeColorText());