function isGerman() {
    switch (navigator.language) {
        case "de":
        case "de-AT":
        case "de-BE":
        case "de-CH":
        case "de-DE":
        case "de-IT":
        case "de-LI":
        case "de-LU":
            return true;
        default:
            return false;
    }
}

export default isGerman;