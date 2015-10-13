/**
 * Created by alexadam on 10.10.15.
 */

// public/core.js
var scotchTodo = angular.module('scotchTodo', []);

var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
bubbleShape = "circle";

function mainController($scope, $http) {
    $scope.formData = {};

    $scope.createVisitor = function() {

        var myName = $scope.formData.text;
        var letterColors = [red,blue,green,orange,purple]


        $http.post('/api/visitors', $scope.formData)
            .success(function(data) {

                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.visitors = data;

            })
            .error(function(data) {
                console.log('Error: ' + data);
            });

        drawName(myName, letterColors);
        bounceBubbles();
        $(".hide_form").fadeOut('fast');
    };
}
