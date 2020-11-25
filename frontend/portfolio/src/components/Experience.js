import React from 'react'
import briefcase from '../images/briefcase.svg'

function Experience() {
  return (
    <div className="exper-wrapper">
      <div className="exper-flex">
        <p className="cir-row">EXPERIENCE</p>
      </div>

      <div id="exper-id" className="exper">
        <div className="exper1-col">
          <div className="exper1-date">2011</div>
          <div className="exper1-shape"></div>
        </div>
        <div className="exper2-col">
          <div className="exper2-icon">
            <img src={briefcase} alt="briefcase" className="img-edu1"></img>
            <p>DEVELOPMENT  </p>
            <p>ADMINISTORATOR</p>
            <p>Rahnavardniro Co</p>
            <p>IRAN - TEHRAN</p>
          </div>
        </div>
        <div className="exper3-col">
          <div className="exper3-date">2016</div>
          <div className="exper3-shape"></div>
        </div>
        <div className="exper4-col">
          <div className="exper4-icon">
            <img src={briefcase} alt="briefcase" className="img-exper4"></img>
            <p>SMART HOME</p>
            <p>CONSULTANT</p>
            <p>F&M RENOVATION CO</p>
            <p>UK - LONDON</p>
          </div>
        </div>

        <div className="exper5-col">
          <div className="exper5-date">2019</div>
          <div className="exper5-shape"></div>
        </div>
        <div className="exper6-col">
          <div className="exper6-icon">
            <img src={briefcase} alt="briefcase" className="img-edu1"></img>
            <p>TRAINEE FULL STACK</p>
            <p>WEB DEVELOPER</p>
            <p>Code Your Future Company</p>
            <p>UK - LONDON</p>

          </div>
        </div>

        <div className="exper7-col">
          <div className="exper7-date">2020</div>
          <div className="exper7-shape"></div>
        </div>
      </div>
    </div>
  )
}
export default Experience
