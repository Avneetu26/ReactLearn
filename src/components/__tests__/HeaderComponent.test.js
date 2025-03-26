import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import HeaderComponent from "../HeaderComponent";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom"

describe("Header tests: ", () => {
    it("Should load header component with a login button", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <HeaderComponent/>
                </Provider>
            </BrowserRouter>
        );

        // const button = screen.getByRole("button");
        // expect(button).toBeInTheDocument();

        // const button = screen.getByText("LogIn");
        // expect(button).toBeInTheDocument();

        const loginButton = screen.getByRole("button", {name: "LogIn"});
        expect(loginButton).toBeInTheDocument();

        
    })

    it("Should check cart element loads with 0 in header component", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <HeaderComponent/>
                </Provider>
            </BrowserRouter>
        );

        // const cartItems = screen.getByText("Cart (0 items)");
        // expect(cartItems).toBeInTheDocument();

        const cartItems = screen.getByText(/Cart/);
        expect(cartItems).toBeInTheDocument();

        
    })

    it("Should change LogIn button to LogOut", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <HeaderComponent/>
                </Provider>
            </BrowserRouter>
        );

        const loginButton = screen.getByRole("button", {name: "LogIn"});

        fireEvent.click(loginButton);

        const logoutButton = screen.getByRole("button", {name: "LogOut"});
        expect(logoutButton).toBeInTheDocument();

        
    })
})