import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
	let portfolioUrl = 'https://github.com/Hamidreza-Fakharzadeh/portfolio.git';
	let portfolioWeb = "https://hamidreza-portfolio.netlify.app/"
	let queueAndAUrl = 'https://github.com/ellietms/QueueAndA.git';
	let qWeb = "https://cyf-queueanda.netlify.app/"
	let tvShowUrl = "https://hamidreza-tv-show.netlify.app/";
	let gitTvUrl = "https://github.com/Hamidreza-Fakharzadeh/tv-show-dom-project.git"
	
	return (
		<div id="pro-id" className="container pro-cont">
			<div>
				<p className="pro-header">PROJECTS</p>

				<div className="pro-wrapper row">
					<div className="xl-col-3 lg-col-3 md-col-6 sm-col-6 col-10  ">
						<div className="pro-card">
							<div className="back-img1">
								<h2>Portfolio</h2>
							</div>
							<div>
								<a href={portfolioWeb}>web-portfolio</a>
							</div>
							<div>
							<a href={portfolioUrl}>github-portfolio</a>
							</div>
							
						</div>
					</div>
					<div className="xl-col-3 lg-col-3 md-col-6 sm-col-6 col-10  ">
						<div className="pro-card">
							<div className="back-img2">
								<h2>qAndA</h2>
							</div>
							<div>
								<a href={qWeb}>web-QandA</a>
							</div>
							<a href={queueAndAUrl}>github-QandA</a>
						</div>
					</div>
					<div className="xl-col-3 lg-col-3 md-col-6 sm-col-6 col-10  ">
						<div className="pro-card">
							<div className="back-img3">
								<h2>Hackathon</h2>
							</div>
							<Link to="/certify" className="pro-title">
								prject-cerificate
							</Link>
						</div>
					</div>
					<div className="xl-col-3 lg-col-3 md-col-6 sm-col-6 col-10  ">
						<div className="pro-card">
							<div className="back-img4">
								<h2>tv-show</h2>
								
							</div>
							<div>
							<a href={tvShowUrl}>web site</a>
							</div>
							<div>
							<a href={gitTvUrl}>github</a>
							</div>
							
							

							
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Projects;
