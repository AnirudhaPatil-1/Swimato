import {IMG_CDN_URL} from './constants.js';

const RestaurantCard = ({name, cuisines, cloudinaryImageId, avgRating, lastMileTravelString}) =>{
    return (
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId}/>
            <span className="card-title">{name} </span>
            <span className="card-tags">{cuisines.join(", ")} </span>
            <span className="card-rating">{avgRating} </span>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
    )
}

export default RestaurantCard;