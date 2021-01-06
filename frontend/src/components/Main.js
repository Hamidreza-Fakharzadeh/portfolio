import React from 'react';
import pic from '../images/pic.png';

function Main() {
	return (
		<div className="container intro-cont">
			<div className="main-wrapper row" id="content-id">
			<div className="xl-col-6 lg-col-6 md-col-6 sm-col-12 col-12">
				<img className="img-1" src={pic} alt="pic" />
			</div>
			<div className="xl-col-6 lg-col-6 md-col-6 sm-col-12 col-12">
				<p className="intro-p">Hi,</p>
				<p className="intro-p">I am Hamidreza</p>
				<p className="intro-stack">Junior Full Stack</p>
				<p className="intro-stack">Web Developer</p>
			</div>
			
		</div>
		</div>
		
	);
}

export default Main;
