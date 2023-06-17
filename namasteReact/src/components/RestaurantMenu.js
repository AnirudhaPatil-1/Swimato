import { Params } from "react-router-dom"
import {useEffect, useState} from 'react'



const RestaurantMenu =  () => {
    const id = useParams(); 
    const {restaurantId} = id;
    const [restaurant, setRestaurant] = useState({});

    useEffect(() => {
        getRestaurantMenu()
    }, []);

    const getRestaurantMenuItem =  async() => {
        const data = await fetch("");
        const json = data.json();
        console.log(json);
    
    }

    return (
        <div>
            <h1>Restaurant id: </h1>
            <h2>{restaurant.name}</h2>
        </div>
    )
}



