import React, { useState } from 'react'
import { Navbar } from '../Navbar/Navbar';
import dataJSON from '../../starter-code/data.json'
import './Technology.css'

export const Technology = () => {
    const projectsData = dataJSON.technology;

    const [active, setActive] = useState(0)
    const [data, setData] = useState(projectsData[0])
  
    const handleTechnology = (e) => {
      
      const id = parseInt(e.target.id)
      const technologyData = projectsData[e.target.id]
  
      setActive(id)
      setData(technologyData)
    }
  
    return (
      <div className='technologyLanding'>
        <div className="technologyBackground"></div>
          <Navbar/>
           <div className="technologyGlobalContainer">
  
              <div className="titleContainer">
                <p className='number'>03</p>
                <h1 className='title'>SPACE LAUNCH 101</h1>
              </div>
              <div className="technologyWrapper">
  
                <div className="technologyContainer">
                  <div className="technologyButtonContainer">
                    {projectsData.map((technology,index) => (
                      <div className={active === index ? 'technologyRadioButtonActive' : 'technologyRadioButton'} id={index} onClick={handleTechnology}>{index + 1}</div>
                      ))}
                  </div>
                  <div className="technologyInformationContainer">
                    <p className='technologyInformationSubtitle'>THE TERMINOLOGY...</p>
                    <h2 className='technologyInformationTitle'>{data.name}</h2>
                    <h3 className='technologyInformationDescription'>{data.description}</h3>
                  </div>
                </div>
                <div className="technologyPicture">
                  <img src={data.images.portrait} alt={data.name} />
                </div>
              </div>
  
          </div>
  
      </div>
    )
}
