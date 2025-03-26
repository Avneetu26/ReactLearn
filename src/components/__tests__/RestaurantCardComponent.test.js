import { render, screen } from "@testing-library/react";
import RestaurantCardComponent from "../RestaurantCardComponent";
import MOCK_DATA from "../mocks/resData.json"
import "@testing-library/jest-dom"

describe("RestaurantCardComponent: ", () => {
    it("Should render RestaurantCardComponent with props Data", () => {
        render(<RestaurantCardComponent resData={MOCK_DATA}/>);

        const name = screen.getByText(/Good Flippin/);
        expect(name).toBeInTheDocument();
    })
});