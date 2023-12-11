import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './css/custom.css'

function SignIn(){
    return(
        <div className="card p-5 cont shadow" >
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
               
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
               
            </Form.Group>

                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    );
}

export default SignIn;