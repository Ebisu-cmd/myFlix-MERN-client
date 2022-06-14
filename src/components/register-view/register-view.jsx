import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function RegistrationView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ birthday, setBirthday ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // const userDetails = {
        //     Username: this.state.username,
        //     Password: this.state.password,
        //     Email: this.state.email,
        //     Birthday: this.state.birthday
        // };

        // axios.post('https://ebisu-myflixmovieapp.herokuapp.com/users', { userDetails })
        //     .then(response => {
        //         console.log(response)
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });

        props.onRegister(true);
    };

    return (
        <Card className="p-3">
            <Card.Title className="align-self-center mb-3">Register</Card.Title>
            <Form>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" onChange={e => setUsername (e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBirthday">
                    <Form.Label>Birthday</Form.Label>
                    <Form.Control type="date" placeholder="Enter birthday" onChange={e => setBirthday(e.target.value)} />
                </Form.Group>
            </Form>
            <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
        </Card>
    );
}

RegistrationView.propTypes = {
    onRegister: PropTypes.func.isRequired
}