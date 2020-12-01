import React, { Fragment, useEffect, useState } from "react";
import { Button, Card, CardColumns, CardDeck, Col, Container, TabContainer, } from "react-bootstrap";
import { useSelector } from "react-redux";
import { cases_registered } from "../../app/configure/firebase/firebase";
import "./Admin.css";
import MyVerticallyCenteredModal from "./modal";
import Cards from "./Cards"
import { SignOut} from "../../app/configure/admin/action";

const Admin = () => {
	const [modalCheck, setmodalCheck] = useState(false)
  const adminCheck = useSelector(state => state.firebase.auth)
  const adminProfile = useSelector(state=>state.firebase.profile)
  const [cases, setcases] = useState([])

	useEffect(() => {
		console.log(adminCheck)
   	if(adminCheck.isEmpty === true && adminCheck.isLoaded === true){
   		setmodalCheck(true)
		}
		if(adminCheck.email){
			cases_registered().then(res=>setcases([cases,...res.docs]));
			console.log(cases)
		}
	}, [adminCheck])
	return (
		<Fragment>
			<MyVerticallyCenteredModal
				show={modalCheck}
				onHide={setmodalCheck}
      />
			{
				adminCheck.uid === undefined || adminCheck.uid === null ?
				<Fragment>
					Loading...
				</Fragment>
				: 
				<Fragment>
					<Container fluid className="Main">
						<Container class="Main-Sub" fluid="lg">
							<div className="head">
								Hello,{adminProfile.displayName} 
							</div>
							<Button onClick={()=>SignOut()}>SignOut</Button>
              {
                cases.length > 0 ?
                <Fragment>
						<Container className="cards">
								{cases.map((e,v)=>{
									if(v>0) return<Cards/>
								}
								)}
						</Container>
                </Fragment> 
                :
                <Fragment>
                  No results
                </Fragment>
              }
					</Container>
					</Container>
				</Fragment>
			}
		</Fragment>
	);
};

export default Admin;