import { useEffect } from "react";

function fadeIn() {
    useEffect(() => {
        window.scrollTo(0, 0);
    
        setTimeout(() => {
          document.querySelector(".page").style.opacity = "1";
        }, 1);
    });
}

export default fadeIn;