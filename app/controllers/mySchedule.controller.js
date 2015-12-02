/**
 * Created by gunsil on 2015. 11. 23..
 */
angular.module('myScheduleController', [])
    .controller('MyScheduleController', ['$scope', 'moment', function ($scope, moment) {
        //alert('Main');

        $scope.todoList = [
            {
                "schedule": "아침밥 먹기",
                "time": "07:00",
                "date": "2015.11.24"
            },
            {
                "schedule": "점심밥 먹기",
                "time": "12:00",
                "date": "2015.11.24"
            },
            {
                "schedule": "저녁밥 굶기",
                "time": "18:00",
                "date": "2015.11.24"
            }
        ];

        $scope.addTodayTodo = function ($event, todayTodo) {
            $event.preventDefault();
            console.log(todayTodo.schedule);
            console.log(todayTodo.time);

            todayTodo.date = new moment().format("YYYY.MM.DD");
            $scope.todoList.push({"schedule": todayTodo.schedule, "time": todayTodo.time, "date": todayTodo.date});
            todayTodo.schedule = '';
            todayTodo.time = '';
        };

        $scope.checkAll = true;        //$scope.checkThis = function ($index) {
        //    //alert($index);
        //};

        //$scope.date = new moment().format("YYYY.MM.DD");
        //console.log($scope.date);


    }]);