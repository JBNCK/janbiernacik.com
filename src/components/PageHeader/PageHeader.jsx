import { Link } from "react-router";
import isGerman from "../../scripts/is-german";

function PageHeader(pageTitle) {
    const componentContent = isGerman() ? {
        goBackButtonText: "Zurück"
    } : {
        goBackButtonText: "Go Back"
    }

    return (
        <div className="main-section">
            <i className="bi bi-arrow-left-short"></i>
            <Link to="/" className='link-dark'>{componentContent.goBackButtonText}</Link>
            <h1>{pageTitle.pageTitle}</h1>
        </div>
    );
}

export default PageHeader;