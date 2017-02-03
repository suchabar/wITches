//MAIN CONTROLLER
angular.module('witches').controller('MainController', ['$scope', '$location', '$window', function ($scope, $location, $window) {
    $scope.redirectToFacebookPage = function () {
        $window.open("https://www.facebook.com/witches.cz/", "_blank")
    };

    $scope.tryWorkshop = function (workshopPath) {
        $location.path(workshopPath);
    };
}]);

//ABOUT CONTROLLER
angular.module('witches').controller('AboutController', ['$scope', '$window', function ($scope, $window) {
    $scope.becomeWitchForm = function () {
        $window.open("https://docs.google.com/forms/d/e/1FAIpQLScQ02O8alZ99T1qGX-Yg-9LsQ1TJ7lEYyQVMYJmrc3ZDCBgdA/viewform", "_blank")
    };
}]);

//CONTACTS CONTROLLER
angular.module('witches').controller('ContactsController', ['$scope', '$window', function ($scope, $window) {
    $scope.downloadPosters = function () {
        $window.open("https://drive.google.com/file/d/0B7GIc7161TAeU1hHSUJ4RmlaSjQ/view?usp=sharing", "_blank");
    }
}]);

//WORKSHOP CONTROLLER
angular.module('witches').controller('WorkshopController', ['$scope', '$window', function ($scope, $window) {
    $scope.subscribeToWorkshop = function () {
        $window.open("https://docs.google.com/forms/d/e/1FAIpQLSelikOHxHk2MlD-NAnrwCJjZq0zROZMtBEBCprwNizKjnPb3g/viewform", "_blank")
    };

    $scope.subscribeToCourse = function () {
        $window.open("https://docs.google.com/forms/d/e/1FAIpQLSdGkiH2i_8RhJN94dWUi-IsTlwsIi6LqbM9IcnAmfuf2cGxLw/viewform", "_blank");
    }
}]);
