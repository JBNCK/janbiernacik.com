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
                    <h3 className="main-section-title">1. Datenschutz auf einen Blick</h3>
                    <h3 className="main-section-subtitle">Allgemeine Hinweise</h3>
                    <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
                    <h3 className="main-section-subtitle">Datenerfassung auf dieser Website</h3>
                    <p>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
                    <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.</p>
                    <p>Wie erfassen wir Ihre Daten?</p>
                    <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
                    <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
                    <p>Wofür nutzen wir Ihre Daten?</p>
                    <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.</p>
                    <p>Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
                    <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
                    <p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>
                </div>
        
                <div className="main-section">
                    <h3 className="main-section-title">2. Hosting</h3>
                    <h3 className="main-section-subtitle">Externes Hosting</h3>
                    <p>Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.</p>
                    <p>Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.</p>
                    <p>Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.</p>
                    <p>Wir setzen folgende(n) Hoster ein:</p>
                    <p>GitHub, Inc.<br></br>88 Colin P Kelly Jr St<br></br>San Francisco<br></br>CA 94107<br></br>United States of America</p>
                </div>
        
                <div className="main-section">
                    <h3 className="main-section-title">3. Allgemeine Hinweise und Pflicht<wbr></wbr>informationen</h3>
                    <h3 className="main-section-subtitle">Datenschutz</h3>
                    <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
                    <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p>
                    <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
                    <h3 className="main-section-subtitle">Hinweis zur verantwortlichen Stelle</h3>
                    <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                    <p>Jan Biernacik<br></br>E-Mail: <a className='link bold' href='mailto:jan@biernacik.dev'>jan@biernacik.dev</a></p>
                    <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>
                    <h3 className="main-section-subtitle">Speicherdauer</h3>
                    <p>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.</p>
                    <h3 className="main-section-subtitle">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
                    <p>Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.</p>
                    <h3 className="main-section-subtitle">Empfänger von personenbezogenen Daten</h3>
                    <p>Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.</p>
                    <h3 className="main-section-subtitle">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                    <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>
                    <h3 className="main-section-subtitle">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
                    <p>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRUCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p>
                    <p>WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</p>
                    <h3 className="main-section-subtitle">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                    <p>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>
                    <h3 className="main-section-subtitle">Recht auf Datenübertragbarkeit</h3>
                    <p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>
                    <h3 className="main-section-subtitle">Auskunft, Berichtigung und Löschung</h3>
                    <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.</p>
                    <h3 className="main-section-subtitle">Recht auf Einschränkung der Verarbeitung</h3>
                    <p>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</p>
                    <ul>
                        <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                        <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                        <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                        <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                    </ul>
                    <p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</p>
                    <h3 className="main-section-subtitle">SSL- bzw. TLS-Verschlüsselung</h3>
                    <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
                    <p>Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</p>
                </div>
        
                <div className="main-section">
                    <h3 className="main-section-title">4. Datenerfassung auf dieser Website</h3>
                    <h3 className="main-section-subtitle">Server-Log-Dateien</h3>
                    <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
                    <ul>
                        <li>Browsertyp und Browserversion</li>
                        <li>verwendetes Betriebssystem</li>
                        <li>Referrer URL</li>
                        <li>Hostname des zugreifenden Rechners</li>
                        <li>Uhrzeit der Serveranfrage</li>
                        <li>IP-Adresse</li>
                    </ul>
                    <p>Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
                    <p>Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.</p>
                </div>
        
                <div className="main-section">
                    <h3 className="main-section-title">5. Plugins und Tools</h3>
                    <h3 className="main-section-subtitle">Google Fonts</h3>
                    <p>Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.</p>
                    <p>Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Google Fonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der einheitlichen Darstellung des Schriftbildes auf seiner Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.</p>
                    <p>Wenn Ihr Browser Google Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt.</p>
                    <p>Weitere Informationen zu Google Fonts finden Sie unter <a className='bold link' href="https://developers.google.com/fonts/faq">https://<wbr></wbr>developers.<wbr></wbr>google.<wbr></wbr>com/<wbr></wbr>fonts/<wbr></wbr>faq</a> und in der Datenschutzerklärung von Google: <a className='bold link' href="https://policies.google.com/privacy?hl=de">https://<wbr></wbr>policies.<wbr></wbr>google.<wbr></wbr>com/<wbr></wbr>privacy?<wbr></wbr>hl=de</a>.</p>
                    <p>Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: <a className='bold link' href="https://www.dataprivacyframework.gov/participant/5780">https://<wbr></wbr>www.<wbr></wbr>dataprivacyframework.<wbr></wbr>gov/<wbr></wbr>participant/<wbr></wbr>5780</a>.</p>
                    <p>Quelle: <a className='bold link' href="https://www.e-recht24.de">https://<wbr></wbr>www.<wbr></wbr>e-recht24.<wbr></wbr>de</a></p>
                </div>
            </>
        )
    } : {
        pageTitle: "Privacy",
        privacyPolicyText: (
            <>
                <div className="main-section">
                    <h3 className="main-section-title">1. Privacy at a Glance</h3>
                    <h3 className="main-section-subtitle">General Information</h3>
                    <p>The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to identify you personally. For detailed information on data protection, please refer to our privacy policy listed below this text.</p>
                    <h3 className="main-section-subtitle">Data Collection on This Website</h3>
                    <p>Who is responsible for data collection on this website?</p>
                    <p>The data processing on this website is carried out by the website operator. You can find their contact details in the section “Information on the Responsible Entity” in this privacy policy.</p>
                    <p>How do we collect your data?</p>
                    <p>Your data is collected, on the one hand, by you providing it to us. This may include, for example, data you enter into a contact form.</p>
                    <p>Other data is collected automatically or with your consent by our IT systems when you visit the website. This primarily includes technical data (e.g., internet browser, operating system, or time of page access). This data is collected automatically as soon as you enter this website.</p>
                    <p>What do we use your data for?</p>
                    <p>Some of the data is collected to ensure the error-free provision of the website. Other data may be used to analyze your user behavior. If contracts can be concluded or initiated via the website, the transmitted data will also be processed for contract offers, orders, or other service requests.</p>
                    <p>What rights do you have regarding your data?</p>
                    <p>You have the right at any time to receive information free of charge about the origin, recipients, and purpose of your stored personal data. You also have the right to request the correction or deletion of this data. If you have given consent to data processing, you can revoke this consent at any time for the future. Additionally, you have the right, under certain circumstances, to request the restriction of the processing of your personal data. Furthermore, you have the right to lodge a complaint with the competent supervisory authority.</p>
                    <p>You can contact us at any time regarding this or any further questions about data protection.</p>
                </div>
        
                <div className="main-section">
                    <h3 className="main-section-title">2. Hosting</h3>
                    <h3 className="main-section-subtitle">External Hosting</h3>
                    <p>This website is hosted externally. The personal data collected on this website is stored on the servers of the host(s). This may include, in particular, IP addresses, contact requests, metadata and communication data, contract data, contact details, names, website accesses, and other data generated via a website.</p>
                    <p>External hosting is carried out for the purpose of fulfilling contracts with our potential and existing customers (Art. 6(1)(b) GDPR) and in the interest of a secure, fast, and efficient provision of our online offer by a professional provider (Art. 6(1)(f) GDPR). If corresponding consent has been obtained, processing is carried out exclusively on the basis of Art. 6(1)(a) GDPR and § 25(1) TDDDG, insofar as the consent includes the storage of cookies or access to information on the user’s device (e.g., device fingerprinting) within the meaning of the TDDDG. Consent can be revoked at any time.</p>
                    <p>Our host(s) will only process your data to the extent necessary to fulfill their performance obligations and will follow our instructions regarding this data.</p>
                    <p>We use the following host:</p>
                    <p>GitHub, Inc.<br></br>88 Colin P Kelly Jr St<br></br>San Francisco<br></br>CA 94107<br></br>United States of America</p>
                </div>
        
                <div className="main-section">
                    <h3 className="main-section-title">3. General Information and Mandatory Information</h3>
                    <h3 className="main-section-subtitle">Data Protection</h3>
                    <p>The operators of this website take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations and this privacy policy.</p>
                    <p>When you use this website, various personal data is collected. Personal data is data with which you can be personally identified. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this happens.</p>
                    <p>We point out that data transmission over the internet (e.g., communication via email) may have security vulnerabilities. Complete protection of data against access by third parties is not possible.</p>
                    <h3 className="main-section-subtitle">Information on the Responsible Entity</h3>
                    <p>The entity responsible for data processing on this website is:</p>
                    <p>Jan Biernacik<br></br>Email: <a className='link bold' href='mailto:jan@biernacik.dev'>jan@biernacik.dev</a></p>
                    <p>The responsible entity is the natural or legal person who, alone or jointly with others, decides on the purposes and means of processing personal data (e.g., names, email addresses, etc.).</p>
                    <h3 className="main-section-subtitle">Storage Duration</h3>
                    <p>Unless a more specific storage period is stated within this privacy policy, your personal data will remain with us until the purpose for the data processing no longer applies. If you assert a legitimate request for deletion or revoke your consent to data processing, your data will be deleted unless we have other legally permissible reasons for storing your personal data (e.g., tax or commercial retention periods); in the latter case, deletion will occur after these reasons cease to apply.</p>
                    <h3 className="main-section-subtitle">General Information on the Legal Basis for Data Processing on This Website</h3>
                    <p>If you have consented to data processing, we process your personal data based on Art. 6(1)(a) GDPR or Art. 9(2)(a) GDPR if special categories of data under Art. 9(1) GDPR are processed. In the case of explicit consent to the transfer of personal data to third countries, data processing is also based on Art. 49(1)(a) GDPR. If you have consented to the storage of cookies or access to information on your device (e.g., via device fingerprinting), data processing is additionally based on § 25(1) TDDDG. Consent can be revoked at any time. If your data is required for contract fulfillment or to carry out pre-contractual measures, we process your data based on Art. 6(1)(b) GDPR. Furthermore, we process your data if it is necessary to fulfill a legal obligation based on Art. 6(1)(c) GDPR. Data processing may also be carried out based on our legitimate interest under Art. 6(1)(f) GDPR. The relevant legal bases in each individual case are explained in the following sections of this privacy policy.</p>
                    <h3 className="main-section-subtitle">Recipients of Personal Data</h3>
                    <p>In the course of our business activities, we work with various external entities. This sometimes requires the transfer of personal data to these external entities. We only pass on personal data to external entities if this is necessary for contract fulfillment, if we are legally obliged to do so (e.g., transferring data to tax authorities), if we have a legitimate interest under Art. 6(1)(f) GDPR in the transfer, or if another legal basis permits the data transfer. When using data processors, we only transfer personal data of our customers based on a valid data processing agreement. In the case of joint processing, a joint processing agreement is concluded.</p>
                    <h3 className="main-section-subtitle">Revocation of Your Consent to Data Processing</h3>
                    <p>Many data processing operations are only possible with your explicit consent. You can revoke consent you have already given at any time. The legality of the data processing carried out until the revocation remains unaffected by the revocation.</p>
                    <h3 className="main-section-subtitle">Right to Object to Data Collection in Special Cases and to Direct Marketing (Art. 21 GDPR)</h3>
                    <p>IF DATA PROCESSING IS BASED ON ART. 6(1)(E) OR (F) GDPR, YOU HAVE THE RIGHT TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA AT ANY TIME FOR REASONS ARISING FROM YOUR PARTICULAR SITUATION; THIS ALSO APPLIES TO PROFILING BASED ON THESE PROVISIONS. THE RESPECTIVE LEGAL BASIS ON WHICH PROCESSING IS BASED CAN BE FOUND IN THIS PRIVACY POLICY. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING THAT OVERRIDE YOUR INTERESTS, RIGHTS, AND FREEDOMS, OR THE PROCESSING SERVES THE ASSERTION, EXERCISE, OR DEFENSE OF LEGAL CLAIMS (OBJECTION UNDER ART. 21(1) GDPR).</p>
                    <p>IF YOUR PERSONAL DATA IS PROCESSED FOR DIRECT MARKETING PURPOSES, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF PERSONAL DATA CONCERNING YOU FOR SUCH MARKETING; THIS ALSO APPLIES TO PROFILING TO THE EXTENT THAT IT IS RELATED TO SUCH DIRECT MARKETING. IF YOU OBJECT, YOUR PERSONAL DATA WILL SUBSEQUENTLY NO LONGER BE USED FOR DIRECT MARKETING PURPOSES (OBJECTION UNDER ART. 21(2) GDPR).</p>
                    <h3 className="main-section-subtitle">Right to Lodge a Complaint with the Competent Supervisory Authority</h3>
                    <p>In the event of violations of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority, in particular in the Member State of their habitual residence, place of work, or the place of the alleged violation. The right to lodge a complaint exists without prejudice to other administrative or judicial remedies.</p>
                    <h3 className="main-section-subtitle">Right to Data Portability</h3>
                    <p>You have the right to have data that we process automatically based on your consent or in fulfillment of a contract handed over to you or a third party in a common, machine-readable format. If you request the direct transfer of the data to another controller, this will only be done if it is technically feasible.</p>
                    <h3 className="main-section-subtitle">Information, Correction, and Deletion</h3>
                    <p>Within the framework of applicable legal provisions, you have the right at any time to free information about your stored personal data, its origin, and recipients, and the purpose of the data processing, and, if applicable, a right to correction or deletion of this data. You can contact us at any time regarding this or any further questions about personal data.</p>
                    <h3 className="main-section-subtitle">Right to Restriction of Processing</h3>
                    <p>You have the right to request the restriction of the processing of your personal data. You can contact us at any time regarding this. The right to restriction of processing exists in the following cases:</p>
                    <ul>
                        <li>If you dispute the accuracy of your personal data stored by us, we usually need time to verify this. During the verification period, you have the right to request the restriction of the processing of your personal data.</li>
                        <li>If the processing of your personal data was/is unlawful, you can request the restriction of data processing instead of deletion.</li>
                        <li>If we no longer need your personal data, but you need it to exercise, defend, or assert legal claims, you have the right to request the restriction of the processing of your personal data instead of deletion.</li>
                        <li>If you have lodged an objection under Art. 21(1) GDPR, a balancing of your and our interests must be carried out. As long as it is not yet clear whose interests prevail, you have the right to request the restriction of the processing of your personal data.</li>
                    </ul>
                    <p>If you have restricted the processing of your personal data, this data – apart from its storage – may only be processed with your consent or for the assertion, exercise, or defense of legal claims or to protect the rights of another natural or legal person or for reasons of important public interest of the European Union or a Member State.</p>
                    <h3 className="main-section-subtitle">SSL or TLS Encryption</h3>
                    <p>For security reasons and to protect the transmission of confidential content, such as orders or inquiries that you send to us as the website operator, this site uses SSL or TLS encryption. You can recognize an encrypted connection by the fact that the address bar of the browser changes from “http://” to “https://” and by the lock symbol in your browser line.</p>
                    <p>If SSL or TLS encryption is activated, the data you transmit to us cannot be read by third parties.</p>
                </div>
        
                <div className="main-section">
                    <h3 className="main-section-title">4. Data Collection on This Website</h3>
                    <h3 className="main-section-subtitle">Server Log Files</h3>
                    <p>The provider of the pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These are:</p>
                    <ul>
                        <li>Browser type and browser version</li>
                        <li>Operating system used</li>
                        <li>Referrer URL</li>
                        <li>Hostname of the accessing computer</li>
                        <li>Time of the server request</li>
                        <li>IP address</li>
                    </ul>
                    <p>This data is not merged with other data sources.</p>
                    <p>The collection of this data is based on Art. 6(1)(f) GDPR. The website operator has a legitimate interest in the technically error-free presentation and optimization of their website – for this purpose, the server log files must be recorded.</p>
                </div>
        
                <div className="main-section">
                    <h3 className="main-section-title">5. Plugins and Tools</h3>
                    <h3 className="main-section-subtitle">Google Fonts</h3>
                    <p>This site uses so-called Google Fonts, provided by Google, for the uniform display of fonts. When you access a page, your browser loads the required fonts into its cache to display texts and fonts correctly.</p>
                    <p>For this purpose, the browser you use must connect to Google’s servers. This allows Google to gain knowledge that this website was accessed via your IP address. The use of Google Fonts is based on Art. 6(1)(f) GDPR. The website operator has a legitimate interest in the uniform presentation of the typeface on their website. If corresponding consent has been requested, processing is carried out exclusively on the basis of Art. 6(1)(a) GDPR and § 25(1) TDDDG, insofar as the consent includes the storage of cookies or access to information on the user’s device (e.g., device fingerprinting) within the meaning of the TDDDG. Consent can be revoked at any time.</p>
                    <p>If your browser does not support Google Fonts, a standard font from your computer will be used.</p>
                    <p>For more information about Google Fonts, see <a className='bold link' href="https://developers.google.com/fonts/faq">https://<wbr></wbr>developers.<wbr></wbr>google.<wbr></wbr>com/<wbr></wbr>fonts/<wbr></wbr>faq</a> and Google’s privacy policy: <a className='bold link' href="https://policies.google.com/privacy?hl=en">https://<wbr></wbr>policies.<wbr></wbr>google.<wbr></wbr>com/<wbr></wbr>privacy?<wbr></wbr>hl=en</a>.</p>
                    <p>The company is certified under the “EU-US Data Privacy Framework” (DPF). The DPF is an agreement between the European Union and the USA intended to ensure compliance with European data protection standards for data processing in the USA. Every company certified under the DPF commits to adhering to these data protection standards. Further information can be obtained from the provider at the following link: <a className='bold link' href="https://www.dataprivacyframework.gov/participant/5780">https://<wbr></wbr>www.<wbr></wbr>dataprivacyframework.<wbr></wbr>gov/<wbr></wbr>participant/<wbr></wbr>5780</a>.</p>
                    <p>Source: <a className='bold link' href="https://www.e-recht24.de">https://<wbr></wbr>www.<wbr></wbr>e-recht24.<wbr></wbr>de</a></p>
                </div>
            </>
        )
    }

    changeTitle(pageContent.pageTitle);

    return (
        <div className='page'>
            <PageHeader pageTitle={pageContent.pageTitle} />
            {pageContent.privacyPolicyText}
        </div>
    );
}

export default Privacy;