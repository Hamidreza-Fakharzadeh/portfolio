import React from 'react';
import pic from '../images/pic.png';

 function Main() {
      return (
            <div className="content" id="content-id">
					<div className="intro-name">
						<p className="intro-p">Hi,</p>
						<p className="intro-p">I am Hamidreza</p>
						<p className="intro-stack">Full Stack Web Developer</p>
					</div>
					<div className="pic">
						<img className="img-1" src={pic} alt="pic" />
					</div>
				</div>
      )
}

export default Main