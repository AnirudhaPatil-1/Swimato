import {restaurantList} from './constants';
import RestaurantCard from './RestaurantCard';
import {useState} from 'react';

function filterData(searchText, restaurants){
    const filterData = restaurants.filter((restaurant) => 
        restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
            );
    return filterData;
}

const Body = () => {
    const [restaurants, setRestaurants] = useState(restaurantList);
    const [searchText, setSearchText] = useState("");
    
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
                    const data = filterData(searchText, restaurants);
                    setRestaurants(data);
                }}
                >
                    Search
                </button>
            </div>
            <div className="restaurant-list">
                {restaurants.map((restaurant)=>{
                    return (
                        <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                    )
                })}
            </div>
        </>
    )
}

export default Body;