import React from 'react';
import web from '../images/web.jpg';

function Projects() {
	return (
		<div id="pro-id" className="pro-wrapper">
			<h1 className="pro-header">PROJECTS</h1>

			<div className="row">
				<div className="xl-col-3 lg-col-3 md-col-4 sm-col-6 col-10  ">
					<div className="pro-card">
						<img src={web} alt="project" width="100%" />
						<h1 className="pro-title">title</h1>
						<p className="pro-content">content</p>
						<p className="pro-link">link</p>
					</div>
				</div>
				<div className="xl-col-6 lg-col-6 md-col-6 sm-col-12 col-10  ">
					<div className="pro-card">
						<img src={web} alt="project" width="100%" height="30%" />
						<h1 className="pro-title">title</h1>
						<p className="pro-content">content</p>
						<p className="pro-link">link</p>
					</div>
				</div>
				<div className="xl-col-2 lg-col-2 md-col-2 sm-col-12 col-10  ">
					<div className="pro-card">
						<img src={web} alt="project" width="100%" height="30%"/>
						<h1 className="pro-title">title</h1>
						<p className="pro-content">content</p>
						<p className="pro-link">link</p>
					</div>
				</div>
				<div className="xl-col-3 lg-col-3 md-col-4 sm-col-6 col-10  ">
					<div>
						<img src={web} alt="project" width="100%" />
						<h1 className="pro-title">title</h1>
						<p className="pro-content">content</p>
						<p className="pro-link">link</p>
					</div>
				</div>
				<div className="xl-col-3 lg-col-3 md-col-4 sm-col-6 col-10  ">
					<div>
						<img src={web} alt="project" width="100%" />
						<h1 className="pro-title">title</h1>
						<p className="pro-content">content</p>
						<p className="pro-link">link</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Projects;
