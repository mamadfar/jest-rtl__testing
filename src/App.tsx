import React, {useState} from 'react';
import './App.css';

export const replaceCamelWithSpaces = (colorName: string) => {
    return colorName.replace(/\B([A-Z])\B/g, " $1"); //* در واقع 1$ یعنی هر حرفی ک پیدا کردی
}

function App() {

    const [buttonColor, setButtonColor] = useState("MediumVioletRed");
    const [isEnabled, setIsEnabled] = useState(false);

    const newButtonColor = buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

    return (
        <div style={{display: "grid", placeContent: "center", height: "100vh", backgroundColor: "black"}}>
            <button disabled={isEnabled} onClick={() => setButtonColor(newButtonColor)} style={{backgroundColor: isEnabled ? "gray" : buttonColor}}>Change to {replaceCamelWithSpaces(newButtonColor)}</button>
            <label htmlFor="disable-button-checkbox">Disable button</label>
            <input id="disable-button-checkbox" defaultChecked={isEnabled} aria-checked={isEnabled} type="checkbox" onChange={e => setIsEnabled(e.target.checked)}/>
        </div>
    );
}

export default App;
