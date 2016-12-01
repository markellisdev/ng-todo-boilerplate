"use strict";

app.controller('ItemViewCtrl', function($scope, ItemStorage, $routeParams){ //Step 3
	console.log("routeParams PFM", $routeParams.itemId);

    ItemStorage.getSingleItem($routeParams.itemId)
    .then( (itemObject) => {
    	$scope.selectedItem = itemObject;
    	$scope.$apply();
    });
});