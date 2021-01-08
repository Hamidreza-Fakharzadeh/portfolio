import React from 'react';

function Contact() {
	return (
		<div className="container contact-cont">
			<div className="row">
				<div className="contact-text xl-col-3 lg-col-3 md-col-3 sm-col-12 col-12">
					<p>CONTACT WITH ME</p>
				</div>
				<div className="form-cont xl-col-9 lg-col-9 md-col-9 sm-col-6 col-6">
					<form>
						<label for="fname">Name</label>
						<input type="text" id="fname" name="firstname" placeholder="Your name.." />

						<label for="aemail">Email</label>
						<input type="text" id="aemail" name="email" placeholder="Your Email..." />
						<label for="subject">Subject</label>
						<textarea id="subject" name="subject" placeholder="Please write your message..." style={{height:"200px"}} />

						<input type="submit" value="Submit" />
					</form>
				</div>
			</div>
		</div>
	);
}
export default Contact;
