angular.module('witches').directive('scrollOnClick', function()
{
    return {
        restrict: 'A',
        link: function(scope, $elm, attrs)
        {
            var idToScroll = attrs.href;
            $elm.on('click', function(event) {
                event.preventDefault();

                var $target;
                $target = $(idToScroll);
                $("body").animate({scrollTop: $target.offset().top - 60}, 800);
            });
        }
    }
});

angular.module('witches').directive('moveStars', function()
{
    return {
        restrict: 'A',
        link: function(scope, $elm, attrs)
        {
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
    }
});