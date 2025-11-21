import React, { useState } from "react";

import Plant1 from "../../assets/images/Plant1.jpg";
import Plant2 from "../../assets/images/Plant2.jpg";
import Plant3 from "../../assets/images/Plant3.jpg";
import Plant4 from "../../assets/images/Plant4.jpg";
import Plant5 from "../../assets/images/Plant5.png";
import Plant6 from "../../assets/images/Plant6.jpg";
import Plant7 from "../../assets/images/Plant7.jpg";
import Plant8 from "../../assets/images/Plant8.webp";
import Plant9 from "../../assets/images/Plant9.webp";
import Plant10 from "../../assets/images/Plant10.jpg";
import Plant11 from "../../assets/images/Plant11.jpg";
import Plant12 from "../../assets/images/Plant12.jpg";
import Plant13 from "../../assets/images/Plant13.jpg";



const Gallery = () => {
const [activeTab, setActiveTab] = useState("plantation");


const tabs = [
{ id: "plantation", label: "Plantation" },
{ id: "agriculture", label: "Agriculture" },
{ id: "events", label: "Events" }
];


const images = {plantation: [Plant1, Plant2,Plant3,Plant4,Plant5,Plant6,Plant7],
agriculture: [Plant8,Plant9,Plant10,Plant11,Plant12,Plant13],
events: [
"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e", // people event gathering
"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", // outdoor community event
"https://images.unsplash.com/photo-1508672019048-805c876b67e2" // nature event program
]
};


return (
<div className="gallery-container pt-gallery">
<h2 className="gallery-title">Plantation & Agricultural Gallery</h2>


<div className="tabs-container">
{tabs.map((tab) => (
<button
key={tab.id}
className={`tab-button ${activeTab === tab.id ? "active-tab" : ""}`}
onClick={() => setActiveTab(tab.id)}
>
{tab.label}
</button>
))}
</div>


<div className="gallery-grid">
{images[activeTab].map((src, index) => (
<div key={index} className="gallery-card">
<img src={src} alt={`${activeTab} ${index + 1}`} className="gallery-image" />
</div>
))}
</div>
</div>
);
};


export default Gallery;