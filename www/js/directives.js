angular.module('zahradyLucie').directive('scrollOnClick', function()
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