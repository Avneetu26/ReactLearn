import { useDispatch, useSelector } from "react-redux";
import ItemListComponent from "./ItemListComponent";
import { clearCart } from "../utils/cartSlice";

const CartComponent = () => {

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    // subscribe
    const cartItems = useSelector((store) => store.cart.items)
    return (
        <div className="text-center bg-orange-100 h-[100vh] ">
            <h1 className="font-bold text-3xl"> Cart </h1>
            
            <div className="w-8/12 m-auto">
                {cartItems.length != 0 ? (
                    <button className="text-xl m-4 p-2 bg-orange-200 rounded-2xl cursor-pointer" onClick={handleClearCart}>
                        Clear Cart
                    </button>) : <h1 className="text-orange-500 m-10 text-3xl">No Items in your Cart!</h1> 
                }
                <ItemListComponent items={cartItems}></ItemListComponent>
            </div>
        </div>
    )
}

export default CartComponent;