import React from 'react';

import { data } from '../movies';
import NavBar from './NavBar';
import MovieCard from './MovieCard';
import {addMovies} from '../actions';

class App extends React.Component {

  componentDidMount(){
    const {store} = this.props;

    store.subscribe(()=>{
      console.log('UPDATED');
      this.forceUpdate();
    });
    //dispatch action
    store.dispatch(addMovies(data));
  }
  render(){
    const {list}=this.props.store.getState();
    return (
      <div className="App">
        <NavBar/>
        <div className="main">
          <div className="tabs">
            <div className="tab"> Movies </div>
            <div className="tab"> Favourites </div>
          </div>

          <div>
            {list.map((movie,key) => {
              return(
              <MovieCard movie={movie} key={movie.id}/>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
