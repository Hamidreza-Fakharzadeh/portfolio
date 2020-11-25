import React from 'react'
import css from '../images/css.svg'
import html5 from '../images/html5.svg'
import nodejs from '../images/nodejs.svg'
import mongo from '../images/mongo.svg'
import javascript from '../images/javascript.svg'
import react from '../images/react.svg'
import redux from '../images/redux.svg'

function Skill() {
  return (
    <div className="wrapper-skill">
      <div className="tech-col">
        <p className="tech-flex">Thehnical skills</p>
      </div>

      <div className="cont-skill" id="technical">
        <div className="img1-skill">
          <div className="skill1-flex">
            <img src={redux} alt="redux icon" />
            <img src={javascript} alt="javascript icon" />
            <img src={mongo} alt="mongo icon" />
          </div>
        </div>
        <div className="img2-skill">
          <div className="skill2-flex">
            <img src={html5} alt="html5 icon" />
            <img src={nodejs} alt="nodejs icon" />
            <img src={react} alt="react icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill
