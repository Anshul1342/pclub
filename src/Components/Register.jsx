import React from "react";
import { Form, Button } from 'react-bootstrap'

function Register() {
    return (
        <div class="row justify-content-center ">
            <div class="col-lg-6 abc">

                <br />
                <br />
                <Form>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>UserName</Form.Label>
                        <Form.Control type="text" placeholder=" Enter UserNme " />
                    </Form.Group>


                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
  </Button>
                    <br />
                    <br />
                    <br />

                </Form>
            </div>
        </div>
    );
}
export default Register;