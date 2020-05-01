import React from "react";
import "./Contact.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { faFacebook } from '@fortawesome/free-brands-svg-icons';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
// import { faTelegram } from '@fortawesome/free-brands-svg-icons';
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import {faAngellist} from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
	<div>
	<head>
		<title>Contact Us</title>
		<link rel="stylesheet" type="text/css" href="contact us.css" />
	
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />	
	
		 <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
	
	
	</head>
	<body>
	
		<div className="section-5">
	
			<div className="container">
				<div className="query-head1">
					LITTLE MORE ?
				</div>
				<div className="query-head2">
					Get in touch with us!
				</div>
				<div className="contact">
					<form className="form1 justify-content-center d-flex" action="." method="post">
						<div className="row">
							<div className="content-1 col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-lg-0 mt-3 mb-3">
								<div className="form-group gp-1 p-3 d-flex">
									<input type="text" name="name" autocomplete="off" className="form-input form-input-1 justify-content-center" id="name" placeholder=" " required />
									<label for="name" className="form-placeholder">NAME</label>
								</div>
							</div>
							<div className="content-2 col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-lg-0 mt-3 mb-3">
								<div className="form-gp gp-2 p-3 d-flex">
									<input type="email" name="email" autocomplete="off" p className="form-input form-input-2 justify-content-center" id="email" placeholder=" " required />
									<label for="email" className="form-placeholder justify-content-center">EMAIL</label>
								</div>
							</div>
							<div class="content-3 col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-lg-0 mt-3 mb-3">
								<div class="form-gp gp-3 p-3 d-flex justify-content-center">
									<input type="text" name="text" autocomplete="off" pla className="form-input form-input-3 justify-content-center" id="message" placeholder=" " required />
									<label for="message" className="form-placeholder">MESSAGE</label>
								</div>
							</div>
							<div className="btn-group col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-lg-0 mt-3 mb-3 justify-content-center">
								<div className="form-gp d-flex justify-content-center">	
									<button className="query-submit">Get in touch</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>	
		<div class="color-overlay5"></div>	
	</div>
	{/* <span className="follow">Follow us</span>


<div className="icons-drop">

	<ul>
	<li><a className="dropbtn"><FontAwesomeIcon icon = {faAngellist} color="white" /></a></li>


	<span className="icons">
		<li><a href="https://instagram.com/pclubuiet?igshid=lglqdf8mqtjn" className="icon1"><FontAwesomeIcon icon = {faInstagram} /></a></li>
		<li><a href="http://fb.me/pclubuiet" className="icon3"><FontAwesomeIcon icon = {faFacebook} /></a></li>
		<li><a href="https://twitter.com/PClubUIET" className="icon2"><FontAwesomeIcon icon = {faTwitter} /></a></li>
		<li><a href="https://t.me/pclubpu" className="icon5"><FontAwesomeIcon icon = {faTelegram} /></a></li>
        <li><a href="#" className="icon4"><FontAwesomeIcon icon = {faGoogle} /></a></li>
		<li><a href="#" className="icon6"><FontAwesomeIcon icon = {faLinkedin} /></a></li>
        
	</span>
	</ul>
</div> */}



	</body>
	</div>
   
  );
}

export default Contact;
