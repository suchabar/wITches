var app = angular.module('witches', ['ngRoute']);

//MAIN CONTROLLER
app.controller( 'MainController', ['$scope', '$location', '$window', function ($scope ,$location, $window)
{
    $scope.redirectToFacebookPage = function(){
        $window.open("https://www.facebook.com/witches.cz/", "_blank")
    };

    //Maybe sufficient via #/workshops/alice
    $scope.tryAlice = function(){
        $location.path('/workshops/alice');
    };

    $scope.tryBoffin = function(){
        $location.path('/workshops/boffin');
    };

    $scope.tryLego = function(){
        $location.path('/workshops/mindstorms');
    };
}]);


//ABOUT CONTROLLER
app.controller( 'AboutController', ['$scope', '$window', function ($scope ,$window)
{
    $scope.becomeWitchForm = function () {
        $window.open("https://docs.google.com/forms/d/e/1FAIpQLScQ02O8alZ99T1qGX-Yg-9LsQ1TJ7lEYyQVMYJmrc3ZDCBgdA/viewform", "_blank")
    };
}]);

//CONTACTS CONTROLLER
app.controller( 'ContactsController', ['$scope', '$window', function ($scope ,$window)
{
    $scope.subscribeToNewsletter = function () {
        $window.open("https://docs.google.com/forms/d/e/1FAIpQLSeOwq8VnaSYcWGuHXPcTKuRH2i4BbJFjZ4A7UFYez3JHPA0yw/viewform", "_blank");
    }
}]);

//WORKSHOP CONTROLLER
app.controller( 'WorkshopController', ['$scope', '$window', function ($scope ,$window)
{
    $scope.subscribeToWorkshop = function () {
        $window.open("https://docs.google.com/forms/d/e/1FAIpQLSelikOHxHk2MlD-NAnrwCJjZq0zROZMtBEBCprwNizKjnPb3g/viewform", "_blank")
    };

    $scope.subscribeToCourse= function () {
        $window.open("https://docs.google.com/forms/d/e/1FAIpQLSdGkiH2i_8RhJN94dWUi-IsTlwsIi6LqbM9IcnAmfuf2cGxLw/viewform", "_blank");
    }
}]);

// ROUTING IN APPLICATION
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.when('/',
            {
                templateUrl: 'src/main.html',
                controller: 'MainController'
            })
        .when('/about',
            {
                templateUrl: 'src/about.html',
                controller: 'AboutController'
            })
        .when('/contacts',
            {
                templateUrl: 'src/contacts.html',
                controller: 'ContactsController'
            })
        .when('/course',
            {
                templateUrl: 'src/course.html',
                controller: 'WorkshopController'
            })
        .when('/workshops/alice',
            {
                templateUrl: 'src/workshops/alice.html',
                controller: 'WorkshopController'
            })
        .when('/workshops/boffin',
            {
                templateUrl: 'src/workshops/boffin.html',
                controller: 'WorkshopController'
            })
        .when('/workshops/mindstorms',
            {
                templateUrl: 'src/workshops/lego.html',
                controller: 'WorkshopController'
            })
        .otherwise(
            {
                redirectTo: '/'
            })
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
}]);