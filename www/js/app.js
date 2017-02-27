var app = angular.module('zahradyLucie', ['ngRoute']);

// ROUTING IN APPLICATION
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/',
        {
            templateUrl: 'src/main.html',
            controller: 'MainController'
        })
        .when('/gallery',
            {
                templateUrl: 'src/gallery.html',
                controller: 'GalleryController'
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
        .otherwise(
            {
                redirectTo: '/'
            })
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
}]);

