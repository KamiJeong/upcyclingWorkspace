/**
 * Created by gunsil on 2015. 11. 23..
 */
angular.module('newProjectController', [])
    .controller('NewProjectController', ['$scope', function ($scope) {
        //alert('Main');


        $scope.makeProject = function ($event, project) {
            $event.preventDefault();
            console.log(project);
        }
    }]);