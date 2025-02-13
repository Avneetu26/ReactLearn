import { CLOUD_IMAGE } from "../utils/constants";

const RestaurantCardComponent = (props) => {
    const { resData } = props;
    const {name, avgRating, cuisines, sla, cloudinaryImageId } = resData.info;
    return (
        <div className="restaurant-card">
            <img className="image" 
            src={CLOUD_IMAGE + cloudinaryImageId}
            ></img>
            <div><b>{name}</b></div>
            <div>{cuisines.join(", ")}</div>
            <div>{avgRating}</div>
            <div>{sla.deliveryTime + " mins"}</div>
        </div>
    )
}


export default RestaurantCardComponent;