"use strict";

app.controller('ItemNewCtrl', function($scope, ItemStorage){ //Step 3
    $scope.newTask = {};

    $scope.addNewItem = function(){
    	$scope.newTask.isCompleted = false;
    	$scope.newTaskid = $scope.items.length;
    	console.log("u added a new item", $scope.newTask);
    	ItemStorage.postNewItem($scope.newTask);
    	$scope.newTask = {};
    };
});