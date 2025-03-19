import { Link } from "react-router";

function GoBack(title) {
    const goBackButtonText = navigator.language === "de-DE" ? "Zurück" : "Go Back";

    return (
        <div className="main-section">
            <i className="bi bi-arrow-left-short"></i>
            <Link to="/" className='link-dark'>{goBackButtonText}</Link>
            <h1>{title.title}</h1>
        </div>
    );
}

export default GoBack;