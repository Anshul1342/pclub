import React from "react";
import './About.css';


function About()
{

const customStyle1 = {

  position: "absolute" ,
  marginTop: "100px " ,
  width: '70%',
   minHeight: "400% " ,
   filter: "drop-shadow(2px 2px 4px rgba(1, 1, 1, 0.4) )"
}

const customStyle2 ={
  fontSize:"50px" ,
 borderBottom:"1px solid #d1d1d1" ,
  width: "30%" ,
  paddingBottom: "20px"
}

const customStyle3 = {
  zIndex: "1",
fontSize:"22px",
letterSpacing: "2px", 
lineHeight: "40px",
paddingTop: "20px",
color:" rgb(75, 77, 76)",
 backgroundOpacity:"0.3"
}

return(
  <div className="edit">
   
  <head>
	<title>About</title>
	<link rel="stylesheet" type="text/css" href="aboutnonav.css" />

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />	

	 <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>

	 <meta name="viewport" content="width=device-width, height=device-heigth, initial-scale=1.0" />

</head>
<body>

<div class="section-1">
		<div class="container">
			<div class="row d-flex">	
				<div class="first-half col-lg-5 col-md-4 col-sm-5 col-xs-12 mb-lg-0">
					<div class="about d-flex">
						<h1 class="about-text">About</h1>
					</div>
					<div class="complete-logo d-flex">
						<div class="p-logo">
							<h1 id ="hexagon"><span class="bracket">&lt;</span> p <span class="bracket">&gt;</span></h1>
						</div>	
						<div class="club">
							<h1 class="logo-half-2"> club</h1>
						</div>
					</div>
					<div class="info-here">
						<a href="#downhere" class="get-info">INFO HERE</a>
					</div>
				</div>
				<div class="second-half col-lg-7 col-md-8 col-sm-7 col-xs-12 mb-lg-0">
					<div class="type">
						<span class="type-line type-line-1">while(!succeed)</span><br />
						<span class="type-line type-line-2">code;</span>
					</div>
				</div>
			</div>
		</div>
	<div class="color-overlay"></div>
</div>

<div class="section-2">
	<div class="container">
	<div class="row justify-content-center">
 	<div class="card bg-white text-dark" style={customStyle1}>

  <div class="card-img-overlay">
    <a name="downhere"></a>
    
    <h5 class="card-title display-1" style={customStyle2}>About us</h5>
    <p class="card-text display-1 text-responsive" style={customStyle3}>
		
		Programming Club UIET or pclub for short is a student driven society that aims at
educating students about various domains of Computer Science, Electronics and
Information Technology. We cover a broad spectrum of topics ranging from Artificial
Intelligence to Competitive Programming. We also aim at preserving and expanding
the FOSS community that UIET has. The only skill you need to join us is the
willingness to learn. Hope to see you all in our next session

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
</div>
<div class="color-overlay-2"></div>

</div>	

<div class="section-3">
	<div class="color-overlay-3"></div>
</div>

</body>
</div>
);
}
                    
export default About ;