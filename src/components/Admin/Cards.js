import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { DeleteCase } from '../../app/configure/firebase/firebase';
import "./Admin.css";
const Cards = ({details}) => {
    return (
      <Card className="cards_child">
			    <Card.Body>
						<Card.Title>{details.[0].Name || null}</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">City: {details.[0].City || null}</Card.Subtitle>
				   	<Card.Text>
							Victim: {details.[0].Victim || null}
							<br/>
			    		Criminal: {details.[0].Criminal || null}
							<br/>
							Contact No: {details.[0].Contact || null}
		  			</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button variant="danger" onClick={()=>DeleteCase(details[1])}>Delete</Button>
				</Card.Footer>
	   </Card>
    )
}

export default Cards