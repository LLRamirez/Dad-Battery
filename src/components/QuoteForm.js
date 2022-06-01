import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { FormControl } from 'react-bootstrap';
import UploadBtn from '../components/UploadBtn';
import Button from 'react-bootstrap/Button';
import PlacesAutocomplete from '../components/PlacesAutocomplete';


const QuoteForm = () => {
    return(
        <Form>

            <InputGroup className="mb-3">
            <InputGroup.Text>Name</InputGroup.Text>
            <FormControl aria-label="First & Last name" />
            </InputGroup>

            <Form.Group className="inputLabel" controlId="formBasicEmail">
                <Form.Label className="labelTitle">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            

            <Form.Group className="inputLabel" controlId="formBasicPassword">
                <Form.Label className="labelTitle">Battery Type & Model</Form.Label>
                <Form.Control placeholder="Describe Battery Type + Model" />
            </Form.Group>

            <UploadBtn/>
            <div className='autoAddyContainer'>
                <PlacesAutocomplete/>
            </div>
            <div className="submitBtn">
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </div>
        </Form>
    );
}

export default QuoteForm;