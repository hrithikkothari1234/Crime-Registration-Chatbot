import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Content from "../Content/Content";
import Navbar from "./../Navbar/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import "./Home.css";

class Home extends React.Component {
	constructor(){
		super();
		this.state = {
			showMe:true
		}
		this.operation = this.operation.bind(this);
	}
	operation(){
		this.setState({
			showMe: !this.state.showMe
		})
	}
	render(){
		return (
			<Fragment>
			  <Navbar />
			  <div className="Robot" onClick={this.operation}>
				  <FontAwesomeIcon className="top" icon={faRobot} />
			  </div>
			  {
						this.state.showMe? null:				  					
						<iframe
							allow="microphone;"
							width="350"
							height="430"
							title="myframe"
							className="myframe"
							src="https://console.dialogflow.com/api-client/demo/embedded/1ccc3f6f-ddb6-431e-8241-1dc94a134687">
						</iframe>
					}
			  <div className="myback">
				<div className="overlay">
				  <Container className="myContainer animated animatedFadeInUp fadeInUp">
					<h5>Crime Registration &amp; Crime Awareness System</h5>
					<p>
						Our aim to eradicate crime from the system.If you have any queries or want to register a case click on the red chatbot option.
					</p>
				  </Container>
				</div>
			  </div>
			  <Content />
			</Fragment>
		  )
	}
};

export default Home;
