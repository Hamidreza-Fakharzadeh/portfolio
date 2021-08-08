import React from 'react';
// import html5 from '../images/html5.svg';
// import nodejs from '../images/nodejs.svg';
// import server from '../images/server.svg';
// import javascript from '../images/javascript.svg';
// import react from '../images/react.svg';
// import redux from '../images/redux.svg';

function Skill() {
	return (
		<div className="container tec-cont">
			<div id="technical" className="skill-wrapper row">
				<div className="skill-col1 xl-col-3 lg-col-3 md-col-2 sm-col-12 col-12">
					<p className="tech-flex">TECH SKILLS</p>
				</div>
				<div className="skill-col2 xl-col-9 lg-col-9 md-col-10 sm-col-6 col-6">
					<div className="skill-img1 row">
						<div className="img-wrapper xl-col-4 lg-col-4 md-col-4 sm-col-12 col-12">
							<div className="img-redux"></div>
						</div>
						<div className=" img-wrapper xl-col-4 lg-col-4 md-col-4 sm-col-12 col-12">
							<div className="img-jscript"></div>
						</div>
						<div className="mong-icon img-wrapper xl-col-4 lg-col-4 md-col-4 sm-col-12 col-12">
							
							<div className="img-react"></div>
						</div>
					</div>
					<div className="skill-img2 row">
						<div className="xl-col-4 lg-col-4 md-col-4 sm-col-12 col-12">
							<div className="img-html"></div>
						</div>
						<div className="xl-col-4 lg-col-4 md-col-4 sm-col-12 col-12">
							<div className="img-nodejs"></div>
						</div>
						<div className="xl-col-4 lg-col-4 md-col-4 sm-col-12 col-12">
						<div className="img-mongo"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skill;
