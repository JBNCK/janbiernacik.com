import { useEffect } from "react";

function changeTitle(newTitle) {
    if (newTitle) {
        document.title = newTitle + " - Jan Biernacik";
    } else {
        document.title = "Jan Biernacik";
    }
}

export default changeTitle;