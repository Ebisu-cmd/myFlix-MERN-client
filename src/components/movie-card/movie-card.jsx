import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card'

export class MovieCard extends React.Component {
    render() {
        const { movie, onMovieClick } = this.props;

        return (
            <Card className="movie-card" onClick={() => { onMovieClick(movie);}}>
                <Card.Img variant="top" src="http://placehold.jp/286x180.png" />
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                </Card.Body>
            </Card>
        )
    }
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        ImageUrl: PropTypes.string.isRequired,
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};