import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);
    
    const fetchMenu = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5462313&lng=73.90395099999999&restaurantId=" + resId);

        const json = await data.json();

        setResInfo(json)
    };
    return resInfo;
}

export default useRestaurantMenu;