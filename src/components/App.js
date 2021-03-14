import React from 'react';

import NavBar from './NavBar';
import MovieCard from './MovieCard';
import {addMovies,setShowFavorites} from '../actions';
import { data } from '../movies';

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

isMovieFavorite =(movie) =>{
  const {favorites} =this.props.store.getState();
  const index=favorites.indexOf(movie);
  if(index!==-1) return true;
  return false;
}
onChangeTab=(val) => {
  this.props.store.dispatch(setShowFavorites(val));
}
  render(){
    const {list,favorites,showFavorites}=this.props.store.getState();
    //console.log(this.props.store.getState());
    const displayMovies=showFavorites?favorites:list;
    return (
      <div className="App">
        <NavBar/>
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavorites?'':'active-tabs'}`} onClick={()=>this.onChangeTab(false)}> Movies </div>
            <div className={`tab ${showFavorites?'active-tabs':''}`} onClick={()=>this.onChangeTab(true)}> Favourites </div>
          </div>

          <div>
            {displayMovies.map((movie,key) => {
              return(
              <MovieCard 
              movie={movie} 
              key={movie.id} 
              dispatch={this.props.store.dispatch}
              isFavorite={this.isMovieFavorite(movie)}
              />
              )
            })}
          </div>
          {displayMovies.length===0?<h2>No movies to show</h2>:null}
        </div>
      </div>
    );
  }
}

export default App;
