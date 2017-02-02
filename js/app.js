var app = angular.module('witches', ['ngRoute']);

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

