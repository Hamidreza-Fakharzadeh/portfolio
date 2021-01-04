import React from 'react';

function Projects() {
	return (
		<div id="pro-id" className="container pro-cont">
			<div>
				<p className="pro-header">PROJECTS</p>

				<div className="pro-wrapper row">
					<div className="xl-col-3 lg-col-3 md-col-3 sm-col-3 col-10  ">
						<div className="pro-card">
							{/* <img src={web} alt="project" width="100%" /> */}
							<div className="back-img">
								<p>Portfolio</p>
							</div>
							<h1 className="pro-title">title</h1>
						</div>
					</div>
					<div className="xl-col-3 lg-col-3 md-col-3 sm-col-3 col-10  ">
						<div className="pro-card">
							<div className="back-img">
								<p>Portfolio</p>
							</div>
							<h1 className="pro-title">title</h1>
						</div>
					</div>
					<div className="xl-col-3 lg-col-3 md-col-3 sm-col-3 col-10  ">
						<div className="pro-card">
							<div className="back-img">
								<p>Portfolio</p>
							</div>
							<h1 className="pro-title">title</h1>
						</div>
					</div>
					<div className="xl-col-3 lg-col-3 md-col-3 sm-col-3 col-10  ">
						<div className="pro-card">
							<div className="back-img">
								<p>Portfolio</p>
							</div>
							<h1 className="pro-title">title</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Projects;
