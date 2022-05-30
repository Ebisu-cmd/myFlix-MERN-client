import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

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
        <form>
            <label>
                Username:
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </label><br />
            <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label><br />
            <label>
                Email:
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
                Birthday:
                <input type="date" value={birthday} onChange={e => setBirthday(e.target.value)} />
            </label>
            <button type="submit" onClick={handleSubmit}>Register</button>
        </form>
    );
}

RegistrationView.propTypes = {
    onRegister: PropTypes.func.isRequired
}