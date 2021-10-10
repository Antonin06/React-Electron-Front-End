import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function Newsletter() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('Gmail', 'template_g85tepx', form.current, 'user_wtTYyOEuraUmsvmyrqoSs')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
	};

	return (
		<section id="newsletter" className="bg-secondary">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<span className="newsletter">Subscribe to our Newsletter</span>
					</div>
					<div className="col-md-6">
						<p>Sed ut perspiciatis unde omnis iste natus error sit volu accusa ntium doloremque laudantium, ut perspiciatis.</p>
						<form ref={form} onSubmit={sendEmail}>
							<input placeholder="Add Your e-mail" type="email" name="user_email" />
							<button type="submit">
								Subscribe
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Newsletter;
