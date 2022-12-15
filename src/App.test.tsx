import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import App, {replaceCamelWithSpaces} from './App';

test('Button has correct initial color', () => {
    render(<App/>);

    //? find an element with a role of button and text of 'Change to Midnight Blue'
    const colorButton = screen.getByRole("button", {name: "Change to Midnight Blue"});

    //? expect the background color to be Medium Violet Red
    expect(colorButton).toHaveStyle({backgroundColor: "MediumVioletRed"});

    //? click button
    fireEvent.click(colorButton);

    //? expect the background color to be Midnight Blue
    expect(colorButton).toHaveStyle({backgroundColor: "MidnightBlue"});

    //? expect the button text to be 'Change to Medium Violet Red'
    expect(colorButton.textContent).toBe("Change to Medium Violet Red");
});
test("Initial conditions", () => {
    render(<App/>);

    //? check that the button starts out enabled
    const colorButton = screen.getByRole("button", {name: "Change to Midnight Blue"});
    expect(colorButton).toBeEnabled();

    //? check that the checkbox starts out unchecked
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
});

test("Checkbox disables button on first click and enables on second click", () => {
    render(<App/>);

    const colorButton = screen.getByRole("button", {name: "Change to Midnight Blue"});
    const checkbox = screen.getByRole("checkbox", {name: "Disable button"});

    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(colorButton).toBeDisabled();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(colorButton).toBeEnabled();
});

test("Clicked disabled button has gray background and reverts to current color before disabled", () => {
    render(<App/>);

    const colorButton = screen.getByRole("button", {name: "Change to Midnight Blue"});
    const checkbox = screen.getByRole("checkbox", {name: "Disable button"});

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(colorButton).toHaveStyle({backgroundColor: "gray"});

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(colorButton).not.toHaveStyle({backgroundColor: "gray"});
});

describe("Spaces before camel-case capital letters", () => {
    test("Works for no inner capital letters", () => {
        expect(replaceCamelWithSpaces("Red")).toBe("Red");
    });
    test("Works for one inner capital letter", () => {
        expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
    });
    test("Works for multiple inner capital letters", () => {
        expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
    });
});

