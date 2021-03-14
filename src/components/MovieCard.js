import React from 'react';
import {addFavorites,removeFromFavorites} from '../actions';

class MovieCard extends React.Component {
    handleFavoriteClick=()=>{
        const {movie} =this.props;

        this.props.dispatch(addFavorites(movie));
    }
    handleUnfavoriteClick=()=>{
        const {movie} =this.props;
        this.props.dispatch(removeFromFavorites(movie));
    }
    render(){
        const {movie,isFavorite}=this.props;
        return (
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.poster} />
                </div>
                 
                <div className="right">
                    <div className="title">{movie.title}</div>
                    <div className="plot">{movie.overview}</div>
                    <div className="footer">
                    {isFavorite
                        ?<button className="unfav-btn" onClick={this.handleUnfavoriteClick}>Unfavourite</button>
                        :<button className="fav-btn" onClick={this.handleFavoriteClick}>Add to Favourite</button>
                    }
                    </div>
                </div>
            </div>
          );
    }
}

export default MovieCard;
