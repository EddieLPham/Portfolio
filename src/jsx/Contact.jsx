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
					displayAlert("Email sent successfully!", "success"); // Show success alert
				},
				(error) => {
					console.log(error.text);
					displayAlert("An error occurred. Please try again.", "error"); // Show error alert
				}
			);
	};
	const displayAlert = (message, type) => {
		const alertElement = document.createElement("div");
		alertElement.classList.add("alert", type);
		alertElement.textContent = message;

		document.body.appendChild(alertElement);

		// Remove the alert after a certain duration (e.g., 3 seconds)
		setTimeout(() => {
			alertElement.remove();
		}, 3000);
	};
	return (
		<div id="contact" className="CContainer">
			<div className="contact">
				<div className="contactMessage">
					<h1 className="contactTitle">
						🔌 Let's connect! <br />
						Tell me about you and your projects.
					</h1>
					<h3>Let's collaborate!</h3>
				</div>
				<div className="contactEmail">
					<div className="emailHeader">
						<h2>Send me a message! </h2>
						<img
							width="48"
							height="48"
							src="https://img.icons8.com/material-outlined/48/mail.png"
							alt="mail"
						/>
					</div>
					<div className="contactForm">
						<form className="emailForm" ref={form} onSubmit={sendEmail}>
							<input
								className="form-group section"
								type="text"
								required
								name="user_name"
								placeholder="Your name... "
							/>
							<input
								className="form-group section "
								type="email"
								required
								name="user_email"
								placeholder="Your email... "
								pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
								title="Please enter a valid email address"
							/>
							<textarea
								className="form-group message"
								required
								name="message"
								row="4"
								placeholder="Your message here!... "
							/>
							<button className="Button" type="submit" value="Send">
								Send message
							</button>
						</form>
					</div>
				</div>
			</div>
		</div> //Container
	);
};

export default Contact;
