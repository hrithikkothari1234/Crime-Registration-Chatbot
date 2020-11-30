import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

const Hi = () => {
	return (
		<Fragment>
			<div className="myback">
				<div className="overlay">
					<Container className="myContainer animated animatedFadeInUp fadeInUp">
						<h5>FRCRCE STUDENT PORTAL</h5>
						<p>
                            Hi Programmers
						</p>
					</Container>
				</div>
			</div>
		</Fragment>
	);
};

export default Hi;