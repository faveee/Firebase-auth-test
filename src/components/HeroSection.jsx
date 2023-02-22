import React from 'react'
import "./herosection.css"
import hero from "../assests/hero.png";
import automotive1 from "../assests/Automotive1.png";
import automotive2 from "../assests/Automotive2.png";
import automotive3 from "../assests/Automotive3.png";
import automotive4 from "../assests/Automotive4.png";
import automotive5 from "../assests/Automotive5.png";
import automotive6 from "../assests/Automotive6.png";

export default function heroSection() {
  return (
    <div>
      <div>
        <div>
        <img src={hero} alt="hero" className="herocontainer"/>
        </div>
        <section>
            <h1 className="jobListing">Job Categories</h1>
        </section>
        <div className="subsection">
        <div className="automotiveContainer">
                <img src={automotive1} alt="automotive" />
                <p>Automotive Service</p>
                </div>
                <div className="automotiveContainer">
                <img src={automotive2} alt="automotive" />
               <p>Electrician Service</p>
                </div>
                <div className="automotiveContainer">
                <img src={automotive3} alt="automotive" />
                <p>Building Service</p>
                </div>
                <div className="automotiveContainer">
            <img src={automotive4} alt="automotive" />
            <p>Computer/IT Service</p>
                </div>
                <div className="automotiveContainer">
                <img src={automotive5} alt="automotive" />
                <p>Cleaning Service</p>
                </div>
                <div className="automotiveContainer">
                <img src={automotive6} alt="automotive" />
                <p>Generator Repair</p>
                </div>
                </div>
</div>
    </div>
  )
}
