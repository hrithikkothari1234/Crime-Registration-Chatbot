import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Login } from "../../app/configure/admin/action";

const MyVerticallyCenteredModal = ({...props}) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const history = useHistory()
    // function
    const handleSubmit =(e)=>{
      e.preventDefault()
      if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) || password.length > 6 ){
        Login({email,password});
      }
    }
    return (
      <Modal
        {...props}
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
            Sign In
          </Modal.Title>
        </Modal.Header>
        <Form>
            <Modal.Body>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={e=>setemail(e.target.value)}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e=>setpassword(e.target.value)}/>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>history.push('/')} className="d-flex">Close</Button>
                <Button type="submit"  onClick={(e)=>handleSubmit(e)}>
                    Sign In
                </Button>
            </Modal.Footer>
        </Form>
      </Modal>
    );
  }
  
  export default MyVerticallyCenteredModal;
