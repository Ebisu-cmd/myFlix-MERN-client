import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

export class MovieView extends React.Component {
    render() {
        const { movie, onBackClick } = this.props;

        return (
            <div className="movie-view">
                <div className="movie-poster">
                    <img src="http://placehold.jp/286x180.png" />
                </div>
                <div className="movie-title">
                    {movie.Title}
                </div>
                <div className="movie-description">
                    {movie.Description}
                </div><br />
                <Button variant="primary" onClick={() => { onBackClick(null); }}>Back</Button>
            </div>
        );
    }
}

MovieView.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        ImageUrl: PropTypes.string.isRequired
    }).isRequired,
    onBackClick: PropTypes.func.isRequired
};