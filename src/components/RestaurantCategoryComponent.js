import ItemListComponent from "./ItemListComponent";

const RestaurantCategoryComponent = (props) => {
    const {categories, showItems, setShowIndex} = props;

    // const [showItems, setShowItems] = useState(false);

    handleClick = () => {
        setShowIndex();
    }

    return (
        <div className="w-8/12 mx-auto shadow-lg mb-2">
            <div className=" p-2 text-xl my-6 cursor-pointer flex justify-between" onClick={handleClick}>
                <span className="text-orange-400 ml-2">{categories.card.card.title} ({categories.card.card.itemCards.length})</span>
                <span className="text-orange-400 font-medium "> {">"} </span>
                
            </div>

            {showItems && <div className="shadow-orange-lg"><ItemListComponent items={categories.card.card.itemCards}/></div>}
        </div>
    )
};

export default RestaurantCategoryComponent;