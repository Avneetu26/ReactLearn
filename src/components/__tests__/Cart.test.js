import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/menu.json"
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenuComponent from "../RestaurantMenuComponent";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"
import HeaderComponent from "../HeaderComponent";
import CartComponent from "../CartComponent";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

describe("tests cart: ", () => {
    it("should load RestaurantMentComponent: ", async () => {
        await act(async () => render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <HeaderComponent/>
                    <RestaurantMenuComponent/>
                    <CartComponent/>
                </Provider>
            </BrowserRouter>
        ));

        const accordianHeader = screen.getByText("Drinks (9)");
        // expect(accordianHeader).toBeInTheDocument();

        fireEvent.click(accordianHeader);

        const foodItems = screen.getAllByTestId("fooditems");
        expect(foodItems.length).toBe(9);

        const addBtn = screen.getAllByRole("button", {name: "Add to Cart"});
        fireEvent.click(addBtn[0]);

        const cart = screen.getByText("Cart (1 items)");
        expect(cart).toBeInTheDocument();

        fireEvent.click(addBtn[0]);

        const cart2 = screen.getByText("Cart (2 items)");
        expect(cart2).toBeInTheDocument();

        // 2 from cart and 9 from restaurant menu
        expect(screen.getAllByTestId("fooditems").length).toBe(11);

        const clearCart = screen.getByText("Clear Cart");
        fireEvent.click(clearCart);
        expect(screen.getAllByTestId("fooditems").length).toBe(9);
    });
    
})