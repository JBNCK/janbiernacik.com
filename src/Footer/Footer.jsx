import { Link } from "react-router";

function Footer() {
    const privacyName = navigator.language === "de-DE" ? "Datenschutz" : "Privacy";

    return (
        <div className="main-section">
            <Link className="link" to="/privacy">{privacyName}</Link>
        </div>
    );
}

export default Footer;