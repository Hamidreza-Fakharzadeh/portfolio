import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
	const initialStateMsg = {
		name: '',
		email: '',
		subject: ''
	};
	const [ msgForm, setMsgForm ] = useState(initialStateMsg);

	const inputHandler = (e) => {
		setMsgForm({ ...msgForm, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post('http://localhost:8080', msgForm).then((res) => console.log(res.data));
		setMsgForm(initialStateMsg);
	};

	return (
		<div className="container contact-cont">
			<div className="row">
				<div className="contact-text xl-col-3 lg-col-3 md-col-3 sm-col-12 col-12">
					<p>CONTACT WITH ME</p>
				</div>
				<div className="form-cont xl-col-9 lg-col-9 md-col-9 sm-col-6 col-6">
					<form onSubmit={handleSubmit}>
						<label htmlFor="fname">Name</label>
						<input
							type="text"
							id="fname"
							name="name"
							value={msgForm.name}
							onChange={inputHandler}
							placeholder="Your name.."
						/>

						<label htmlFor="email">Email</label>
						<input
							type="text"
							id="email"
							name="email"
							value={msgForm.email}
							onChange={inputHandler}
							placeholder="Your Email..."
						/>
						<label htmlFor="subject">Subject</label>
						<textarea
							id="subject"
							name="subject"
							value={msgForm.subject}
							placeholder="Please write your message..."
							style={{ height: '200px' }}
							onChange={inputHandler}
						/>
						<button type="submit" value="Submit">
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
export default Contact;
