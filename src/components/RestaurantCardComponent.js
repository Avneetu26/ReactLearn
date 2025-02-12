
const RestaurantCardComponent = (props) => {
    const { resData } = props;
    const {name, logo, ratings, delivery_time_estimate, cuisines} = resData;
    return (
        <div className="restaurant-card">
            <img className="image" 
            src={logo}
            ></img>
            <div><b>{name}</b></div>
            <div>{cuisines.join(", ")}</div>
            <div>{ratings.rating_bayesian10_point}</div>
            <div>{delivery_time_estimate + " mins"}</div>
        </div>
    )
}


export default RestaurantCardComponent;