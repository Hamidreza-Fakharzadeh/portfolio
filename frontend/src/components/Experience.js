import React from 'react';
import briefcase from '../images/briefcase.svg';

function Experience() {
	return (
		<div className="container exper-cont">
			<div id="exper-id">
				<p className="exper-para">EXPERIENCE</p>

				<div className="row">
					<div className="xl-col-1 lg-col-1 md-col-12 sm-col-12 col-12">
						<div className="exper1-date">2011</div>
						<div className="exper1-shape" />
					</div>
					<div className="exper2-col xl-col-2 lg-col-2 md-col-12 sm-col-12 col-12">
						<div className="exper2-icon">
							<img src={briefcase} alt="briefcase" className="img-edu1" />
							<p>DEVELOPMENT </p>
							<p>ADMINISTORATOR</p>
							<p>Rahnavardniro Co</p>
							<p>IRAN - TEHRAN</p>
						</div>
					</div>
					<div className="exper3-col xl-col-1 lg-col-1 md-col-12 sm-col-12 col-12">
						<div className="exper1-date">2016</div>
						<div className="exper1-shape" />
					</div>
					<div className="exper2-col xl-col-4 lg-col-4 md-col-12 sm-col-12 col-12">
						<div className="exper2-icon">
							<img src={briefcase} alt="briefcase" className="img-exper4" />
							<p>SMART HOME</p>
							<p>CONSULTANT</p>
							<p>F and M RENOVATION CO</p>
							<p>UK - LONDON</p>
						</div>
					</div>

					<div className="exper3-col xl-col-1 lg-col-1 md-col-12 sm-col-12 col-12">
						<div className="exper1-date">2019</div>
						<div className="exper1-shape" />
					</div>
					<div className="exper2-col xl-col-2 lg-col-2 md-col-12 sm-col-12 col-12">
						<div className="exper2-icon">
							<img src={briefcase} alt="briefcase" className="img-edu1" />
							<p>TRAINEE WEB</p>
							<p>DEVELOPER</p>
							<p>CODEYOURFUTURE Co</p>
							<p>UK - LONDON</p>
						</div>
					</div>

					<div className="exper3-col xl-col-1 lg-col-1 md-col-12 sm-col-12 col-12">
						<div className="exper1-date">2020</div>
						<div className="exper1-shape" />
					</div>
				</div>
			</div>
		</div>
	);
}
export default Experience;
