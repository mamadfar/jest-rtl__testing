import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import App from './App';

test('Button has correct initial color', () => {
    render(<App/>);

    //? find an element with a role of button and text of 'Change to blue'
    const colorButton = screen.getByRole("button", {name: "Change to blue"});

    //? expect the background color to be red
    expect(colorButton).toHaveStyle({backgroundColor: "red"});

    //? click button
    fireEvent.click(colorButton);

    //? expect the background color to be blue
    expect(colorButton).toHaveStyle({backgroundColor: "blue"});

    //? expect the button text to be 'Change to red'
    expect(colorButton.textContent).toBe("Change to red");
});
test("Initial conditions", () => {
    render(<App/>);

    //? check that the button starts out enabled
    const colorButton = screen.getByRole("button", {name: "Change to blue"});
    expect(colorButton).toBeEnabled();

    //? check that the checkbox starts out unchecked
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
});

test("Checkbox disables button on first click and enables on second click", () => {
    render(<App/>);

    const button = screen.getByRole("button", {name: "Change to blue"});
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(button).toBeDisabled();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(button).toBeEnabled();

})
