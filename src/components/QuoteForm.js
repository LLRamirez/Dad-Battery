import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { FormControl } from 'react-bootstrap';
import UploadBtn from '../components/UploadBtn';
import Button from 'react-bootstrap/Button';


const QuoteForm = () => {
    return(
        <Form>

            <InputGroup className="mb-3">
            <InputGroup.Text>First and last name</InputGroup.Text>
            <FormControl aria-label="First name" />
            <FormControl aria-label="Last name" />
            </InputGroup>

            <Form.Group className="inputLabel" controlId="formBasicEmail">
                <Form.Label className="labelTitle">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                ( FYI: We'll never share your email with anyone else. )
                </Form.Text>
            </Form.Group>

            

            <Form.Group className="inputLabel" controlId="formBasicPassword">
                <Form.Label className="labelTitle">Battery Type & Model</Form.Label>
                <Form.Control placeholder="Describe Battery Type + Model" />
            </Form.Group>

            {/* <UploadBtn/> */}

            <div className="submitBtn">
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </div>
        </Form>
    );
}

export default QuoteForm;