import './HomePageBanner.css';
import memoji from './memoji.png';
import { useEffect } from 'react';
import isGerman from "../../scripts/is-german";

function HomePageBanner() {
    const componentContent = isGerman() ? {
        greeting: "Moin, ich bin"
    } : {
        greeting: "Hi, I'm"
    }

    useEffect(() => {
        const myName = document.getElementById("my-name");
        setInterval(() => {
            if (myName) {
                myName.style.borderRight = "2px solid var(--text-paragraph)";
                setTimeout(() => {
                    myName.style.borderRight = "0";
                },500);
            }
        },1000);
    }, []);
    
    return(
        <div className="home-page-banner">
            <div className="home-page-banner-items-left">
                <a id='my-name'>Jan Biernacik</a>
                <div className="social-icon-wrapper">
                    <a className='social-icon-link' href="https://www.github.com/janjbnck"><i className="bi bi-github social-icon"></i></a>
                    <a className='social-icon-link' href="https://www.instagram.com/janjbnck/"><i className="bi bi-instagram social-icon"></i></a>
                    <a className='social-icon-link' href="https://x.com/janjbnck"><i className="bi bi-twitter-x social-icon"></i></a>
                    <a className='social-icon-link' href="mailto:jan@biernacik.dev"><i className="bi bi-envelope-fill social-icon"></i></a>
                </div>
            </div>
            <img className="home-page-banner-picture" draggable="false" src={memoji}></img>
        </div>
    );
}

export default HomePageBanner;