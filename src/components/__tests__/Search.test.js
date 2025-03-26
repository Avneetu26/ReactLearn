import { fireEvent, render, screen } from "@testing-library/react";
import DATA from "../mocks/data.json"
import BodyComponent from "../BodyComponent";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(DATA)
        }
    })
})

describe("Body Component", () => {
    it("should render body component: ", async () => {
        await act(async () => render(
            <BrowserRouter>
                <BodyComponent/>    
            </BrowserRouter>
        ));

        const searchBtn = screen.getByRole("button", {name: "Search"});
        // trigger on change event
        const searchInput = screen.getByTestId("searchInput");
        fireEvent.change(searchInput, { target: {value: "burger"}});

        fireEvent.click(searchBtn);

        const cards = screen.getAllByTestId("resCard")

        expect(cards.length).toBe(3);

        
    })

    it("should render body component: ", async () => {
        await act(async () => render(
            <BrowserRouter>
                <BodyComponent/>    
            </BrowserRouter>
        ));

        const topRatedBtn = screen.getByRole("button", {name: "Top rated restaurants"});
        // trigger on change event
        fireEvent.click(topRatedBtn);

        const cards = screen.getAllByTestId("resCard")

        expect(cards.length).toBe(16);

        
    })
})