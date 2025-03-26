import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import RestaurantCardComponent, { withOpenLabel } from "./RestaurantCardComponent";
import ShimmerComponent from "./ShimmerComponent";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";

const BodyComponent = () => {

    const [resListTemp, setResListTemp] = useState([]);

    const [filteredList, setFilteredList] = useState([]);

    const [searchText, setSearchText] = useState("");

    const {loggedInUser, setUserName} = useContext(UserContext);

    const RestaurantCardOpen = withOpenLabel(RestaurantCardComponent);

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5462313&lng=73.90395099999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        setResListTemp(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) {
        return (<h1>Looks like you are offline, please check your internet connection</h1>);
    }

    return (resListTemp === undefined || resListTemp.length === 0) ? (<ShimmerComponent/>) : (
        <div className="bg-pink-100">
            
            <div className="ml-16">
                
    `           <div className="m-4 p-4 flex">
                    <input className="border border-solid border-r-black" 
                    type="text" 
                    data-testid="searchInput"
                    value={searchText} 
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }}></input>
                    <button onClick={() => {
                        setFilteredList(resListTemp.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())));
                    }} className="mx-2 bg-purple-100 px-3 py-2 cursor-pointer rounded-2xl">Search</button>
                    <button onClick={() => {
                        setFilteredList(resListTemp.filter((res) => res.info.avgRating > 4.0));
                    }} className="mx-2 bg-purple-100 px-3 py-2 cursor-pointer rounded-2xl">Top rated restaurants</button>
                    <div>
                        <label className="mx-2">Preferred Name:</label>
                        <input className="border border-solid border-r-black p-2" type="text" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
                    </div>
                </div>

            </div>
            <div className="flex flex-wrap justify-center">
                
            {filteredList.map((restaurant) => (
                <Link className="link" key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                    {restaurant.info.isOpen ? <RestaurantCardOpen resData={restaurant} /> : <RestaurantCardComponent resData={restaurant} />}
                    
                </Link>
            ))}
            </div>
        </div>
    )
}

export default BodyComponent;