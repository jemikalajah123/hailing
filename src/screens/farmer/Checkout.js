import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Row,
    Col,
    Image,
    ListGroup,
    Button,
    Card,
    Form,
} from 'react-bootstrap';
import { PaystackConsumer } from 'react-paystack';
import Loader from '../../components/Loader';
import Message from '../../components/Message';



const Checkout = ({ match, history }) => {

    const config = {
        reference: (new Date()).getTime(),
        email: "user@example.com",
        amount: 20000,
        publicKey: 'pk_test_dsdfghuytfd2345678gvxxxxxxxxxx',
    };

    // you can call this function anything
    const handleSuccess = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
    };

    // you can call this function anything
    const handleClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
    }

    const componentProps = {
        ...config,
        text: 'Starting Payment',
        onSuccess: (reference) => handleSuccess(reference),
        onClose: handleClose
    };

    const submitHandler = (e) => {
        e.preventDefault();
    };

    const  loading = false;
    const error = false;

    return(
        <div >
            <Link to='/farmer/farm/equipment' className='btn back btn-light my-3'>
                Go Back
            </Link>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <div className="equipment">
                    <Row>
                        <Col md={6}>
                            <Image src="/assets/images/widget/user-1.png" alt="" fluid />
                        </Col>

                        <Col md={6}>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h3>Shovel</h3>
                                </ListGroup.Item>

                                <ListGroup.Item>Price: $300</ListGroup.Item>

                                <ListGroup.Item>
                                    Description: For digging
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h4>Select a farm</h4>
                                        <Form onSubmit={submitHandler}>
                                            <Form.Group controlId='rating'>
                                                <Form.Label>Farm Name</Form.Label>
                                                <Form.Control
                                                    as='select'
                                                >
                                                    <option value=''>Select...</option>
                                                    <option value='1'>1 - Poor</option>
                                                    <option value='2'>2 - Fair</option>
                                                    <option value='3'>3 - Good</option>>
                                                </Form.Control>
                                            </Form.Group>
                                            <PaystackConsumer {...componentProps} >
                                                {({initializePayment}) => <button type='submit' variant='primary' onClick={() => initializePayment(handleSuccess, handleClose)}>Pay Now</button>}
                                            </PaystackConsumer>
                                        </Form>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </div>
            )}
        </div>
    )
}


export  default Checkout