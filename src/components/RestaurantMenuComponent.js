import ShimmerComponent from "./ShimmerComponent";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategoryComponent from "./RestaurantCategoryComponent";
import { useState } from "react";


const RestaurantMenuComponent = () => {

    // const [resInfo, setResInfo] = useState(null);
    const [showIndex, setShowIndex] = useState(null);
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <ShimmerComponent />;

    const {name, cuisines} = resInfo?.data?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    //filter out the ItemCategories

    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    

    return (
        <div className="bg-orange-50 text-center">
            <h1 className="text-4xl text-orange-600 font-bold pt-4"> {name}</h1>
            <h3 className="text-orange-500 m-2">{ cuisines.join(", ") }</h3>

            <div>
                {categories.map((c, index) => (
                    <RestaurantCategoryComponent key={c.card?.card?.categoryId} categories={c} 
                    showItems={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)}
                    closeAll={() => setShowIndex(null)}/>
                ))}
            </div>
            

            {/* <ul>
            {itemCards.map((item) => ( 
                <li className="flex m-2" key={item.card.info.id}>
                    <img className="h-10 w-10" src={`${CLOUD_IMAGE}${item.card.info.imageId}`} alt={item.card.info.name} />
                    <span className="font-normal m-2  text-orange-500"> {item.card.info.name} </span>
                </li>
            ))}
            </ul> */}
        </div>
    )
};

export default RestaurantMenuComponent;