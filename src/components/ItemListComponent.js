import { useDispatch } from "react-redux";
import { CLOUD_IMAGE } from "../utils/Constants";
import { addItem } from "../utils/cartSlice"

const ItemListComponent = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItems = (item) => {
        dispatch(addItem(item)); // everything passed with be the payload
    }

    return (
        <div>
            {items.map((item) => (
                <div data-testid="fooditems" key={item.card.info.id} className="font-sans border-orange-100 border-b-4 text-left flex w-full p-2 justify-between">
                     <div className="w-2/12 p-2">
                        <img src={`${CLOUD_IMAGE}${item.card.info.imageId}`}/>
                    </div>
                    <div className="w-10/12 p-2">
                        <div className="flex justify-between py-2">
                            <span>{item.card.info.name}</span>
                            <span>{"₹" + item.card.info.price/100}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                        <div className="flex justify-end">
                            <button className="border w-inherit cursor-pointer px-4 py-1 rounded-2xl text-orange-400 m-4 hover:bg-orange-500 hover:text-white" 
                            onClick={() => handleAddItems(item)}>Add to Cart</button>
                        </div>
                        
                    </div>
                   
                </div>
            ))}
        </div>
    )

}

export default ItemListComponent;