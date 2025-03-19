import PageHeader from '../components/PageHeader/PageHeader';
import isGerman from '../scripts/is-german';
import fadeIn from '../scripts/fade-in';
import changeTitle from '../scripts/change-title';

function Privacy() {
    fadeIn();

    const pageContent = isGerman() ? {
        pageTitle: "Datenschutz",
        privacyPolicyText: (
            <>
                <div className="main-section">
                    <h3 className="main-section-title">Präambel</h3>
                    <p>Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als "Daten" bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z. B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als "Onlineangebot").</p>
                    <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
                    <p><a className='bold'>Stand:</a> 17. März 2025</p>
                    <h3 className='main-section-subtitle'>Verantwortlicher</h3>
                    <p>Jan Biernacik<br></br>E-Mail-Adresse: <a className="bold link" href="mailto:jan@biernacik.dev">jan@biernacik.dev</a></p>
                </div>
            
                <div className="main-section">
                    <h3 className="main-section-title">Übersicht der Verarbeitungen</h3>
                    <p>Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.</p>
                    <h3 className='main-section-subtitle'>Arten der verarbeiteten Daten</h3>
                    <ul>
                    <li>Nutzungsdaten.</li>
                    <li>Meta-, Kommunikations- und Verfahrensdaten.</li>
                    <li>Protokolldaten.</li>
                    </ul>
                    <h3 className='main-section-subtitle'>Kategorien betroffener Personen</h3>
                    <ul>
                    <li>Nutzer.</li>
                    </ul>
                    <h3 className='main-section-subtitle'>Zwecke der Verarbeitung</h3>
                    <ul>
                    <li>Sicherheitsmaßnahmen.</li>
                    <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
                    <li>Informationstechnische Infrastruktur.</li>
                    </ul>
                </div>
            
                <div className="main-section">
                    <h3 className="main-section-title">Maßgebliche Rechtsgrundlagen</h3>
                    <p>
                    <span className="bold">Maßgebliche Rechtsgrundlagen nach der DSGVO: </span>
                    Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.
                    </p>
                    <ul>
                    <li>
                        <span className="bold">Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO: </span>
                        Die betroffene Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.
                    </li>
                    <li>
                        <span className="bold">Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO: </span>
                        - die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten notwendig, vorausgesetzt, dass die Interessen, Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten verlangen, nicht überwiegen.
                    </li>
                    </ul>
                    <p>
                    <span className="bold">Nationale Datenschutzregelungen in Deutschland: </span>
                    Zusätzlich zu den Datenschutzregelungen der DSGVO gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling. Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung gelangen.
                    </p>
                    <p>
                    <span className="bold">Hinweis auf Geltung DSGVO und Schweizer DSG: </span>
                    Diese Datenschutzhinweise dienen sowohl der Informationserteilung nach dem Schweizer DSG als auch nach der Datenschutzgrundverordnung (DSGVO). Aus diesem Grund bitten wir Sie zu beachten, dass aufgrund der breiteren räumlichen Anwendung und Verständlichkeit die Begriffe der DSGVO verwendet werden. Insbesondere statt der im Schweizer DSG verwendeten Begriffe „Bearbeitung" von „Personendaten", "überwiegendes Interesse" und "besonders schützenswerte Personendaten" werden die in der DSGVO verwendeten Begriffe „Verarbeitung" von „personenbezogenen Daten" sowie "berechtigtes Interesse" und "besondere Kategorien von Daten" verwendet. Die gesetzliche Bedeutung der Begriffe wird jedoch im Rahmen der Geltung des Schweizer DSG weiterhin nach dem Schweizer DSG bestimmt.
                    </p>
                </div>
            
                <div className="main-section">
                    <h3 className="main-section-title">Sicherheitsmaßnahmen</h3>
                    <p>Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.</p>
                    <p>Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.</p>
                    <p>Sicherung von Online-Verbindungen durch TLS-/SSL-Verschlüsselungstechnologie (HTTPS): Um die Daten der Nutzer, die über unsere Online-Dienste übertragen werden, vor unerlaubten Zugriffen zu schützen, setzen wir auf die TLS-/SSL-Verschlüsselungstechnologie. Secure Sockets Layer (SSL) und Transport Layer Security (TLS) sind die Eckpfeiler der sicheren Datenübertragung im Internet. Diese Technologien verschlüsseln die Informationen, die zwischen der Website oder App und dem Browser des Nutzers (oder zwischen zwei Servern) übertragen werden, wodurch die Daten vor unbefugtem Zugriff geschützt sind. TLS, als die weiterentwickelte und sicherere Version von SSL, gewährleistet, dass alle Datenübertragungen den höchsten Sicherheitsstandards entsprechen. Wenn eine Website durch ein SSL-/TLS-Zertifikat gesichert ist, wird dies durch die Anzeige von HTTPS in der URL signalisiert. Dies dient als ein Indikator für die Nutzer, dass ihre Daten sicher und verschlüsselt übertragen werden.</p>
                </div>
            
                <div className="main-section">
                    <h3 className="main-section-title">Übermittlung von personenbezogenen Daten</h3>
                    <p>Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass diese an andere Stellen, Unternehmen, rechtlich selbstständige Organisationseinheiten oder Personen übermittelt beziehungsweise ihnen gegenüber offengelegt werden. Zu den Empfängern dieser Daten können z. B. mit IT-Aufgaben beauftragte Dienstleister gehören oder Anbieter von Diensten und Inhalten, die in eine Website eingebunden sind. In solchen Fällen beachten wir die gesetzlichen Vorgaben und schließen insbesondere entsprechende Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den Empfängern Ihrer Daten ab.</p>
                </div>
            
                <div className="main-section">
                    <h3 className="main-section-title">Internationale Datentransfers</h3>
                    <p>
                    Datenverarbeitung in Drittländern: Sofern wir Daten in einem Drittland (d. h., außerhalb der Europäischen Union (EU), des Europäischen Wirtschaftsraums (EWR)) verarbeiten oder die Verarbeitung im Rahmen der Inanspruchnahme von Diensten Dritter oder der Offenlegung bzw. Übermittlung von Daten an andere Personen, Stellen oder Unternehmen stattfindet, erfolgt dies nur im Einklang mit den gesetzlichen Vorgaben. Sofern das Datenschutzniveau in dem Drittland mittels eines Angemessenheitsbeschlusses anerkannt wurde (Art. 45 DSGVO), dient dieser als Grundlage des Datentransfers. Im Übrigen erfolgen Datentransfers nur dann, wenn das Datenschutzniveau anderweitig gesichert ist, insbesondere durch Standardvertragsklauseln (Art. 46 Abs. 2 lit. c) DSGVO), ausdrückliche Einwilligung oder im Fall vertraglicher oder gesetzlich erforderlicher Übermittlung (Art. 49 Abs. 1 DSGVO). Im Übrigen teilen wir Ihnen die Grundlagen der Drittlandübermittlung bei den einzelnen Anbietern aus dem Drittland mit, wobei die Angemessenheitsbeschlüsse als Grundlagen vorrangig gelten. Informationen zu Drittlandtransfers und vorliegenden Angemessenheitsbeschlüssen können dem Informationsangebot der EU-Kommission entnommen werden:
                    <a className="bold link" href="https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection_en?prefLang=de" target="_blank">https:<wbr></wbr>//commission.europa.eu/<wbr></wbr>law/<wbr></wbr>law-topic/<wbr></wbr>data-protection/<wbr></wbr>international-dimension-data-protection_en?prefLang=de</a>. Im Rahmen des sogenannten „Data Privacy Framework" (DPF) hat die EU-Kommission das Datenschutzniveau ebenfalls für bestimmte Unternehmen aus den USA im Rahmen der Angemessenheitsbeschlusses vom 10.07.2023 als sicher anerkannt. Die Liste der zertifizierten Unternehmen als auch weitere Informationen zu dem DPF können Sie der Website des Handelsministeriums der USA unter 
                    <a className="bold link" href="https://www.dataprivacyframework.gov/" target="_blank">https:<wbr></wbr>//www.dataprivacyframework.gov/<wbr></wbr></a> (in Englisch) entnehmen. Wir informieren Sie im Rahmen der Datenschutzhinweise, welche von uns eingesetzten Diensteanbieter unter dem Data Privacy Framework zertifiziert sind.
                    </p>
                </div>
            
                <div className="main-section">
                    <h3 className="main-section-title">Allgemeine Informationen zur Datenspeicherung und Löschung</h3>
                    <p>Wir löschen personenbezogene Daten, die wir verarbeiten, gemäß den gesetzlichen Bestimmungen, sobald die zugrundeliegenden Einwilligungen widerrufen werden oder keine weiteren rechtlichen Grundlagen für die Verarbeitung bestehen. Dies betrifft Fälle, in denen der ursprüngliche Verarbeitungszweck entfällt oder die Daten nicht mehr benötigt werden. Ausnahmen von dieser Regelung bestehen, wenn gesetzliche Pflichten oder besondere Interessen eine längere Aufbewahrung oder Archivierung der Daten erfordern.</p>
                    <p>Insbesondere müssen Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen oder deren Speicherung notwendig ist zur Rechtsverfolgung oder zum Schutz der Rechte anderer natürlicher oder juristischer Personen, entsprechend archiviert werden.</p>
                    <p>Unsere Datenschutzhinweise enthalten zusätzliche Informationen zur Aufbewahrung und Löschung von Daten, die speziell für bestimmte Verarbeitungsprozesse gelten.</p>
                    <p>Bei mehreren Angaben zur Aufbewahrungsdauer oder Löschungsfristen eines Datums, ist stets die längste Frist maßgeblich.</p>
                    <p>Beginnt eine Frist nicht ausdrücklich zu einem bestimmten Datum und beträgt sie mindestens ein Jahr, so startet sie automatisch am Ende des Kalenderjahres, in dem das fristauslösende Ereignis eingetreten ist. Im Fall laufender Vertragsverhältnisse, in deren Rahmen Daten gespeichert werden, ist das fristauslösende Ereignis der Zeitpunkt des Wirksamwerdens der Kündigung oder sonstige Beendigung des Rechtsverhältnisses.</p>
                    <p>Daten, die nicht mehr für den ursprünglich vorgesehenen Zweck, sondern aufgrund gesetzlicher Vorgaben oder anderer Gründe aufbewahrt werden, verarbeiten wir ausschließlich zu den Gründen, die ihre Aufbewahrung rechtfertigen.</p>
                    <p><span className="bold">Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</span></p>
                    <ul>
                    <li>
                        <span className="bold">Aufbewahrung und Löschung von Daten: </span>
                        Die folgenden allgemeinen Fristen gelten für die Aufbewahrung und Archivierung nach deutschem Recht:
                        <ul>
                        <li>10 Jahre - Aufbewahrungsfrist für Bücher und Aufzeichnungen, Jahresabschlüsse, Inventare, Lageberichte, Eröffnungsbilanz sowie die zu ihrem Verständnis erforderlichen Arbeitsanweisungen und sonstigen Organisationsunterlagen (§ 147 Abs. 1 Nr. 1 i.V.m. Abs. 3 AO, § 14b Abs. 1 UStG, § 257 Abs. 1 Nr. 1 i.V.m. Abs. 4 HGB).</li>
                        <li>8 Jahre - Buchungsbelege, wie z. B. Rechnungen und Kostenbelege (§ 147 Abs. 1 Nr. 4 und 4a i.V.m. Abs. 3 Satz 1 AO sowie § 257 Abs. 1 Nr. 4 i.V.m. Abs. 4 HGB).</li>
                        <li>6 Jahre - Übrige Geschäftsunterlagen: empfangene Handels- oder Geschäftsbriefe, Wiedergaben der abgesandten Handels- oder Geschäftsbriefe, sonstige Unterlagen, soweit sie für die Besteuerung von Bedeutung sind, z. B. Stundenlohnzettel, Betriebsabrechnungsbögen, Kalkulationsunterlagen, Preisauszeichnungen, aber auch Lohnabrechnungsunterlagen, soweit sie nicht bereits Buchungsbelege sind und Kassenstreifen (§ 147 Abs. 1 Nr. 2, 3, 5 i.V.m. Abs. 3 AO, § 257 Abs. 1 Nr. 2 u. 3 i.V.m. Abs. 4 HGB).</li>
                        <li>3 Jahre - Daten, die erforderlich sind, um potenzielle Gewährleistungs- und Schadensersatzansprüche oder ähnliche vertragliche Ansprüche und Rechte zu berücksichtigen sowie damit verbundene Anfragen zu bearbeiten, basierend auf früheren Geschäftserfahrungen und üblichen Branchenpraktiken, werden für die Dauer der regulären gesetzlichen Verjährungsfrist von drei Jahren gespeichert (§§ 195, 199 BGB).</li>
                        </ul>
                    </li>
                    </ul>
                </div>
            
                <div className="main-section">
                    <h3 className="main-section-title">Bereitstellung des Onlineangebots und Webhosting</h3>
                    <p>Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen zu können. Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist, um die Inhalte und Funktionen unserer Online-Dienste an den Browser oder das Endgerät der Nutzer zu übermitteln.</p>
                    <ul>
                    <li><span className="bold">Verarbeitete Datenarten:</span> Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und Funktionen); Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen). Protokolldaten (z. B. Logfiles betreffend Logins oder den Abruf von Daten oder Zugriffszeiten.).</li>
                    <li><span className="bold">Betroffene Personen:</span> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
                    <li><span className="bold">Zwecke der Verarbeitung:</span> Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit; Informationstechnische Infrastruktur (Betrieb und Bereitstellung von Informationssystemen und technischen Geräten (Computer, Server etc.)). Sicherheitsmaßnahmen.</li>
                    <li><span className="bold">Aufbewahrung und Löschung:</span> Löschung entsprechend Angaben im Abschnitt "Allgemeine Informationen zur Datenspeicherung und Löschung".</li>
                    <li><span className="bold">Rechtsgrundlagen:</span> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li>
                    </ul>
                    <p><span className="bold">Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</span></p>
                    <ul>
                    <li>
                        <span className="bold">Erhebung von Zugriffsdaten und Logfiles: </span>
                        Der Zugriff auf unser Onlineangebot wird in Form von sogenannten "Server-Logfiles" protokolliert. Zu den Serverlogfiles können die Adresse und der Name der abgerufenen Webseiten und Dateien, Datum und Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite) und im Regelfall IP-Adressen und der anfragende Provider gehören. Die Serverlogfiles können zum einen zu Sicherheitszwecken eingesetzt werden, z. B. um eine Überlastung der Server zu vermeiden (insbesondere im Fall von missbräuchlichen Angriffen, sogenannten DDoS-Attacken), und zum anderen, um die Auslastung der Server und ihre Stabilität sicherzustellen;
                        <span><span className="bold">Rechtsgrundlagen:</span> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</span>
                        <span className="bold">Löschung von Daten:</span> Logfile-Informationen werden für die Dauer von maximal 30 Tagen gespeichert und danach gelöscht oder anonymisiert. Daten, deren weitere Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen Vorfalls von der Löschung ausgenommen.
                    </li>
                    <li>
                        <span className="bold">Hetzner: </span>
                        Leistungen auf dem Gebiet der Bereitstellung von informationstechnischer Infrastruktur und verbundenen Dienstleistungen (z. B. Speicherplatz und/oder Rechenkapazitäten);
                        <span className="bold"> Dienstanbieter:</span> Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Deutschland;
                        <span><span className="bold"> Rechtsgrundlagen:</span> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO);</span>
                        <span className="bold"> Website:</span> <a className="bold link" href="https://www.hetzner.com" target="_blank">https:<wbr></wbr>//www.hetzner.com</a>;
                        <span className="bold"> Datenschutzerklärung:</span> <a className="bold link" href="https://www.hetzner.com/de/rechtliches/datenschutz" target="_blank">https:<wbr></wbr>//www.hetzner.com/<wbr></wbr>de/<wbr></wbr>rechtliches/<wbr></wbr>datenschutz</a>.
                        <span className="bold"> Auftragsverarbeitungsvertrag:</span> <a className="bold link" href="https://docs.hetzner.com/de/general/general-terms-and-conditions/data-privacy-faq/" target="_blank">https:<wbr></wbr>//docs.hetzner.com/<wbr></wbr>de/<wbr></wbr>general/<wbr></wbr>general-terms-and-conditions/<wbr></wbr>data-privacy-faq/<wbr></wbr></a>.
                    </li>
                    </ul>
                </div>
            
                <div className="main-section">
                    <h3 className="main-section-title">Plug-ins und eingebettete Funktionen sowie Inhalte</h3>
                    <p>Wir binden Funktions- und Inhaltselemente in unser Onlineangebot ein, die von den Servern ihrer jeweiligen Anbieter (nachfolgend als „Drittanbieter" bezeichnet) bezogen werden. Dabei kann es sich zum Beispiel um Grafiken, Videos oder Stadtpläne handeln (nachfolgend einheitlich als „Inhalte" bezeichnet).</p>
                    <p>Die Einbindung setzt immer voraus, dass die Drittanbieter dieser Inhalte die IP-Adresse der Nutzer verarbeiten, da sie ohne IP-Adresse die Inhalte nicht an deren Browser senden könnten. Die IP-Adresse ist damit für die Darstellung dieser Inhalte oder Funktionen erforderlich. Wir bemühen uns, nur solche Inhalte zu verwenden, deren jeweilige Anbieter die IP-Adresse lediglich zur Auslieferung der Inhalte anzuwenden. Drittanbieter können ferner sogenannte Pixel-Tags (unsichtbare Grafiken, auch als „Web Beacons" bezeichnet) für statistische oder Marketingzwecke einsetzen. Durch die „Pixel-Tags" können Informationen, wie etwa der Besucherverkehr auf den Seiten dieser Website, ausgewertet werden. Die pseudonymen Informationen können darüber hinaus in Cookies auf dem Gerät der Nutzer gespeichert werden und unter anderem technische Auskünfte zum Browser und zum Betriebssystem, zu verweisenden Websites, zur Besuchszeit sowie weitere Angaben zur Nutzung unseres Onlineangebots enthalten, aber auch mit solchen Informationen aus anderen Quellen verbunden werden.</p>
                    <p><span className="bold">Hinweise zu Rechtsgrundlagen:</span> Sofern wir die Nutzer um ihre Einwilligung in den Einsatz der Drittanbieter bitten, stellt die Rechtsgrundlage der Datenverarbeitung die Erlaubnis dar. Ansonsten werden die Nutzerdaten auf Grundlage unserer berechtigten Interessen (d. h. Interesse an effizienten, wirtschaftlichen und empfängerfreundlichen Leistungen) verarbeitet. In diesem Zusammenhang möchten wir Sie auch auf die Informationen zur Verwendung von Cookies in dieser Datenschutzerklärung hinweisen.</p>
                    <ul>
                    <li><span>Verarbeitete Datenarten:</span> Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und Funktionen). Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen).</li>
                    <li><span>Betroffene Personen:</span> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
                    <li><span>Zwecke der Verarbeitung:</span> Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
                    <li><span>Aufbewahrung und Löschung:</span> Löschung entsprechend Angaben im Abschnitt "Allgemeine Informationen zur Datenspeicherung und Löschung". Speicherung von Cookies von bis zu 2 Jahren (Sofern nicht anders angegeben, können Cookies und ähnliche Speichermethoden für einen Zeitraum von zwei Jahren auf den Geräten der Nutzer gespeichert werden.).</li>
                    <li><span>Rechtsgrundlagen:</span> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO. Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO.</li>
                    </ul>
                    <p><span className="bold">Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</span></p>
                    <span className="bold">Google Fonts (Bezug vom Google Server): </span>
                        Bezug von Schriften (und Symbolen) zum Zwecke einer technisch sicheren, wartungsfreien und effizienten Nutzung von Schriften und Symbolen im Hinblick auf Aktualität und Ladezeiten, deren einheitliche Darstellung und Berücksichtigung möglicher lizenzrechtlicher Beschränkungen. Dem Anbieter der Schriftarten wird die IP-Adresse des Nutzers mitgeteilt, damit die Schriftarten im Browser des Nutzers zur Verfügung gestellt werden können. Darüber hinaus werden technische Daten (Spracheinstellungen, Bildschirmauflösung, Betriebssystem, verwendete Hardware) übermittelt, die für die Bereitstellung der Schriften in Abhängigkeit von den verwendeten Geräten und der technischen Umgebung notwendig sind. Diese Daten können auf einem Server des Anbieter der Schriftarten in den USA verarbeitet werden - Beim Besuch unseres Onlineangebotes senden die Browser der Nutzer ihre Browser HTTP-Anfragen an die Google Fonts Web API (d. h. eine Softwareschnittstelle für den Abruf der Schriftarten). Die Google Fonts Web API stellt den Nutzern die Cascading Style Sheets (CSS) von Google Fonts und danach die in der CCS angegebenen Schriftarten zur Verfügung. Zu diesen HTTP-Anfragen gehören (1) die vom jeweiligen Nutzer für den Zugriff auf das Internet verwendete IP-Adresse, (2) die angeforderte URL auf dem Google-Server und (3) die HTTP-Header, einschließlich des User-Agents, der die Browser- und Betriebssystemversionen der Websitebesucher beschreibt, sowie die Verweis-URL (d. h. die Webseite, auf der die Google-Schriftart angezeigt werden soll). IP-Adressen werden weder auf Google-Servern protokolliert noch gespeichert und sie werden nicht analysiert. Die Google Fonts Web API protokolliert Details der HTTP-Anfragen (angeforderte URL, User-Agent und Verweis-URL). Der Zugriff auf diese Daten ist eingeschränkt und streng kontrolliert. Die angeforderte URL identifiziert die Schriftfamilien, für die der Nutzer Schriftarten laden möchte. Diese Daten werden protokolliert, damit Google bestimmen kann, wie oft eine bestimmte Schriftfamilie angefordert wird. Bei der Google Fonts Web API muss der User-Agent die Schriftart anpassen, die für den jeweiligen Browsertyp generiert wird. Der User-Agent wird in erster Linie zum Debugging protokolliert und verwendet, um aggregierte Nutzungsstatistiken zu generieren, mit denen die Beliebtheit von Schriftfamilien gemessen wird. Diese zusammengefassten Nutzungsstatistiken werden auf der Seite „Analysen" von Google Fonts veröffentlicht. Schließlich wird die Verweis-URL protokolliert, sodass die Daten für die Wartung der Produktion verwendet und ein aggregierter Bericht zu den Top-Integrationen basierend auf der Anzahl der Schriftartenanfragen generiert werden kann. Google verwendet laut eigener Auskunft keine der von Google Fonts erfassten Informationen, um Profile von Endnutzern zu erstellen oder zielgerichtete Anzeigen zu schalten;
                        <span>Dienstanbieter:</span> Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland;
                        <span> Rechtsgrundlagen:</span> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO;
                        <span> Website: </span> <a className="bold link" href="https://fonts.google.com/" target="_blank">https:<wbr></wbr>//fonts.google.com/<wbr></wbr></a>;
                        <span> Datenschutzerklärung: </span> <a className="bold link" href="https://policies.google.com/privacy" target="_blank">https:<wbr></wbr>//policies.google.com/<wbr></wbr>privacy</a>;
                        <span> Grundlage Drittlandtransfers: </span> Data Privacy Framework (DPF).
                        <span> Weitere Informationen: </span> <a className="bold link" href="https://developers.google.com/fonts/faq/privacy?hl=de" target="_blank">https:<wbr></wbr>//developers.google.com/<wbr></wbr>fonts/<wbr></wbr>faq/<wbr></wbr>privacy?hl=de</a>.
                </div>
            
                <div className="main-section">
                    <h3 className="main-section-title">Änderung und Aktualisierung</h3>
                    <p>Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z. B. Einwilligung) oder eine sonstige individuelle Benachrichtigung erforderlich wird.</p>
                    <p>Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen von Unternehmen und Organisationen angeben, bitten wir zu beachten, dass die Adressen sich über die Zeit ändern können und bitten die Angaben vor Kontaktaufnahme zu prüfen.</p>
                    <p className="seal">
                    <a className="bold link" href="https://datenschutz-generator.de/" title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken." target="_blank" rel="noopener noreferrer nofollow">Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke </a>
                    <i className="bi bi-arrow-up-right-square-fill"></i>
                    </p>
                </div>
            </>
        )
    } : {
        pageTitle: "Privacy",
        privacyPolicyText: (
            <>
                <div className="main-section">
                    <h3 className="main-section-title">Preamble</h3>
                    <p>With the following privacy policy, we would like to inform you about the types of your personal data (hereinafter also referred to as "data") that we process, for what purposes, and to what extent. The privacy policy applies to all processing of personal data carried out by us, both in the context of providing our services and, in particular, on our websites, in mobile applications, and within external online presences, such as our social media profiles (hereinafter collectively referred to as "online offering").</p>
                    <p>The terms used are not gender-specific.</p>
                    <p><a className='bold'>As of:</a> March 17, 2025</p>
                    <h3>Controller</h3>
                    <p>Jan Biernacik<br></br>Email address: <a className="bold link" href="mailto:jan@biernacik.dev">jan@biernacik.dev</a></p>
                </div>
            
                <div className="main-section">
                    <h3 className="main-section-title">Overview of Processing</h3>
                    <p>The following overview summarizes the types of data processed and the purposes of their processing and refers to the data subjects.</p>
                    <h3>Types of Data Processed</h3>
                    <ul>
                    <li>Usage data.</li>
                    <li>Meta, communication, and procedural data.</li>
                    <li>Log data.</li>
                    </ul>
                    <h3>Categories of Data Subjects</h3>
                    <ul>
                    <li>Users.</li>
                    </ul>
                    <h3>Purposes of Processing</h3>
                    <ul>
                    <li>Security measures.</li>
                    <li>Provision of our online offering and user-friendliness.</li>
                    <li>Information technology infrastructure.</li>
                    </ul>
                </div>
            
                <div className="main-section">
                    <h3 className="main-section-title">Relevant Legal Bases</h3>
                    <p>
                    <span className="bold">Relevant legal bases under the GDPR: </span>
                    Below, you will find an overview of the legal bases of the GDPR on which we process personal data. Please note that, in addition to the provisions of the GDPR, national data protection regulations may apply in your or our country of residence or domicile. Should more specific legal bases be relevant in individual cases, we will inform you of these in the privacy policy.
                    </p>
                    <ul>
                    <li>
                        <span className="bold">Consent (Art. 6(1)(a) GDPR): </span>
                        The data subject has given consent to the processing of their personal data for one or more specific purposes.
                    </li>
                    <li>
                        <span className="bold">Legitimate Interests (Art. 6(1)(f) GDPR): </span>
                        Processing is necessary for the purposes of the legitimate interests pursued by the controller or a third party, except where such interests are overridden by the interests or fundamental rights and freedoms of the data subject that require the protection of personal data.
                    </li>
                    </ul>
                    <p>
                    <span className="bold">National data protection regulations in Germany: </span>
                    In addition to the data protection regulations of the GDPR, national data protection regulations apply in Germany. This includes, in particular, the Federal Data Protection Act (Bundesdatenschutzgesetz – BDSG), which contains specific provisions on the right to information, the right to erasure, the right to object, the processing of special categories of personal data, processing for other purposes, and transmission, as well as automated decision-making in individual cases, including profiling. Furthermore, data protection laws of the individual federal states may also apply.
                    </p>
                    <p>
                    <span className="bold">Note on the applicability of the GDPR and Swiss DSG: </span>
                    These privacy notices serve to provide information under both the Swiss Federal Act on Data Protection (DSG) and the General Data Protection Regulation (GDPR). For this reason, please note that, due to broader spatial application and comprehensibility, the terms of the GDPR are used. In particular, instead of the terms "processing" of "personal data," "overriding interest," and "particularly sensitive personal data" used in the Swiss DSG, the terms "processing" of "personal data," "legitimate interest," and "special categories of data" as used in the GDPR are applied. However, the legal meaning of the terms will continue to be determined under the Swiss DSG where applicable.
                    </p>
                </div>
            
                <div className="main-section">
                    <h3 className="main-section-title">Security Measures</h3>
                    <p>In accordance with legal requirements and taking into account the state of the art, implementation costs, and the nature, scope, circumstances, and purposes of the processing, as well as the varying likelihood and severity of risks to the rights and freedoms of natural persons, we implement appropriate technical and organizational measures to ensure a level of protection appropriate to the risk.</p>
                    <p>These measures include, in particular, ensuring the confidentiality, integrity, and availability of data by controlling physical and electronic access to the data, as well as access, input, disclosure, availability, and separation of the data. Furthermore, we have established procedures to ensure the exercise of data subjects' rights, the deletion of data, and responses to data breaches. Additionally, we consider the protection of personal data during the development or selection of hardware, software, and processes in accordance with the principle of data protection by design and default settings.</p>
                    <p>Securing online connections using TLS/SSL encryption technology (HTTPS): To protect user data transmitted via our online services from unauthorized access, we use TLS/SSL encryption technology. Secure Sockets Layer (SSL) and Transport Layer Security (TLS) are the cornerstones of secure data transmission on the internet. These technologies encrypt the information transmitted between the website or app and the user's browser (or between two servers), protecting the data from unauthorized access. TLS, as the more advanced and secure version of SSL, ensures that all data transmissions meet the highest security standards. When a website is secured with an SSL/TLS certificate, this is indicated by the display of HTTPS in the URL. This serves as an indicator to users that their data is being transmitted securely and encrypted.</p>
                </div>
            
                <div className="main-section">
                    <h3 className="main-section-title">Transmission of Personal Data</h3>
                    <p>In the course of our processing of personal data, it may happen that this data is transmitted to or disclosed to other entities, companies, legally independent organizational units, or persons. Recipients of this data may include, for example, service providers tasked with IT functions or providers of services and content embedded in a website. In such cases, we comply with legal requirements and, in particular, conclude appropriate contracts or agreements with the recipients of your data to ensure the protection of your data.</p>
                </div>
            
                <div className="main-section">
                    <h3 className="main-section-title">International Data Transfers</h3>
                    <p>
                    Data processing in third countries: If we process data in a third country (i.e., outside the European Union (EU) or the European Economic Area (EEA)), or if processing occurs in the context of using third-party services or disclosing or transferring data to other persons, entities, or companies, this is done only in accordance with legal requirements. If the level of data protection in the third country has been recognized by an adequacy decision (Art. 45 GDPR), this serves as the basis for the data transfer. Otherwise, data transfers only occur if the level of data protection is otherwise ensured, in particular through standard contractual clauses (Art. 46(2)(c) GDPR), explicit consent, or in the case of contractual or legally required transfers (Art. 49(1) GDPR). Furthermore, we will inform you of the basis for third-country transfers with the respective providers from the third country, with adequacy decisions taking precedence. Information on third-country transfers and existing adequacy decisions can be obtained from the information provided by the EU Commission: 
                    <a className="bold link" href="https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection_en?prefLang=de" target="_blank">https:<wbr></wbr>//commission.europa.eu/<wbr></wbr>law/<wbr></wbr>law-topic/<wbr></wbr>data-protection/<wbr></wbr>international-dimension-data-protection_en?prefLang=de</a>. As part of the so-called "Data Privacy Framework" (DPF), the EU Commission has also recognized the data protection level for certain companies in the USA as secure under the adequacy decision of July 10, 2023. The list of certified companies and further information on the DPF can be found on the website of the U.S. Department of Commerce at 
                    <a className="bold link" href="https://www.dataprivacyframework.gov/" target="_blank">https:<wbr></wbr>//www.dataprivacyframework.gov/<wbr></wbr></a> (in English). We will inform you within the privacy notices which service providers we use that are certified under the Data Privacy Framework.
                    </p>
                </div>
            
                <div className="main-section">
                    <h3 className="main-section-title">General Information on Data Storage and Deletion</h3>
                    <p>We delete personal data we process in accordance with legal requirements as soon as the underlying consents are revoked or no further legal bases for processing exist. This applies to cases where the original purpose of processing no longer exists or the data is no longer needed. Exceptions to this rule exist if statutory obligations or special interests require longer retention or archiving of the data.</p>
                    <p>In particular, data that must be retained for commercial or tax reasons or whose storage is necessary for legal prosecution or the protection of the rights of other natural or legal persons must be archived accordingly.</p>
                    <p>Our privacy notices contain additional information on the retention and deletion of data that specifically applies to certain processing operations.</p>
                    <p>If multiple retention periods or deletion deadlines are specified for a piece of data, the longest period is always decisive.</p>
                    <p>If a period does not explicitly start on a specific date and lasts at least one year, it automatically begins at the end of the calendar year in which the event triggering the period occurred. In the case of ongoing contractual relationships during which data is stored, the triggering event is the effective date of termination or other conclusion of the legal relationship.</p>
                    <p>Data that is no longer retained for its originally intended purpose but due to legal requirements or other reasons is processed solely for the reasons justifying its retention.</p>
                    <p><span className="bold">Further information on processing operations, procedures, and services:</span></p>
                    <ul>
                    <li>
                        <span className="bold">Retention and deletion of data: </span>
                        The following general deadlines apply to retention and archiving under German law:
                        <ul>
                        <li>10 years - Retention period for books and records, annual financial statements, inventories, management reports, opening balance sheets, as well as the work instructions and other organizational documents necessary for their understanding (§ 147(1) No. 1 in conjunction with (3) AO, § 14b(1) UStG, § 257(1) No. 1 in conjunction with (4) HGB).</li>
                        <li>8 years - Accounting documents, such as invoices and expense receipts (§ 147(1) No. 4 and 4a in conjunction with (3) sentence 1 AO and § 257(1) No. 4 in conjunction with (4) HGB).</li>
                        <li>6 years - Other business documents: received commercial or business letters, copies of sent commercial or business letters, other documents relevant to taxation, e.g., hourly wage slips, operating cost sheets, calculation documents, price labels, as well as payroll records, unless they are already accounting documents, and cash register receipts (§ 147(1) No. 2, 3, 5 in conjunction with (3) AO, § 257(1) No. 2 and 3 in conjunction with (4) HGB).</li>
                        <li>3 years - Data required to consider potential warranty and compensation claims or similar contractual claims and rights, as well as to process related inquiries, based on previous business experience and common industry practices, are stored for the duration of the regular statutory limitation period of three years (§§ 195, 199 BGB).</li>
                        </ul>
                    </li>
                    </ul>
                </div>
            
                <div className="main-section">
                    <h3 className="main-section-title">Provision of the Online Offering and Web Hosting</h3>
                    <p>We process users' data to provide them with our online services. For this purpose, we process the user's IP address, which is necessary to transmit the content and functions of our online services to the user's browser or device.</p>
                    <ul>
                    <li><span className="bold">Types of data processed:</span> Usage data (e.g., page views and dwell time, click paths, usage intensity and frequency, device types and operating systems used, interactions with content and functions); Meta, communication, and procedural data (e.g., IP addresses, timestamps, identification numbers, involved persons). Log data (e.g., log files concerning logins or data retrieval or access times).</li>
                    <li><span className="bold">Data subjects:</span> Users (e.g., website visitors, users of online services).</li>
                    <li><span className="bold">Purposes of processing:</span> Provision of our online offering and user-friendliness; Information technology infrastructure (operation and provision of information systems and technical devices (computers, servers, etc.)). Security measures.</li>
                    <li><span className="bold">Retention and deletion:</span> Deletion in accordance with the information in the section "General Information on Data Storage and Deletion".</li>
                    <li><span className="bold">Legal bases:</span> Legitimate interests (Art. 6(1)(f) GDPR).</li>
                    </ul>
                    <p><span className="bold">Further information on processing operations, procedures, and services:</span></p>
                    <ul>
                    <li>
                        <span className="bold">Collection of access data and log files: </span>
                        Access to our online offering is logged in the form of so-called "server log files." Server log files may include the address and name of the retrieved web pages and files, date and time of retrieval, data volumes transferred, notification of successful retrieval, browser type and version, the user's operating system, referrer URL (the previously visited page), and usually IP addresses and the requesting provider. Server log files can be used for security purposes, e.g., to prevent server overload (especially in the case of abusive attacks, so-called DDoS attacks), and to ensure server utilization and stability;
                        <span><span className="bold">Legal bases:</span> Legitimate interests (Art. 6(1)(f) GDPR).</span>
                        <span className="bold">Deletion of data:</span> Log file information is stored for a maximum of 30 days and then deleted or anonymized. Data whose further retention is required for evidentiary purposes is exempt from deletion until the respective incident has been finally clarified.
                    </li>
                    <li>
                        <span className="bold">Hetzner: </span>
                        Services in the field of providing information technology infrastructure and related services (e.g., storage space and/or computing capacities);
                        <span className="bold">Service provider:</span> Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Germany;
                        <span><span className="bold">Legal bases:</span> Legitimate interests (Art. 6(1)(f) GDPR);</span>
                        <span className="bold">Website:</span> <a className="bold link" href="https://www.hetzner.com" target="_blank">https:<wbr></wbr>//www.hetzner.com</a>;
                        <span className="bold">Privacy policy:</span> <a className="bold link" href="https://www.hetzner.com/de/rechtliches/datenschutz" target="_blank">https:<wbr></wbr>//www.hetzner.com/<wbr></wbr>de/<wbr></wbr>rechtliches/<wbr></wbr>datenschutz</a>.
                        <span className="bold">Data processing agreement:</span> <a className="bold link" href="https://docs.hetzner.com/de/general/general-terms-and-conditions/data-privacy-faq/" target="_blank">https:<wbr></wbr>//docs.hetzner.com/<wbr></wbr>de/<wbr></wbr>general/<wbr></wbr>general-terms-and-conditions/<wbr></wbr>data-privacy-faq/<wbr></wbr></a>.
                    </li>
                    </ul>
                </div>
            
                <div className="main-section">
                    <h3 className="main-section-title">Plugins and Embedded Functions and Content</h3>
                    <p>We integrate functional and content elements into our online offering that are obtained from the servers of their respective providers (hereinafter referred to as "third-party providers"). These may include, for example, graphics, videos, or city maps (hereinafter uniformly referred to as "content").</p>
                    <p>The integration always requires that the third-party providers of this content process the user's IP address, as they could not send the content to the user's browser without the IP address. The IP address is thus necessary for the display of this content or functions. We strive to use only content whose respective providers use the IP address solely for delivering the content. Third-party providers may also use so-called pixel tags (invisible graphics, also known as "web beacons") for statistical or marketing purposes. The "pixel tags" can be used to evaluate information such as visitor traffic on the pages of this website. The pseudonymous information may also be stored in cookies on the user's device and may contain, among other things, technical information about the browser and operating system, referring websites, visit time, and other details about the use of our online offering, and may also be linked to such information from other sources.</p>
                    <p><span className="bold">Notes on legal bases:</span> If we ask users for their consent to use third-party providers, the legal basis for processing data is consent. Otherwise, user data is processed based on our legitimate interests (i.e., interest in efficient, economical, and user-friendly services). In this context, we would also like to refer you to the information on the use of cookies in this privacy policy.</p>
                    <ul>
                    <li><span>Types of data processed:</span> Usage data (e.g., page views and dwell time, click paths, usage intensity and frequency, device types and operating systems used, interactions with content and functions). Meta, communication, and procedural data (e.g., IP addresses, timestamps, identification numbers, involved persons).</li>
                    <li><span>Data subjects:</span> Users (e.g., website visitors, users of online services).</li>
                    <li><span>Purposes of processing:</span> Provision of our online offering and user-friendliness.</li>
                    <li><span>Retention and deletion:</span> Deletion in accordance with the information in the section "General Information on Data Storage and Deletion". Storage of cookies for up to 2 years (unless otherwise specified, cookies and similar storage methods may be stored on users' devices for a period of two years).</li>
                    <li><span>Legal bases:</span> Consent (Art. 6(1)(a) GDPR). Legitimate interests (Art. 6(1)(f) GDPR).</li>
                    </ul>
                    <p><span className="bold">Further information on processing operations, procedures, and services:</span></p>
                        <span className="bold">Google Fonts (obtained from the Google server): </span>
                        Obtaining fonts (and symbols) for the purpose of technically secure, maintenance-free, and efficient use of fonts and symbols with regard to timeliness and loading times, their uniform presentation, and consideration of possible licensing restrictions. The provider of the fonts is informed of the user's IP address so that the fonts can be provided in the user's browser. In addition, technical data (language settings, screen resolution, operating system, hardware used) are transmitted, which are necessary for providing the fonts depending on the devices used and the technical environment. This data may be processed on a server of the font provider in the USA - When visiting our online offering, users' browsers send their browser HTTP requests to the Google Fonts Web API (i.e., a software interface for retrieving the fonts). The Google Fonts Web API provides users with the Cascading Style Sheets (CSS) from Google Fonts and then the fonts specified in the CSS. These HTTP requests include (1) the IP address used by the respective user to access the internet, (2) the requested URL on the Google server, and (3) the HTTP headers, including the user agent describing the browser and operating system versions of the website visitors, as well as the referral URL (i.e., the webpage where the Google font is to be displayed). IP addresses are neither logged nor stored on Google servers, and they are not analyzed. The Google Fonts Web API logs details of the HTTP requests (requested URL, user agent, and referral URL). Access to this data is restricted and strictly controlled. The requested URL identifies the font families for which the user wants to load fonts. This data is logged so that Google can determine how often a particular font family is requested. With the Google Fonts Web API, the user agent must adapt the font generated for the respective browser type. The user agent is primarily logged for debugging purposes and used to generate aggregated usage statistics to measure the popularity of font families. These aggregated usage statistics are published on the "Analytics" page of Google Fonts. Finally, the referral URL is logged so that the data can be used for production maintenance and an aggregated report on top integrations based on the number of font requests can be generated. According to its own statements, Google does not use any of the information collected by Google Fonts to create profiles of end users or to serve targeted advertisements;
                        <span>Service provider:</span> Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland;
                        <span>Legal bases:</span> Legitimate interests (Art. 6(1)(f) GDPR);
                        <span>Website:</span> <a className="bold link" href="https://fonts.google.com/" target="_blank">https:<wbr></wbr>//fonts.google.com/<wbr></wbr></a>;
                        <span>Privacy policy:</span> <a className="bold link" href="https://policies.google.com/privacy" target="_blank">https:<wbr></wbr>//policies.google.com/<wbr></wbr>privacy</a>;
                        <span>Basis for third-country transfers:</span> Data Privacy Framework (DPF).
                        <span>Further information:</span> <a className="bold link" href="https://developers.google.com/fonts/faq/privacy?hl=de" target="_blank">https:<wbr></wbr>//developers.google.com/<wbr></wbr>fonts/<wbr></wbr>faq/<wbr></wbr>privacy?hl=de</a>.
                </div>
            
                <div className="main-section">
                    <h3 className="main-section-title">Changes and Updates</h3>
                    <p>We ask you to regularly inform yourself about the content of our privacy policy. We will adjust the privacy policy as soon as changes in the data processing we carry out make this necessary. We will inform you as soon as the changes require your participation (e.g., consent) or other individual notification.</p>
                    <p>If we provide addresses and contact information of companies and organizations in this privacy policy, please note that the addresses may change over time and ask you to verify the information before contacting them.</p>
                    <p className="seal">
                    <a className="bold link" href="https://datenschutz-generator.de/" title="Legal text by Dr. Schwenke - click for more information." target="_blank" rel="noopener noreferrer nofollow">Created with the free Datenschutz-Generator.de by Dr. Thomas Schwenke </a>
                    <i className="bi bi-arrow-up-right-square-fill"></i>
                    </p>
                </div>
            </>
        )
    }

    changeTitle(pageContent.pageTitle);

    return (
        <div id='page'>
            <PageHeader pageTitle={pageContent.pageTitle} />
            {pageContent.privacyPolicyText}
        </div>
    );
}

export default Privacy;