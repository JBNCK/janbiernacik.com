import './HomePageBanner.css';
import memoji from './memoji.png';

function HomePageBanner() {
    const greeting = "Moin, ich bin";

    return(
        <div className="home-page-banner">
            <div className="home-page-banner-items-left">
                <h3>{greeting}<br></br>
                    <a id="my-name">Jan Biernacik</a>
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