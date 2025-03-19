import './BackgroundElements.css';
import { useEffect } from 'react';

function BackgroundElements() {
    useEffect(() => {
        function moveElements() {
            const element1 = document.getElementById("background-element-1");
            const element2 = document.getElementById("background-element-2");
            
            if (element1 && element2) {
                let randomNum1 = Math.floor(Math.random() * 101);
                let randomNum2 = Math.floor(Math.random() * 101);
                let randomNum3 = Math.floor(Math.random() * 101);
                let randomNum4 = Math.floor(Math.random() * 101);
            
                element1.style.top = `${randomNum1}svh`;
                element1.style.left = `${randomNum2}%`;
                element2.style.bottom = `${randomNum3}svh`;
                element2.style.right = `${randomNum4}%`;
            }
        }
        moveElements();

        setInterval(() => moveElements(), 5000);

    }, []);

    return (
        <div id='background-element-wrapper'>
            <div className='background-element' id='background-element-1'></div>
            <div className='background-element' id='background-element-2'></div>
        </div>
    );
}

export default BackgroundElements;