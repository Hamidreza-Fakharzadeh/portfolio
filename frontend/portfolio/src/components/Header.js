import React from 'react';
import {Link} from "react-scroll";
import {animateScroll as scroll} from "react-scroll";

function Header() {
      return (
            <nav className="menu-container">
					<div className="logo-cont">
                                    <div className="logo" onClick={()=> 
                                    scroll.scrollToTop()}>HF</div>
					</div>
					<div className="nav">
						<Link to="content-id" smooth={true} duration={1500}>Intro</Link>
						<Link to="about-id" smooth={true} duration={1500}>About</Link>
						<Link to="technical" smooth={true} duration={1500}>Technical Skills</Link>
						<Link to="wrapper-soft" smooth={true} duration={1500}>Soft Skills</Link>
						<Link  to="education-id" smooth={true} duration={1500}>Education</Link>
						<Link  to="exper-wrapper" smooth={true} duration={1500}>Experience</Link>
						<Link to="pro-id" smooth={true} duration={1500}>Projects</Link>
						<a href="nav-li">Contact</a>
					</div>
					<button className="berger">&#9776;</button>
				</nav>
                  
            
      )
}

export default Header