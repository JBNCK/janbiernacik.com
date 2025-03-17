function AboutMe() {
    const aboutMeTitle = "Über mich";
    const aboutMeText = (
        <>
            <p>Moin, ich bin Jan, 17 Jahre alt und lebe in Hamburg. Ich komme aus Polen, daher beherrsche ich <a className="bold">neben Deutsch und Englisch auch Polnisch fließend</a>. Ich interessiere mich für Informatik, insbesondere für die <a className="bold">Webentwicklung</a>, welche ich mir seit einigen Jahren größtenteils selber beibringe. In diesen Jahren habe ich bereits 2 Schülerpraktika im Bereich IT absolvieren können und starte im August meine <a className="bold link" href="https://www.fricke.de/">Ausbildung zum Fachinformatiker für Anwendungsentwicklung bei der Fricke Gruppe <i className="bi bi-arrow-up-right-square-fill"></i></a>. Neben meinen informatischen Tätigkeiten bin ich in einem hamburger Schützenverein angemeldet und mache Langstreckenfahrten mit dem Fahrrad.</p>
        </>
    )
    return (
        <div className="main-section">
            <h3 className="main-section-title">{aboutMeTitle}</h3>
            <p>{aboutMeText}</p>
        </div>
    );
}

export default AboutMe;