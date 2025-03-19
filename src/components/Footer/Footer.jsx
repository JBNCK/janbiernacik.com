import { Link } from "react-router";
import isGerman from "../../scripts/is-german";

function Footer() {
    const componentContent = isGerman() ? {
        sourceCodeLinkText: "Quelltext",
        privacyLinkText: "Datenschutz"
    } : {
        sourceCodeLinkText: "Source Code",
        privacyLinkText: "Privacy"
    }

    return (
        <div className="main-section">
            <a className="bold link block" href="https://github.com/JBNCK/janbiernacik.com">{componentContent.sourceCodeLinkText}</a>
            <Link className="bold link" to="/privacy">{componentContent.privacyLinkText}</Link>
            <p>(c) 2025 Jan Biernacik</p>
        </div>
    );
}

export default Footer;