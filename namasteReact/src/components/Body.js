import {restaurantList} from './constants';
import RestaurantCard from './RestaurantCard';
import {useState, useEffect} from 'react';

function filterData(searchText, restaurants){
    const filterData = restaurants.filter((restaurant) => 
        restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
            );
    return filterData;
}

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    

    useEffect(() =>{
        getRestaurants();
    }, []);

    const getRestaurants = async () =>  {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.485132&lng=73.8110947&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    const searchData = (searchText,restaurants) =>{
        if(searchText !== ""){
            const data = filterData(searchText, restaurants);
            setFilteredRestaurants(data);
        }
        if(data.length === 0){
            console.log("No restaurant found");
        }
    }

    if(!allRestaurants){
        return null;
    }

    return(
        <>
            <div className="search-container">
                <input type="text" 
                className="search-input"
                placeholder="Search"
                value = {searchText}
                onChange = {(e) => {
                    setSearchText(e.target.value);
                }}
                />
                <button className="search-btn"
                onClick = {() => {
                    searchData(searchText, allRestaurants)
                }}
                >
                    Search
                </button>
            </div>
            {allRestaurants?.length === 0 ?  <h1>Shimmer Shimmy</h1> : 
            <div className="restaurant-list">
            {filteredRestaurants.map((restaurant)=>{
                return (
                    <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                )
            })}
            </div>
            }
        </>
    )
}

export default Body;