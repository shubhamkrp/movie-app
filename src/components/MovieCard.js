import React from 'react';
class MovieCard extends React.Component {
    render(){
        const {movie}=this.props;
        return (
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.poster} />
                </div>
                 
                <div className="right">
                    <div className="title">{movie.title}</div>
                    <div className="plot">{movie.overview}</div>
                    <div className="footer">
                        <div>{movie.release_date}</div>
                        <button className="fav-btn">Add to Favourite</button>
                    </div>
                </div>
            </div>
          );

    }
  
}

export default MovieCard;
