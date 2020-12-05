import React from 'react';
import html5 from '../images/html5.svg';
import nodejs from '../images/nodejs.svg';
import server from '../images/server.svg';
import javascript from '../images/javascript.svg';
import react from '../images/react.svg';
import redux from '../images/redux.svg';

function Skill() {
	return (
		<div id="technical" className="skill-wrapper row" >
			<div className="skill-col1 xl-col-3 lg-col-3 md-col-2 sm-col-12 col-12">
				<p className="tech-flex">Thehnical skills</p>
			</div>
			<div className="skill-col2 xl-col-9 lg-col-9 md-col-10 sm-col-6 col-6">
				<div className="skill-img1 row">
					<div className="img-wrapper xl-col-4 lg-col-4 md-col-4 sm-col-6 col-6">
						<img src={redux} alt="redux icon" />
					</div>
					<div className="xl-col-4 lg-col-4 md-col-4 sm-col-6 col-6">
						<img src={javascript} alt="javascript icon" />
					</div>
					<div className="mong-icon xl-col-4 lg-col-4 md-col-4 sm-col-6 col-6">
						<img src={server} alt="mongo icon" />
						<p>MongoDB</p>
					</div>
				</div>
				<div className="skill-img2 row">
					<div className="xl-col-4 lg-col-4 md-col-4 sm-col-12 col-12">
						<img src={html5} alt="html5 icon" />
					</div>
					<div className="xl-col-4 lg-col-4 md-col-4 sm-col-12 col-12">
						<img src={nodejs} alt="nodejs icon" />
					</div>
					<div className="xl-col-4 lg-col-4 md-col-4 sm-col-12 col-12">
						<img src={react} alt="react icon" />
					</div>
				</div>
				
			</div>
		</div>
	);
}

export default Skill;
