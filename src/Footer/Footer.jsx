import { Link } from "react-router";

function Footer() {
    const sourceCodeLink = navigator.language === "de-DE" ? "Quelltext" : "Source Code";
    const privacyName = navigator.language === "de-DE" ? "Datenschutz" : "Privacy";
    /*const websiteInfo = navigator.language === "de-DE" ? (
        <p>Diese Website wurde in <a className="bold">Vite</a> geschrieben und wird auf <a className="bold">GitHub Pages</a> gehostet.</p>
    ) : (
        <p>This Website was written in <a className="bold">Vite</a> and is being hosted on <a className="bold">GitHub Pages</a>.</p>
    );*/

    return (
        <div className="main-section">
            <a className="bold link block" href="https://github.com/JBNCK/janbiernacik.com">{sourceCodeLink}</a>
            <Link className="bold link" to="/privacy">{privacyName}</Link>
            <p>(c) 2025 Jan Biernacik</p>
        </div>
    );
}

export default Footer;