import react from 'react';
import { data } from '../movies';
import NavBar from './NavBar';
import MovieCard from './MovieCard';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="main">
        <div className="tabs">
          <div className="tab"> Movies </div>
          <div className="tab"> Favourites </div>
        </div>

        <div>
          {data.map((movie,key) => {
            return(
            <MovieCard movie={movie} key={movie.id}/>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
