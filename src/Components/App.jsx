import React from "react";
import "./App.css";
import Nav from "./Nav.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
// import Home from "./Home.jsx";
// import Content from "./Content.jsx";
import Login from "./Login.jsx";
import Event from "./Event.jsx";
import Register from "./Register.jsx";
import Footer from "./Footer.jsx";
import { BrowserRouter as Router , Switch , Route } from "react-router-dom" ;



function App() {
  return (
    <div >
    <Router>
        <Nav />
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/" exact component={About} />
          <Route path="/Contact"  component={Contact} />
          {/* <Route path="/Content"  component={Content} /> */}
          <Route path="/About" component={About} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/Event" component={Event} />
        </Switch>
    </Router>
    <Footer />
    </div>
  );

  }
  export default App;