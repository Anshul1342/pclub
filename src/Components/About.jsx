import React from "react";
import './About.css';

// &lt;</span> p <span class="bracket">&gt;
function About()
{
	return (
<div>
<head>
	<title>About</title>
	<link rel="stylesheet" type="text/css" href="aboutnonav.css" />

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />

	 <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>

	 <meta name="viewport" content="width=device-width, height=device-heigth, initial-scale=1.0" />

</head>
<body>

 {/* Section-1 */}

<div className="section-1">
		<div className="container">
			<div className="row d-flex">
				<div className="first-half col-lg-5 col-md-4 col-sm-5 col-xs-12 mb-lg-0">
					<div className="about d-flex">
						<h1 className="about-text">About</h1>
					</div>
					<div className="complete-logo d-flex">
						<div className="p-logo">
							<h1   className= "pclub"><span class="bracket">&lt;</span> p <span class="bracket">&gt;</span></h1>
						</div>
						<div className="club">
							<h1 className="logo-half-2"> club</h1>
						</div>
					</div>
					<div className="info-here">
						<a href="#downhere" className="get-info">INFO HERE</a>
					</div>
				</div>
				<div className="second-half col-lg-7 col-md-8 col-sm-7 col-xs-12 mb-lg-0">
					<div className="type">
						<span className="type-line type-line-1">while(!succeed)</span><br />
						<span className="type-line type-line-2">code;</span>
					</div>
				</div>
			</div>
		</div>
	<div className="color-overlay"></div>
</div>

 {/* Section-2  */}

<div className="section-2">
	<div className="color-overlay-2"></div>
</div>

{/* Section-3 */}

<div className="section-3">
		<div className="row justify-content-center">
		 	<div className="card bg-white text-dark">
				<div className="card-img-overlay">
    				<a name="downhere"></a>
    				<h5 className="card-title display-1">About Us</h5>
				    <p className="card-text display-1">
							<span>Programming Club UIET or pclub</span> for short is a student driven society that aims at
							educating students about various domains of Computer Science, Electronics and
							Information Technology. We cover a broad spectrum of topics ranging from Artificial
							Intelligence to Competitive Programming. We also aim at preserving and expanding
							the FOSS community that UIET has. The only skill you need to join us is the
							willingness to learn. Hope to see you all in our next session.
							<br />
							We are here to help students find a path they can tread upon in the field of
							Computer Science and Information Technology. Connecting students with the right
							mentors so that their journey in the realm of engineering is smooth. Gives students a
							chance to develop their interpersonal skills as students are surrounded by like
							minded people where their ideas are appreciated as well as they are motivated to
							hold sessions on their own in the field of their interest. Equip the students with all
							the tools of knowledge that they will experience in the next 4 years of their
							engineering so that they can make their choice wisely. Make the students aware of
							the conferences, meetups, competitions which is shared at regular intervals in our
							Telegram channel and Facebook page.
    				</p>
				</div>
			</div>
		</div>
	<div className="color-overlay-3"></div>
</div>
</body>
</div>

	);
}
                    
export default About ;