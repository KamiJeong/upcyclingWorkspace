/**
 * Created by gunsil on 2015. 11. 23..
 */
angular.module('makeProjectController', [])
    .controller('MakeProjectController', ['$scope', function ($scope) {
        //alert('Main');


        $scope.project = {};
        $scope.theFile = {
            "mainImage": "",
            "subImage1": "",
            "subImage2": "",
            "subImage3": ""
        };


        $scope.makeProject = function ($event, project) {
            $event.preventDefault();
            console.log($scope.project);
            $scope.project = project;
            $scope.project.uploadFiles = ($scope.theFile);
            console.log($scope.project);
        };

        $scope.setMainImage = function (element) {
            $scope.$apply(function ($scope) {
                $scope.theFile.mainImage = element.files[0];
                //console.log($scope.theFile);
            });
        };
        $scope.setSubImage1 = function (element) {
            $scope.$apply(function ($scope) {
                $scope.theFile.subImage1 = element.files[0];
                //console.log($scope.theFile);
            });
        };
        $scope.setSubImage2 = function (element) {
            $scope.$apply(function ($scope) {
                $scope.theFile.subImage2 = element.files[0];
                //console.log($scope.theFile);
            });
        };
        $scope.setSubImage3 = function (element) {
            $scope.$apply(function ($scope) {
                $scope.theFile.subImage3 = element.files[0];
                //console.log($scope.theFile);
            });
        };
    }]);