import React, {useState} from 'react';
import './App.css';

function App() {

    const [buttonColor, setButtonColor] = useState("red");
    const [isEnabled, setIsEnabled] = useState(false);

    const newButtonColor = buttonColor === "red" ? "blue" : "red";

    return (
        <div style={{display: "grid", placeContent: "center", height: "100vh", backgroundColor: "black"}}>
            <button disabled={isEnabled} onClick={() => setButtonColor(newButtonColor)} style={{backgroundColor: buttonColor}}>Change to {newButtonColor}</button>
            <input id="enable-button-checkbox" defaultChecked={isEnabled} aria-checked={isEnabled} type="checkbox" onChange={e => setIsEnabled(e.target.checked)}/>
        </div>
    );
}

export default App;
