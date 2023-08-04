import React, { useRef } from "react";
import "boxicons";
import "../css/Contact.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_gtgj11f",
				"template_1jw5q44",
				form.current,
				"user_X1CPA7sGCacawyimd12PS"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div id="contact" className="CContainer">
			<div className="contactMessage">
				<h1 className="contactTitle">
					🔌 Let's connect! <br />
					Tell me about you and your projects.
				</h1>
				<h3>Let create something together!</h3>
			</div>{" "}
			{/*message*/}
			<div className="contactEmail">
				<div className="contactForm">
					<div className="emailHeader">
						<h2>Send me a message! </h2>
						<img
							width="48"
							height="48"
							src="https://img.icons8.com/material-outlined/48/mail.png"
							alt="mail"
						/>
					</div>
					<form className="emailForm" ref={form} onSubmit={sendEmail}>
						<input
							class="form-group section"
							type="text"
							name="user_name"
							placeholder="Your name... "
						/>
						<input
							class="form-group section "
							type="email"
							name="user_email"
							placeholder="Your email... "
						/>
						<textarea
							class="form-group message"
							name="message"
							row="4"
							placeholder="Your message here!... "
						/>
						<button class="Button" type="submit" value="Send">
							Send message
						</button>
					</form>
				</div>
				{/* email form*/}
			</div>
		</div> //Container
	);
};

export default Contact;
