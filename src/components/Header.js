import React from 'react';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

function Header() {
	return (
		<div className="container header-cont">
			<nav className="head-wrapper row">
			<div className="xl-col-2 lg-col-2 md-col-2 sm-col-2 col-6">
				<div className="logo" onClick={() => scroll.scrollToTop()}>
					HF
				</div>
			</div>
			<div className="id-cont xl-col-1 lg-col-1 md-col-2 sm-col-2 col-6">
				<Link to="content-id" smooth={true} duration={1500}>
					Intro
				</Link>
			</div>
			<div className="id-cont xl-col-1 lg-col-1 md-col-2 sm-col-2 col-6">
				<Link to="about-id" smooth={true} duration={1500}>
					About
				</Link>
			</div>
			<div className="id-cont xl-col-1 lg-col-1 md-col-2 sm-col-2 col-6">
				<Link to="technical" smooth={true} duration={1500}>
					Technical Skills
				</Link>
			</div>
			<div className="id-cont xl-col-1 lg-col-1 md-col-2 sm-col-2 col-6">
				<Link to="id-soft" smooth={true} duration={1500}>
					Soft Skills
				</Link>
			</div>
			<div className="id-cont xl-col-1 lg-col-1 md-col-2 sm-col-2 col-6">
				<Link to="education-id" smooth={true} duration={1500}>
					Education
				</Link>
			</div>
			<div className="id-cont xl-col-1 lg-col-1 md-col-2 sm-col-2 col-6">
				<Link to="exper-id" smooth={true} duration={1500}>
					Experience
				</Link>
			</div>
			<div className="id-cont xl-col-1 lg-col-1 md-col-2 sm-col-2 col-6">
				<Link to="pro-id" smooth={true} duration={1500}>
					Projects
				</Link>
			</div>
			<div className="id-cont xl-col-1 lg-col-1 md-col-2 sm-col-2 col-6">
				<Link to="pro-contact" smooth={true} duration={1500}>
					Contact
				</Link>
			</div>

			
		</nav>
		</div>
		
	);
}

export default Header;
