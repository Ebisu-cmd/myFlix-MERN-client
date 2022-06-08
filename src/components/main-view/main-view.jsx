import React from 'react';
import axios from 'axios';

import { LoginView } from '../login-view/login-view'
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { RegistrationView } from '../register-view/register-view';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default class MainView extends React.Component {
    constructor() {
        super();
        // initital state set to null/empty
        this.state = {
            movies: [],
            selectedMovie: null,
            user: null,
            register: null
        };
    }

    componentDidMount() {
        axios.get('https://ebisu-myflixmovieapp.herokuapp.com/movies')
            .then(response => {
                this.setState({
                    movies: response.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    // when a movie is cliked, this function is invoked and updates the state of 'selectedMovie' to that particular movie
    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

    // when a user successfuly logs in, this function updates that 'user' state to that particular user
    onLoggedIn(user) {
        this.setState({
            user
        });
    }

    onRegister(register) {
        this.setState({
            register
        });
    }

    render() {
        const { movies, selectedMovie, user, register } = this.state;

        if(!register) return (
            <Row className="main-view justify-content-md-center">
                <Col md={8}>
                    <RegistrationView onRegister={registered => this.onRegister(registered)} />
                </Col>
            </Row>
        );

        // if there is no user, login-view will be rendered
        if(!user) return (
            <Row className="main-view justify-content-md-center">
                <Col md={8}>
                    <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                </Col>
             </Row>
        );


        //  before movies have been loaded
        if(movies.length === 0) return <div className="main-view" />;

        // if the state of 'selectedMovie' is not null, that selected movie will be returned otherwise, all movies will be returned
        return (
            <Row className="main-view justify-content-md-center">
                {selectedMovie
                    ? (
                        <Col md={8}>
                            <MovieView movie={selectedMovie} onBackClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie); }}/>
                        </Col>
                    ) 
                    : movies.map(movie => (
                        <Col md={3}>
                            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
                        </Col>
                    ))
                }
            </Row>
        );
    }
}