import React from 'react';
import axios from 'axios';

import { LoginView } from '../login-view/login-view'
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

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

    render() {
        const { movies, selectedMovie, user } = this.state;

        // if there is no user, login-view will be rendered
        if(!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;


        //  before movies have been loaded
        if(movies.length === 0) return <div className="main-view" />;

        // if the state of 'selectedMovie' is not null, that selected movie will be returned otherwise, all movies will be returned
        return (
            <div className="main-view">
                {selectedMovie
                    ? <MovieView movie={selectedMovie} onBackClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie); }}/>
                    : movies.map(movie => (
                        <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
                    ))
                }
            </div>
        );
    }
}