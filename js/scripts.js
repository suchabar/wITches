function animateStars(){
    $("body").mousemove(function( event ) {
        var midTmp = 4;
        var backTmp = 6;
        var frontTmp = 2;
        var movLeft = -(event.pageX)/(($("body").width())/2)*($("body").width()/$("body").height());
        var movTop = -(event.pageY)/(($("body").height())/2);
        $("#logo-mid").css("top", movTop*midTmp+"px");
        $("#logo-mid").css("left", movLeft*midTmp+"px");
        $("#logo-back").css("top", movTop*backTmp+"px");
        $("#logo-back").css("left", movLeft*backTmp+"px");
        $("#logo-front").css("top", movTop*frontTmp+"px");
        $("#logo-front").css("left", movLeft*frontTmp+"px");

    });
}

$(document).ready(function(){
    if(screen.width > 992){
        animateStars();
    }
});

//Scrolling down navigation
$('a[href*=#]').click(function(event){
    $('html, body').animate({
        scrollTop: ($( $.attr(this, 'href') ).offset().top - 55)
    }, 800);
    event.preventDefault();
});

