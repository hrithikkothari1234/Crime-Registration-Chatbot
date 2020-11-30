import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Navbar from "./../Navbar/Navbar"
import "./Home.css"

const Home = () => {
	return (
		<Fragment>
			<Navbar  />
			<div className="myback">
				<div className="overlay">
					<Container className="myContainer animated animatedFadeInUp fadeInUp">
						<h5>Crime Registration &amp; Crime Awareness System</h5>
						<p>
						The Crime Prevention Unit seeks to keep the community and DPS fully informed about crime awareness and prevention through many distinct activities:
						The Crime Prevention Officer maintains a detailed crime map for the Department of Public Safety. 
						All crime data is logged into a database with pertinent information. Recommendations are made when a pattern of crime is identified or when a number of incidents have occurred which create a pattern within a small amount of time. 
						</p>
					</Container>
				</div>
			</div>
		</Fragment>
	);
};

export default Home;