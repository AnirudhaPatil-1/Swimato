// React Imports
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// component imports
import FoodCard from "../components/FoodCard";
import Shimmer from "../components/Shimmer.js";
import Slider from "../components/Slider";
import SearchInput from "../components/SearchInput";

// Other config imports
import { restrautList, URL } from "../config.js";
import "../theme/CommonStyle.css";

// Icon imports
import { FaStar } from "react-icons/fa";
import Header from "../components/Header";
import useOnline from "../utils/hooks/useOnline";

// Component Body
const LandingScreen = () => {
	// Init states
	const [searchText, setSearchText] = useState("");
	const [allRestaurants, setAllRestaurants] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [error, setError] = useState("");
	console.log(allRestaurants);
	//handle Sort by Rating
	function sortOnHighToLowRating(){
		let sorted_list_rating = 
			filteredRestaurants &&
			filteredRestaurants.sort((a, b) => b.data.avgRating - a.data.avgRating);
		setFilteredRestaurants([...sorted_list_rating]);
	}

	//handle sort by delivery time
	
	function sortOnDeliveryTime(){
		let sorted_list_delivery_time = 
			filteredRestaurants &&
			filteredRestaurants.sort(
				(a, b) => a.data.deliveryTime - b.data.deliveryTime
			);
		setFilteredRestaurants([...sorted_list_delivery_time]);
	}

	//handle sort by cost (high to low)

	function sortPriceHighToLow(){
		let sorted_list_price_high_to_low = 
			filteredRestaurants &&
			filteredRestaurants.sort((a, b) => b.data.costForTwo - a.data.costForTwo);
		setFilteredRestaurants([...sorted_list_price_high_to_low]);
	}

	function sortPriceLowToHigh(){
		let sorted_list_price_low_to_high = 
			filteredRestaurants &&
			filteredRestaurants.sort((a, b) => a.data.costForTwo - b.data.costForTwo);
		setFilteredRestaurants([...sorted_list_price_low_to_high]);
	}

	// check user network stagit tus
	const isOnline = useOnline();

	console.log("ison", isOnline);

	// will get called only once
	useEffect(() => {
		getRestaurantData();
	}, []);

	const getRestaurantData = async () => {
		try {
			//get data
			const res = await fetch(
				//ME TRYING
				// "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3667854&lng=77.06939799999999&page_type=DESKTOP_WEB_LISTING"

				//ORIGINAL
				"https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.591945&lng=73.73897649999999&page_type=DESKTOP_WEB_LISTING"
			);

			// convert json to readable object
			const json = await res.json();

			const list = json.data?.cards[2]?.data?.data?.cards;

			// update  local state
			setAllRestaurants(list);
			setFilteredRestaurants(list);
		} catch (error) {
			setError("something went wrong");
		}
	};

	// Get filtered list on basis of user search
	function searchHandler(searchText, restaurants) {
		return restaurants.filter((restaurant) =>
			restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
		);
	}
	// const isOnline = useOnline();

	if (!isOnline) {
		return (
			<div className="bg-gray-600 p-4 max-w-fit m-4 rounded-sm text-white">
				<p>NETWORK CONNECTION ERROR</p>
				<h4>Please, check your internet connection!!!</h4>
			</div>
		);
	}

	return (
		<>
			<SearchInput
				searchText={searchText}
				placeholder="Search for restaurants.."
				type="text"
				value={searchText}
				onChange={(e) => {
					// update the search enteree by user
					setSearchText(e.target.value);

					// get filtered data
					const data = searchHandler(searchText, allRestaurants);

					// update local state with filtered values
					setFilteredRestaurants(data);
				}}
			/>

			{/* slider component */}

			<Slider />
			<div className="m_t_24 px-24 flex justify-between">
				<h2 className="font-bold text-2xl">
					{allRestaurants.length} Restaurants
				</h2>

				<div>
					<button
						className="border-yellow-500 border ml-2 px-6"
						onClick={() => sortOnHighToLowRating()}
					>
						<p className="hover:text-slate-600 transition-all">Rating</p>
					</button>
					<button
						className="border-yellow-500 border ml-2 px-6"
						onClick={() => sortOnDeliveryTime}
					>
						<p className="hover:text-slate-600 transition-all">Delivery Time</p>
					</button>

					<button
						className="border-yellow-500 border ml-2 px-6"
						onClick={() => sortPriceHighToLow}
					>
						<p className="hover: text-slate-600 transition-all">
							{" "}
							Cost: High to Low
						</p>	
					</button>

					<button
						className="border-yellow-500 border ml-2 px-6"
						onClick={() => sortPriceLowToHigh}
					>
						<p className="hover: text-slate-600 transition-all">
							Cost: Low to High
						</p>
					</button>
				</div>
			</div>
			<div style={{border: "0.2px solid #b6b6b6", marginTop: "20px"}}></div>

			{error}

			<div className="flex flex-wrap items-center justify-center">
				{filteredRestaurants.length === 0 ? (
					<Shimmer />
				) : (
					filteredRestaurants.map((restaurant, index) => {
						// console.log("here", restaurant.data.id);
						return (
							<Link
								to={"/restaurant/" + restaurant.data.id}
								key={restaurant?.data?.id}
								style={{
									listStyleType: "none",
									textDecoration: "none",
									color: "inherit",
								}}
							>
								<FoodCard {...restaurant?.data} />
							</Link>
						);
					})
				)}
			</div>
		</>
	);
};

export default LandingScreen;