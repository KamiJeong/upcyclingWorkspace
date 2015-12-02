/**
 * Created by gunsil on 2015. 11. 23..
 */
angular.module('inProgressController', [])
    .controller('InProgressController', ['$scope', function ($scope) {
        //alert('Main');
        $scope.projects = [
            {
                "projectNo": "1",
                "projectName": "프로젝트 1",
                "mainImage": "img/test1.jpeg",
                "deadLine": "2015.12.25",
                "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...",
                "participant": [
                    "박동조", "최소희", "김경환", "이준영"
                ]
            },
            {
                "projectNo": "2",
                "projectName": "프로젝트 2",
                "mainImage": "img/test2.jpeg",
                "deadLine": "2015.12.25",
                "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...",
                "participant": [
                    "최동조", "박소희", "이경환", "김준영"
                ]
            },
            {
                "projectNo": "3",
                "projectName": "프로젝트 3",
                "mainImage": "img/test3.jpeg",
                "deadLine": "2016.01.25",
                "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...",
                "participant": [
                    "김상은", "김홍수", "김태훈", "이준영"
                ]
            }
        ];


        //console.log($scope.projects[0].push([{"hello": "hello"}]));

        //D-day Controller
        for (var i = 0; i < $scope.projects.length; i++) {
            //console.log('working');
            var dDay = Math.ceil((new Date($scope.projects[i].deadLine) - new Date()) / 86400000);
            console.log(dDay);
            $scope.projects[i].dDay = dDay;
        }

    }]);