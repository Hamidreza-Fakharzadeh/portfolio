import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hackat from '../images/hackat.png';

function Certificate() {
	
	return (
		<div id="certify" className="img-certify row">
			<div col-12>
				<img className="img-preview " src={hackat} alt="certificate" />
				
					<Link to="pro-id"><button style={{backgroundColor:"blue", color:"white"}}>Close</button></Link> 
				 
			</div>
		</div>
	);
}
export default Certificate;
