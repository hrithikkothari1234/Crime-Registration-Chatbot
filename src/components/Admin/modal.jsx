import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Login } from "../../app/configure/admin/action";

const MyVerticallyCenteredModal = ({...props}) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    // function
    const handleSubmit =(e)=>{
      e.preventDefault()
      Login({email,password});
      props.onHide()
    }
    return (
      <Modal
        {...props}
        centered
      >
        <Modal.Header closeButton>
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
                <Button type="submit"  onClick={(e)=>handleSubmit(e)}>
                    Sign In
                </Button>
            </Modal.Footer>
        </Form>
      </Modal>
    );
  }
  
  export default MyVerticallyCenteredModal;
