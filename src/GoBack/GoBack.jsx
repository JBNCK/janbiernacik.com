import { Link } from "react-router";

function GoBack(title) {
    return (
        <div className="main-section">
            <i className="bi bi-arrow-left-short"></i>
            <Link to="/" className='link-dark'>Zurück</Link>
            <h1>{title.title}</h1>
        </div>
    );
}

export default GoBack;