import {restaurantList} from './constants';
import RestaurantCard from './RestaurantCard';
import {useState} from 'react';

const Body = () => {
    const [searchText, setSearchText] = useState("Hello");
    const [clickHeader, setClickHeader] = useState("false");
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
                <button className="search-btn">Search</button>
                <button className="headerStatus" onClick= {(e)=> {
                    if(clickHeader === "false"){
                        setClickHeader("true");
                    }else{
                        setClickHeader("false");
                    }
                }}>HeaderStatus</button>
                <h1>{clickHeader}</h1>
            </div>
            <div className="restaurant-list">
                {restaurantList.map((restaurant)=>{
                    return (
                        <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                    )
                })}
            </div>
        </>
    )
}

export default Body;