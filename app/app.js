"use strict";

var app = angular.module("ToDoApp", ["ngRoute"]); //Step 1

app.config(function($routeProvider){
	$routeProvider
	.when('/items/list', {
		templateUrl: 'partials/item-list.html',
		controller: 'ItemListCtrl'
	})
	.when('/items/new', {
		templateUrl: 'partials/item-form.html',
		controller: 'ItemNewCtrl'
	})
	.when('/items/:itemId', {
		templateUrl: 'partials/item-details.html',
		controller: 'ItemViewCtrl'
	})
	.otherwise('/items/list');
});
