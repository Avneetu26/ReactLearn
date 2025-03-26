import { render, screen } from "@testing-library/react";
import ContactComponent from "../ContactComponent"
import "@testing-library/jest-dom"


describe("Contact Us testcases: ", () => {
    it("Should check if Contact renders", () => {
        render(<ContactComponent/>);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    })
    
    test("Should check if Button is there or not", () => {
        render(<ContactComponent/>);
    
        const btn = screen.getByRole("button");
    
        expect(btn).toBeInTheDocument();
    })
    
    test("Should check if input with name is there or not", () => {
        render(<ContactComponent/>);
    
        const inputName = screen.getByPlaceholderText("name");
    
        expect(inputName).toBeInTheDocument();
    })
    
    test("Should load 2 input boxes", () => {
        render(<ContactComponent/>);
    
        const inputs = screen.getAllByRole("textbox");
    
        expect(inputs.length).toBe(2);
    })
})
