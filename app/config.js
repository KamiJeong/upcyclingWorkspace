/**
 * Created by gunsil on 2015. 11. 23..
 */
angular.module('appConfig', [])
    .config(['$routeProvider', 'mdlConfigProvider', function ($routeProvider, mdlConfigProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainController'
            })
            .when('/myschedule', {
                templateUrl: 'views/mySchedule.html',
                controller: 'MyScheduleController'
            })
            .when('/inprogress', {
                templateUrl: 'views/inProgress.html',
                controller: 'InProgressController'
            })
            .when('/inprogress/:no', {
                templateUrl: 'views/inProgress.detail.html',
                controller: 'InProgressController'
            })
            .when('/inprogress/:no/message', {
                templateUrl: 'views/inProgress.message.html',
                controller: 'InProgressController'
            })
            .when('/inpreparation', {
                templateUrl: 'views/inPreparation.html',
                controller: 'InPreparationController'
            })
            .when('/inpreparation/funding/:no', {
                templateUrl: 'views/inPreparation.funding.detail.html',
                controller: 'InPreparationController'
            })
            .when('/inpreparation/request/:no', {
                templateUrl: 'views/inPreparation.request.detail.html',
                controller: 'InPreparationController'
            })
            .when('/findrequest', {
                templateUrl: 'views/findRequest.html',
                controller: 'FindRequestController'
            })
            .when('/findrequest/:no', {
                templateUrl: 'views/findRequest.detail.html',
                controller: 'FindRequestController'
            })
            .when('/makeproject', {
                templateUrl: 'views/makeProject.html',
                controller: 'MakeProjectController'
            })
            .otherwise('/')
        ;

        mdlConfigProvider.floating = false;
        mdlConfigProvider.rippleEffect = false;

    }]);
