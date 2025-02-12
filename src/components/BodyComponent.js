import RestaurantCardComponent from "./RestaurantCardComponent";
import resList from "../utils/mockData";
import { useState } from "react";

const BodyComponent = () => {

    const [resListTemp, setResListTemp] = useState(resList);
    return (
        <div className="body">
            <div className="filter">
                <button onClick={() => {
                    setResListTemp(resListTemp.filter((res) => res.ratings.rating_bayesian10_point > 4.5));
                }} className="filter-btn">Top rated restaurants</button>
            </div>
            <div className="restaurant-container">
                
            {resListTemp.map((restaurant) => (
                <RestaurantCardComponent key={restaurant.restaurant_id} resData={restaurant} />
            ))}
            </div>
        </div>
    )
}

export default BodyComponent;