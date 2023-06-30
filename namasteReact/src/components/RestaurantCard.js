import { IMG_CDN_URL } from "../contants";
import {useContext} from "react";
import UserContext from "../utils/useContext"

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  const {user} = useContext(UserContext);
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
      <span className="text-blue-400">{user.name}</span>
      <span className="text-blue-400">{user.email}</span>
    </div>
    
  );
};

export default RestaurantCard;
