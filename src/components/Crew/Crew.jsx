import React, { useState } from "react";
import dataJSON from '../../starter-code/data.json'
import { Navbar } from '../Navbar/Navbar'
import './Crew.css'

export const Crew = () => {
  const projectsData = dataJSON.crew;

  const [active, setActive] = useState(0);
  const [data, setData] = useState(projectsData[0]);

  const handleRadio = (e) => {
    const id = parseInt(e.target.id);
    const crewData = projectsData[e.target.id];

    setActive(id);
    setData(crewData);
  };

  return (
    <div className="crewLanding">
      <div className="crewBackground"></div>
      <div className="crewGlobalContainer">
      <Navbar />
        <div className="titleContainer">
          <p className="number">02</p>
          <h1 className="title">MEET YOUR CREW</h1>
        </div>
        <div className="crewGlobalContent">
          <div className="crewContent">
            <div className="crewInformations">
              <h2 className="crewRole">{data.role}</h2>
              <h3 className="crewMember">{data.name}</h3>
              <p className="crewDescription">{data.bio}</p>
            </div>

            <div className="radioContainer">
              {projectsData.map((member, index) => (
                <input
                  key={index}
                  type="radio"
                  id={index}
                  onClick={handleRadio}
                  className={
                    active === index ? "radioButtonActive" : "radioButton"
                  }
                />
              ))}
            </div>
          </div>

          <div className="crewPicture">
            <img src={data.images.webp} alt={data.name} />
            <div className="pictureLine"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
