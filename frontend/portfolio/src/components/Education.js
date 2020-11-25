import React from 'react'
import hat from '../images/hat.svg'

function Education() {
  return (
    <div className="edu-wrapper">
      <div className="edu-flex">
        <p className="cir-row">EDUCATION</p>
      </div>

      <div id="education-id" className="education">
        <div className="cir1-col">
          <div className="cir1-date">2010</div>
          <div className="cir1-shape"></div>
        </div>
        <div className="cir2-col">
          <div className="cir2-icon">
            <img src={hat} alt="hat" className="img-edu1"></img>
            <p>AVR Microcontroller </p>
            <p>C Programing language</p>
            <p>Tehran Technical Complex Iran</p>
            <p>2013-2014</p>
          </div>
        </div>
        <div className="cir3-col">
          <div className="cir3-date">2014-2019</div>
          <div className="cir3-shape"></div>
        </div>
        <div className="cir4-col">
          <div className="cir4-icon">
            <img src={hat} alt="hat" className="img-edu4"></img>
            <p>FULL STACK WEB COURSE</p>
            <p>Code Your Future Company</p>
            <p>UK - London</p>
          </div>
        </div>
        <div className="cir5-col">
        <div className="cir5-date">2020</div>
          <div className="cir5-shape"></div>
        </div>
      </div>
    </div>
  )
}
export default Education
