import React from 'react';
import hat from '../images/hat.svg';

function Education() {
	return (
		<div className="container">
			<p className="cir-row">EDUCATION</p>

			<div id="education-id" className="edu-cont row">
				<div className="edu-shape xl-col-1 lg-col-1 md-col-6 sm-col-12 col-12">
					<div className="cir1-date">2010</div>
					<div className="cir1-shape" />
				</div>
				<div className="xl-col-4 lg-col-4 md-col-6 sm-col-12 col-12">
					<div className="cir2-icon">
						<img src={hat} alt="hat" className="" />
						<p>AVR Microcontroller </p>
						<p>C Programing language</p>
						<p>Tehran Technical Complex Iran</p>
						<p>2013-2014</p>
					</div>
				</div>

				<div className="edu-shape2 xl-col-2 lg-col-2 md-col-6 sm-col-12 col-12">
					<div className="cir3-date">2019</div>
					<div className="cir3-shape" />
				</div>
				<div className="xl-col-4 lg-col-4 md-col-6 sm-col-12 col-12">
					<div className="cir4-icon">
						<img src={hat} alt="hat" className="img-edu4" />
						<p>FULL STACK WEB COURSE</p>
						<p>Code Your Future Company</p>
						<p>UK - London</p>
					</div>
				</div>
				<div className="xl-col-1 lg-col-1 md-col-6 sm-col-12 col-12">
					<div className="cir5-date">2020</div>
					<div className="cir5-shape" />
				</div>
			</div>
		</div>
	);
}
export default Education;
