import './Timeline.css';
import { useState } from 'react';

function Timeline() {
    const timelineItemsDe = [
        {
            id: 4,
            date: "2025 -",
            name: "Ausbildung zum Fachinformatiker für Anwendungsentwicklung bei der Fricke Gruppe",
            desc: "Im August beginne ich meine Berufsausbildung zum Fachinformatiker für Anwendungsentwicklung bei der Fricke Gruppe in Hamburg.",
            type: "Anwendungsentwicklung"
        },
        {
            id: 3,
            date: "Aktuell",
            name: "Gymnasiale Oberstufe",
            desc: "Aktuell besuche ich die 12. Klasse eines hamburger Gymnasiums und werde diesen Sommer mit dem Abitur meine Schulbildung abschließen.",
            type: "Schulbildung"
        }
    ]
    const timelineItems = navigator.language === "de-DE" ? timelineItemsDe : timelineItemsDe;

    return (
        <div className='main-section'>
            <div id='timeline'>
                {timelineItems.map(item => (
                    <div key={item.id} className='timeline-item'>
                        <div className='timeline-item-header'><a className='timeline-item-date'>{item.date}</a><a className='timeline-item-type'>{item.type}</a></div>
                        <h3 className='timeline-item-name'>{item.name}</h3>
                        
                        <div className='timeline-item-desc-wrapper'><p className='timeline-item-desc'>{item.desc}</p></div>
                        <div className='timeline-expand'><i className="bi bi-chevron-down"></i></div>
                    </div>
                ))}
            </div>
        </div>
        
    );
}

//

export default Timeline;