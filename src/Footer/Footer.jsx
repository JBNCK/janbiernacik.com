import { Link } from "react-router";

function Footer() {
    const privacyName = navigator.language === "de-DE" ? "Datenschutz" : "Privacy";
    const websiteInfo = navigator.language === "de-DE" ? (
        <p>Diese Website wurde in <a className="bold">Vite</a> geschrieben und wird auf <a className="bold">GitHub Pages</a> gehostet. Das Design basiert auf der <a className="bold">Gruvbox</a>-Farbpalette.</p>
    ) : (
        <p>This Website was written in <a className="bold">Vite</a> and is being hosted on <a className="bold">GitHub Pages</a>. The design is based on the <a className="bold">Gruvbox</a> color palette.</p>
    );

    return (
        <div className="main-section">
            <a className="bold link block" href="https://github.com/JBNCK/janbiernacik.com">Quelltext</a>
            <Link className="bold link" to="/privacy">{privacyName}</Link>
            {websiteInfo}
        </div>
    );
}

export default Footer;