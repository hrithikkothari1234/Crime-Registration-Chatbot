import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { DeleteCase } from '../../app/configure/firebase/firebase';
import "./Admin.css";
const Cards = ({details}) => {
console.log(details)
    return (
      <Card className="cards_child">
			    <Card.Body>
						<Card.Title>{details.[0].title || null}</Card.Title>
				   	<Card.Text>
			    		{details[0].body || null}
		  			</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button variant="danger" onClick={()=>DeleteCase(details[1])}>Delete</Button>
				</Card.Footer>
	   </Card>
    )
}

export default Cards