import { useEffect, useState } from "react";
import ShimmerComponent from "./ShimmerComponent";
import { useParams } from "react-router-dom";
import { CLOUD_IMAGE } from "../utils/Constants";

const RestaurantMenuComponent = () => {

    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);
    
    const fetchMenu = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5462313&lng=73.90395099999999&restaurantId=" + resId);

        const json = await data.json();

        setResInfo(json)
        // console.log(json);
    };

    if(resInfo === null) return <ShimmerComponent />;


    const {name, cuisines, cloudinaryImageId} = resInfo?.data?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    return (
        <div className="menu">
            <h1> Name of Restaurant: {name}</h1>
            <h3>{ cuisines.join(", ") }</h3>
            <h2> Menu </h2>
            <ul>
            {itemCards.map((item) => ( 
                <li className="menu-li" key={item.card.info.id}>
                    <img className="menu-img" src={`${CLOUD_IMAGE}${item.card.info.imageId}`} alt={item.card.info.name} />
                    {item.card.info.name}
                </li>
            ))}
            </ul>
        </div>
    )
};

export default RestaurantMenuComponent;