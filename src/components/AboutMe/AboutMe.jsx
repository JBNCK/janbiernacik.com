import isGerman from "../../scripts/is-german";

function AboutMe() {
    const componentContent = isGerman() ? {
        componentTitle: "Über mich",
        componentText: (
            <>
                <p>Moin, ich bin Jan, 17 Jahre alt und lebe in Hamburg. Ich komme aus Polen, daher beherrsche ich <a className="bold">neben Deutsch und Englisch auch Polnisch fließend</a>. Ich interessiere mich für Informatik, insbesondere für die <a className="bold">Webentwicklung</a>, welche ich mir seit einigen Jahren größtenteils selber beibringe. In diesen Jahren habe ich bereits 2 Schülerpraktika im Bereich IT absolvieren können und starte im August meine <a className="bold link" href="https://www.fricke.de/">Ausbildung zum Fachinformatiker für Anwendungsentwicklung bei der Fricke Gruppe <i className="bi bi-arrow-up-right-square-fill"></i></a>. Neben meinen informatischen Tätigkeiten bin ich in einem hamburger Schützenverein angemeldet und mache Langstreckenfahrten mit dem Fahrrad.</p>
            </>
        )
    } : {
        componentTitle: "About Me",
        componentText: (
            <>
                <p>Hello, I'm Jan, 17 years old, and I live in Hamburg. I come from Poland, so I speak <a className="bold">Polish fluently in addition to German and English</a>. I'm interested in computer science, particularly <a className="bold">web development</a>, which I've been teaching myself for the most part over the past few years. During these years, I've already completed 2 student internships in the IT field and will start my <a className="bold link" href="https://www.fricke.de/">apprenticeship as an IT specialist for application development at the Fricke Group <i className="bi bi-arrow-up-right-square-fill"></i></a> in August. Besides my IT activities, I'm a member of a shooting club and go on long-distance bike rides.</p>
            </>
        )
    }

    return (
        <div className="main-section">
            <h3 className="main-section-title">{componentContent.componentTitle}</h3>
            {componentContent.componentText}
        </div>
    );
}

export default AboutMe;