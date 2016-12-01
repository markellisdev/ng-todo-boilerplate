"use strict";

app.factory("ItemStorage", ($http, FBCreds) => {

	let getItemList = () => {
		let items = [];
		return new Promise((resolve, reject) => {
			$http.get(`${FBCreds.URL}/items.json`)
			.success( (itemObject) => {
				let itemCollection = itemObject;
				Object.keys(itemCollection).forEach( (key) => {
					itemCollection[key].id = key;
					items.push(itemCollection[key]);
				});
				resolve(items);
			})
			.error( (error) => {
				reject(error);
			});
		});
	};

	let getSingleItem = (itemId) => {
		return new Promise( (resolve, reject) => {
			$http.get(`${FBCreds.URL}/items/${itemId}.json`)
			.success( (itemObject) => {
				resolve(itemObject);
			})
			.error( (error) => {
				reject(error);
			});
		});
	};

	// let postNewItem = (newTask) => {
	// 	items.push(newTask);
	// };

	return {getItemList, getSingleItem};
});