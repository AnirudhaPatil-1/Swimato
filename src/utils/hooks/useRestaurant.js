import React, { useState, useEffect } from "react";

const useRestaurant = (id) => {
	const [restaurant, setRestaurant] = useState(null);

	useEffect(() => {
		getRestaurantmenu();
	}, []);

	const getRestaurantmenu = async () => {
		const response = await fetch(
			//ME TRYING
			`https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.591945&lng=73.73897649999999&restaurantId=${id}`
			// `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.485132&lng=73.8110947&restaurantId=${id}&submitAction=ENTER`
			//21395
			// `https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=${id}`

			//original
			// `https://www.swiggy.com/dapi/menu/v4/full?lat=28.3667854&lng=77.06939799999999&menuId=${id}`
		);

		const json = await response.json();
		setRestaurant(json.data);
	};

	return restaurant;
};

export default useRestaurant;