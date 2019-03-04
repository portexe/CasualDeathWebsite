$( window ).load(function () {
    $("#loading").animate({"opacity": 0}, "slow", function() {
        var wWidth  = $(window).width();
        var wHeight = $(window).height();
        var lWidth  = $("#logo").width();
        var pWidth  = $("#profpic").width();
        var logoTop = $("#logo").css("marginTop");
        logoTop = Number.parseInt(logoTop) + 30 + "px";
        var logoHeight = $("#logo").height();
        $("#album-playlist").css({"margin-top": logoTop});
        $("#logo").css({"margin-left": (wWidth/2) - (lWidth/2) + "px", "visibility": "visible"});
        $("#profpic").css({"margin-left": (wWidth/2) - (pWidth/2) + "px", "visibility": "visible"});

        $(document).scrollTop(0);
    });
    
});
$(window).resize(function(){
    var wWidth  = $(window).width();
    var wHeight = $(window).height();
    var lWidth  = $("#logo").width();
    var pWidth  = $("#profpic").width();
    $("#logo").css({"margin-left": (wWidth/2) - (lWidth/2) + "px", "visibility": "visible"});
    $("#profpic").css({"margin-left": (wWidth/2) - (pWidth/2) + "px", "visibility": "visible"});

});
$(window).scroll(function() {
    var wHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var opacity = 1 - (wHeight/scrollTop);
    
    $("#profpic").css({"bottom": 0 - scrollTop, "transition": "none"});
    $("#palmtree-set1").css({"left": 0 - scrollTop});
    $("#palmtree-set2").css({"right": 0 - scrollTop});

    var val = $(document).scrollTop() * 0.0015;

    if(val <= 0.6){
        var newVal = 0.8 - val;
        $("#c").css({"opacity": newVal + ""});
    }
    $("#rain").css({"opacity": 0 + ($(document).scrollTop() * 0.0015)});
});