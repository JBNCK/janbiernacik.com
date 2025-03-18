import './Timeline.css';
import { useState } from 'react';

function Timeline() {
    const timelineItemsDe = [
        {
            id: 4,
            date: "2025 -",
            name: "Ausbildung zum Fachinformatiker für Anwendungsentwicklung bei der Fricke Gruppe",
            desc: "Im August beginne ich meine Berufsausbildung zum Fachinformatiker für Anwendungsentwicklung bei der Fricke Gruppe in Hamburg.",
            type: "Anwendungsentwicklung",
            loc: "Hamburg, Deutschland"
        },
        {
            id: 3,
            date: "2017 - 2025",
            name: "Gymnasiale Oberstufe und Abitur",
            desc: "Aktuell besuche ich die 12. Klasse eines hamburger Gymnasiums und werde diesen Sommer mit dem Abitur meine Schulbildung abschließen.",
            type: "Schulbildung",
            loc: "Hamburg, Deutschland"
        },
        {
            id: 2,
            date: "2023",
            name: "IT-Schülerpraktikum bei Fielmann",
            desc: "Zu beginn der 11. Klasse absolvierte ich ein zweiwöchiges Schülerpraktikum bei Fielmann mit Schwerpunkt auf Softwareentwicklung.",
            type: "Anwendungsentwicklung",
            loc: "Hamburg, Deutschland"
        }
    ]

    const timelineItemsEn = [
        {
            id: 4,
            date: "2025 -",
            name: "Apprenticeship as IT Specialist for Application Development at the Fricke Group",
            desc: "In August I will begin my apprenticeship as an IT specialist for application development at the Fricke Group in Hamburg.",
            type: "Software Development",
            loc: "Hamburg, Germany"
        },
        {
            id: 3,
            date: "2017 - 2025",
            name: "High School and Abitur",
            desc: "I am currently in the 12th grade at a high school in Hamburg and will graduate with my Abitur this summer.",
            type: "School",
            loc: "Hamburg, Germany"
        },
        {
            id: 2,
            date: "2023",
            name: "IT Internship/Work Experience at Fielmann",
            desc: "At the beginning of 11th grade, I completed a two-week IT internship at Fielmann with a focus on software development.",
            type: "Software Development",
            loc: "Hamburg, Germany"
        }
    ]

    const timelineItems = navigator.language === "de-DE" ? timelineItemsDe : timelineItemsEn;
    const timelineTitle = navigator.language === "de-DE" ? "Lebenslauf" : "Resume";

    return (
        <div className='main-section'>
            <div id='timeline'>
                {timelineItems.map(item => (
                    <div key={item.id} className='timeline-item'>
                        <div className='timeline-dot'></div>
                        <div className='timeline-item-header'><a className='timeline-item-date'>{item.date}</a><a className='timeline-item-type'>{item.type}</a></div>
                        <h3 className='timeline-item-name'>{item.name}</h3>
                        <p className='timeline-item-loc'>{item.loc}</p>
                        <div className='timeline-item-desc-wrapper'><p className='timeline-item-desc'>{item.desc}</p></div>
                    </div>
                ))}
            </div>
        </div>
        
    );
}

//<h3 className='main-section-title'>{timelineTitle}</h3>

export default Timeline;