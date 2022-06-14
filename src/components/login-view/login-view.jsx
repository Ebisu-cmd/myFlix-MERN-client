import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function LoginView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        /* Send a request to the server for authentication */
        props.onLoggedIn(username);
    };

    return (
        <Card className="p-3">
             <Card.Title className="align-self-center mb-3">Login</Card.Title>
             <Form>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" onChange={e => setUsername (e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
                </Form.Group>
             </Form>
             <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
        </Card>
    );
}

LoginView.propTypes = {
    onLoggedIn: PropTypes.func.isRequired
}
