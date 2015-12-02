/**
 * Created by gunsil on 2015. 11. 23..
 */
angular.module('designerWorkings', [
    'ngRoute',
    'mdl',
    'appConfig',
    'mainController',
    'myScheduleController',
    'inPreparationController',
    'inProgressController',
    'findRequestController',
    'makeProjectController'
]).run(['$rootScope', '$location', '$timeout', function ($rootScope, $location, $timeout) {
    $rootScope.$on('$viewContentLoaded', function () {
        $timeout(function () {
            componentHandler.upgradeAllRegistered();
        });
    });
}]).constant("moment", moment)

    .controller('AppController', ['$scope', '$location', '$route', function ($scope, $location, $route) {
        //$scope.headTitle = 'Hello';

        console.log($location.path());
        //console.log($route.path);

    }]);
