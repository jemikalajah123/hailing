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
import Loader from '../../components/Loader';
import Message from '../../components/Message';


const Checkout = ({ match, history }) => {

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

                                            <Button
                                                type='submit'
                                                variant='primary'
                                            >
                                                Pay Now
                                            </Button>
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