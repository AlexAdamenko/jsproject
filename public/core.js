/**
 * Created by alexadam on 10.10.15.
 */

// public/core.js
var scotchTodo = angular.module('scotchTodo', []);

function mainController($scope, $http) {
    $scope.formData = {};

    $scope.createVisitor = function() {

        $http.post('/api/visitors', $scope.formData)
            .success(function(data) {

                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.visitors = data;

            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
}
