import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Spinner, } from "react-bootstrap";
import { useSelector } from "react-redux";
import { cases_registered } from "../../app/configure/firebase/firebase";
import "./Admin.css";
import MyVerticallyCenteredModal from "./authmodal";
import Cards from "./Cards"
import { SignOut} from "../../app/configure/admin/action";
import { useHistory } from "react-router-dom";

const Admin = () => {
	const [modalCheck, setmodalCheck] = useState(false)
  const adminCheck = useSelector(state => state.firebase.auth)
  const adminProfile = useSelector(state=>state.firebase.profile)
	const [cases, setcases] = useState([])
	const history = useHistory()

	useEffect(() => {
   	if(adminCheck.isEmpty === true && adminCheck.isLoaded === true){
   		setmodalCheck(true)
		}
		if(adminCheck.email){
			cases_registered().then(res=>setcases(res));
		}
	}, [adminCheck,cases])
	return (
		<Fragment >
			<MyVerticallyCenteredModal
				show={modalCheck}
				onHide={setmodalCheck}
      />
			{
				adminCheck.uid === undefined || adminCheck.uid === null ?
				<Fragment>
					<div className="center">
						<Spinner animation="border" onClick={()=>history.push('/')}/>
					</div>
				</Fragment>
				: 
				<Fragment>
					<Container fluid className="Main">
						<Container className="Main-Sub" fluid="lg">
							<div className="head">
								Hello,{adminProfile.displayName} 
							</div>
								<Button onClick={()=>{SignOut();history.push('/')}} className="button">SignOut</Button>
              {
                cases.length > 0 ?
                <Fragment>
						<Container className="cards">
								{cases.map((e,v)=>{
									return<Cards details={e} key={v}/>
								}
								)}
						</Container>
                </Fragment> 
                :
                <Fragment>
                  <div className="center">
										<Spinner animation="border"/>
									</div>
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