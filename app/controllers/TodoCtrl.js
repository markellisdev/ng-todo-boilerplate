"use strict";

app.controller('TodoCtrl', function($scope, $location){ //Step 3
    $scope.welcome = "hello";
    $scope.showListView = true; //Step 5
    $scope.newTask = {}; //Step 8 part i

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

    $scope.addNewItem = function(){
        console.log("you clicked add new item");
        $scope.newTask.isCompleted = false;
        $scope.newTask.id = $scope.items.length;
        $scope.items.push($scope.newTask);
        $scope.newTask = {};
    };

    $scope.items = [
      {
        id: 0,
        task: "mow the lawn",
        isCompleted: false,
        dueDate: "12/5/17",
        assignedTo: "Greg",
        location: "Joe's house",
        urgency: "low",
        dependencies: "sunshine, clippers, hat, water, headphones"
      },
      {
        id: 1,
        task: "grade quizzes",
        isCompleted: false,
        dueDate: "12/5/15",
        assignedTo: "Christina",
        location: "NSS",
        urgency: "high",
        dependencies: "wifi, tissues, vodka"
      },
      {
        id: 2,
        task: "take a nap",
        isCompleted: false,
        dueDate: "5/21/16",
        assignedTo: "Joe",
        location: "Porch of lakefront cabin",
        urgency: "medium",
        dependencies: "hammock, silence"
      }
    ];
});

