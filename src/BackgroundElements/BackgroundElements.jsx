import { useEffect } from "react";
import "./BackgroundElements.css";

function BackgroundElements() {
    useEffect(() => {
        document.getElementById("background-element-wrapper").style.opacity = "1";
        
        const interval = setInterval(() => {
            const randomNumber1 = Math.floor(100 * Math.random()) + 1;
            const randomNumber2 = Math.floor(100 * Math.random()) + 1;
            const randomNumber3 = Math.floor(100 * Math.random()) + 1;
            const randomNumber4 = Math.floor(100 * Math.random()) + 1;
            document.getElementById("background-element-1").style.top = randomNumber1 + "svh";
            document.getElementById("background-element-2").style.top = randomNumber3 + "svh";
            document.getElementById("background-element-1").style.right = randomNumber2 + "%";
            document.getElementById("background-element-2").style.right = randomNumber4 + "%";
        }, 5000);
    });
    
    return (
        <div id="background-element-wrapper">
            <div className="background-element" id="background-element-1"></div>
            <div className="background-element" id="background-element-2"></div>
        </div>
    );
}

export default BackgroundElements;