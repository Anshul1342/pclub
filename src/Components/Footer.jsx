import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

// import { faPhone } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/free-brands-svg-icons';
// import { faMapMarkerAlt } from '@fortawesome/free-brands-svg-icons';

import {faAngellist} from '@fortawesome/free-brands-svg-icons';


function footer (){
    return(
        <div>
        <head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="footerpclub.css" />

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />

	 <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>

	 <meta name="viewport" content="width=device-width, height=device-heigth, initial-scale=1.0" />
</head>

<body>
	{/* <div className="page"></div> */}
	<div className="footer">
			<div className="row footer-content">
				<div className="logo col-lg-4 col-md-12 col-sm-12 col-12">
					<img src="/images/plogo2.png" />
				</div>
				<div className="info-help col-lg-4 col-md-6 col-sm-12 col-12">
					<div className="info-div location">
						{/* <i className="fas fa-map-marker-alt"></i> */}
						{/* <FontAwesomeIcon icon = {faMapMarkerAlt} /> */}
						<FaMapMarkerAlt />
						<span>Sector 25, Chandigarh, Punjab University</span>
					</div>
					<div className="info-div mail">
						{/* <i className="fas fa-envelope"></i> */}
						{/* <FontAwesomeIcon icon = {faEnvelope} /> */}
						<FaEnvelope />
						<span>pclubuiet@gmail.com</span>
					</div>
					<div className="info-div call">
						{/* <i className="fa fa-phone"></i> */}
						{/* <FontAwesomeIcon icon = {faPhone} /> */}
						<FaPhone />
						<span>abc: 2345678</span>
					</div>
				</div>
				<div className="update col-lg-4 col-md-6 col-sm-12 col-12">
					<h1>Join Us</h1>
					<h5>Enter your email and get our latest <br />updates</h5>
					<div className="form">
						<input type="email" name="email" placeholder="Enter your email" className="input" autocomplete="off" />
						<span className="btn-span">
							<button className="btn-send">Send</button>
						</span>
					</div>
					<div className="media">
						<ul>
						    <li><a href="#" className="icon-1"><FontAwesomeIcon icon = {faGithub} /></a></li>
							<li><a href="https://instagram.com/pclubuiet?igshid=lglqdf8mqtjn" className="icon-4"><FontAwesomeIcon icon = {faInstagram} /></a></li>
		                    <li><a href="http://fb.me/pclubuiet" className="icon-3"><FontAwesomeIcon icon = {faFacebook} /></a></li>
		                    <li><a href="https://twitter.com/PClubUIET" className="icon-2"><FontAwesomeIcon icon = {faTwitter} /></a></li>
		                    <li><a href="https://t.me/pclubpu" className="icon-5"><FontAwesomeIcon icon = {faTelegram} /></a></li>
                            <li><a href="#" className="icon-4"><FontAwesomeIcon icon = {faGoogle} /></a></li>
		                    <li><a href="#" className="icon-2"><FontAwesomeIcon icon = {faLinkedin} /></a></li>
						</ul>
					</div>
				</div>
		</div>
		<div className="footer-bottom">&copy; pclub.com | Designed by <span>&lt;</span>p<span>&gt;</span>club</div>
	</div>
</body>
</div>
    );
}

export default footer ;