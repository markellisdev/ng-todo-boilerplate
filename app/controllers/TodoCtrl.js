"use strict";

app.controller('TodoCtrl', function($scope, $location){ //Step 3


    $scope.newItem = function(){
        console.log("you clicked on the new item");
        //$scope.showListView = false;Step 7
        $location.url("/items/new");

    };

    $scope.allItem = function(){
        console.log("you clicked on the all");
        //$scope.showListView = true;
        $location.url("/items/list");
    };
});

