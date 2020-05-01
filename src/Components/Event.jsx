import React from "react";
import "./Event.css";




const customStyle = {
	
}

function Event()
{
	return(
		<div>

<meta name="viewport" content ="width=device-width,initial-scale = 1.0" />
  <head>
    <meta charset="utf-8" />
    <title>Events Section UI Design </title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <section>
      <div className="leftBox">
        <div className="content">
           <h1>Events</h1>
           <p>
             Programming Club UIET or pclub for short is a student driven society that aims at
educating students about various domains of Computer Science, Electronics and
Information Technology. We cover a broad spectrum of topics ranging from Artificial
Intelligence to Competitive Programming. We also aim at preserving and expanding
the FOSS community that UIET has. The only skill you need to join us is the
willingness to learn. Hope to see you all in our next session

             </p>
        </div>
      </div>


<div class="events">
  <ul>
        <li>
          <div className="time">
            <h2> 14 <br /><span>June</span></h2>
            </div>
            <div className="details">
              <h3>What was the theme of the event</h3>
              <p>
                we give
                chance to develop interpersonal skills as students are surrounded by like
                minded people where their ideas are appreciated as well as they are motivated to
                hold sessions on their own in the field of their interest.
                <a href="#">Veiw details</a>
              </p>
            </div>
            <div style={customStyle}></div>
          </li>
          <li>
            <div className="time">
              <h2> 24 <br /><span>June</span></h2>
              </div>
              <div className="details">
                <h3>What was the theme of the event</h3>
                <p>
                  we give
                  chance to develop interpersonal skills as students are surrounded by like
                  minded people where their ideas are appreciated as well as they are motivated to
                  hold sessions on their own in the field of their interest.
                  <a href="#">Veiw details</a>
                </p>
              </div>
              <div style={customStyle}></div>
            </li>
            <li>
              <div className="time">
                <h2> 29 <br /><span>June</span></h2>
                </div>
                <div className="details">
                  <h3>What was the theme of the event</h3>
                  <p>
                    we give
                    chance to develop interpersonal skills as students are surrounded by like
                    minded people where their ideas are appreciated as well as they are motivated to
                    hold sessions on their own in the field of their interest.
                    <a href="#">Veiw details</a>
                  </p>
                </div>
                <div style={customStyle}></div>
              </li>
    </ul>

</div>




    </section>

  </body>
		
  </div>
	);
}



export default Event ;