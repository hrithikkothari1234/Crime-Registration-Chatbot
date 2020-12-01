  
import React from "react";
import "./Team.css";
import { Container, Row, Col, Card } from 'react-bootstrap';

import hritik_src from '../assets/team_hritik.jpeg';
import dhrumil_src from '../assets/team_dhrumil.jpg';
import varad_src from '../assets/team_varad.jpeg';
import yash_src from '../assets/team_yash.jpeg';

const Team = () => {
	return (
        <div className="team-page">
            <Container>
                <Row className="text-center justify-content-center">
                    <a href="/" className="back-btn">
                        <i className="fa fa-arrow-left mr-3" aria-hidden="true"></i>
                        Go back
                    </a>
                </Row>

                <Row className="text-center justify-content-center mt-4">
                    <h5>
                        Website Designed & Developed By
                    </h5>
                </Row>

                <Row className="mt-3">

                	<Col lg={3} md={6} sm={12} className="form-group">
						<Card>
							<Card.Header style={{ backgroundColor: "white" }} 
							className="text-center justify-content-center">
								<div className="hritik-img-container mb-3">
									<img
									src={hritik_src}
									alt="hritik-developer"
									className="hritik-image"
									/>
								</div>

								<b className="team-name">
									Hritik Kothari
								</b> 

							</Card.Header>

						</Card>
					</Col>

					<Col lg={3} md={6} sm={12} className="form-group">
						<Card>
							<Card.Header style={{ backgroundColor: "white" }}
						 	className="text-center justify-content-center">
								<div className="img-container mb-3">
									<img
									src={dhrumil_src}
									alt="dhrumil-developer"
									className="team-image"
									/>
								</div>

								<b className="team-name">
									Dhrumil Shah
								</b> 

							</Card.Header>

						</Card>
					</Col>

					<Col lg={3} md={6} sm={12} className="form-group">
						<Card>
							<Card.Header style={{ backgroundColor: "white" }}
							className="text-center justify-content-center">
								<div className="img-container mb-3">
									<img
									src={yash_src}
									alt="yash-developer"
									className="team-image"
									/>
								</div>

								<b className="team-name">
									Yash Sankpal
								</b> 

							</Card.Header>
						</Card>
					</Col>

					<Col lg={3} md={6} sm={12} className="form-group">
						<Card>
							<Card.Header style={{ backgroundColor: "white" }}
							className="text-center justify-content-center">
								<div className="img-container mb-3">
									<img
									src={varad_src}
									alt="varad-developer"
									className="team-image"
									/>
								</div>

								<b className="team-name">
									Varad Patil
								</b> 

							</Card.Header>
						</Card>
					</Col>


                </Row>

            </Container>
        </div>
    
	);
};

export default Team;
