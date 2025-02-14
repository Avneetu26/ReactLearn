import RestaurantCardComponent from "./RestaurantCardComponent";
import ShimmerComponent from "./ShimmerComponent";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const BodyComponent = () => {

    const [resListTemp, setResListTemp] = useState([]);

    const [filteredList, setFilteredList] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5462313&lng=73.90395099999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        setResListTemp(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    return (resListTemp === undefined || resListTemp.length === 0) ? (<ShimmerComponent/>) : (
        <div className="body">
            
            <div className="filter">
                <button onClick={() => {
                    setFilteredList(resListTemp.filter((res) => res.info.avgRating > 4.5));
                }} className="filter-btn">Top rated restaurants</button>

    `           <div className="search">
                    <input className="searchInput" type="text" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }}></input>
                    <button onClick={() => {
                        setFilteredList(resListTemp.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())));
                    }} className="searchButton">Search</button>
                </div>
            </div>
            <div className="restaurant-container">
                
            {filteredList.map((restaurant) => (
                <Link className="link" key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCardComponent resData={restaurant} /></Link>
            ))}
            </div>
        </div>
    )
}

export default BodyComponent;