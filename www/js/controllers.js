//MAIN CONTROLLER
angular.module('zahradyLucie').controller('MainController', ['$scope', '$location', '$window', function ($scope, $location, $window) {
    $scope.redirectToFacebookPage = function () {
        $window.open("https://www.facebook.com/witches.cz/", "_blank")
    };

    $scope.tryWorkshop = function (workshopPath) {
        $location.path(workshopPath);
    };
}]);

//GALLERY CONTROLLER
angular.module('zahradyLucie').controller('GalleryController', ['$scope', '$window', function ($scope, $window) {


}]);

//ABOUT CONTROLLER
angular.module('zahradyLucie').controller('AboutController', ['$scope', '$window', function ($scope, $window) {


}]);

//CONTACTS CONTROLLER
angular.module('zahradyLucie').controller('ContactsController', ['$scope', '$window', function ($scope, $window) {


}]);

