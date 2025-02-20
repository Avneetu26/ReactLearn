import { CLOUD_IMAGE } from "../utils/constants";

const RestaurantCardComponent = (props) => {
    const { resData } = props;
    const {name, avgRating, cuisines, sla, cloudinaryImageId } = resData.info;
    return (
        <div className="m-2 p-4 w-[200px] bg-pink-50 h-80 rounded-2xl">
            <img className="h-32 w-[170px] rounded-2xl" 
            src={CLOUD_IMAGE + cloudinaryImageId}
            ></img>
            <div className="font-bold">{name}</div>
            <div>{cuisines.join(", ")}</div>
            <div>{avgRating}</div>
            <div>{sla.deliveryTime + " mins"}</div>
        </div>
    )
}

export const withOpenLabel = (RestaurantCardComponent) => {
    return (props) => {
        return (<div>
                <label className="absolute bg-pink-200 text-black m-2 p-2 rounded-2xl"> Open Now </label>
                <RestaurantCardComponent {...props}/>
            </div>)
    }
}


export default RestaurantCardComponent;