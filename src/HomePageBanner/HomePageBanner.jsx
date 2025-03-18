import './HomePageBanner.css';
import memoji from './memoji.png';
import { useEffect } from 'react';

function HomePageBanner() {
    const isGerman = navigator.language === "de-DE";
    const greeting = isGerman ? "Moin, ich bin" : "Hi, I'm";

    useEffect(() => {
        const myName = document.getElementById("my-name");
        setInterval(() => {
            if (myName) {
                myName.style.borderRight = "2px solid var(--text-paragraph)";
                setTimeout(() => {
                    myName.style.borderRight = "0";
                },1000);
            }
        },2000);
    }, []);
    
    return(
        <div className="home-page-banner">
            <div className="home-page-banner-items-left">
                <h3>{greeting}<br></br>
                    <a id="my-name">&lt;Jan Biernacik /&gt;</a>
                </h3>
                <div className="social-icon-wrapper">
                    <a href="https://www.github.com/JBNCK"><i className="bi bi-github social-icon"></i></a>
                    <a href="https://www.instagram.com/janj_bnck/"><i className="bi bi-instagram social-icon"></i></a>
                    <a href="https://x.com/janj_bnck"><i className="bi bi-twitter-x social-icon"></i></a>
                    <a href="mailto:jan@biernacik.dev"><i className="bi bi-envelope-fill social-icon"></i></a>
                </div>
            </div>
            <img className="home-page-banner-picture" src={memoji}></img>
        </div>
    );
}

export default HomePageBanner;