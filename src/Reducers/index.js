import {combinereducers} from 'redux';

import {ADD_MOVIES,ADD_TO_FAVORITES,REMOVE_FROM_FAVORITES,SET_SHOW_FAVORITES} from '../actions';

const initialMovieState={
	list:[],
	favorites:[],
	showFavorites:false
}

export function movies(state=initialMovieState, action){
	
	switch(action.type){
		case ADD_MOVIES:
			return{
				...state,
				list:action.movies
			}
		case ADD_TO_FAVORITES:
		return{
			...state,
			favorites:[action.movie, ...state.favorites]
		}
		case REMOVE_FROM_FAVORITES:
		const filteredArray=state.favorites.filter(
			movie => movie.title !== action.movie.title
			);
		return{
			...state,
			favorites:filteredArray
		}
		case SET_SHOW_FAVORITES:
		return{
			...state,
			showFavorites:action.val
		}
		default:
		return state;
	}
}

const initialSearchState={
	result:{}
};

export function search(state=initialSearchState,action){
	return state;
}

const initialRootState={
	movies:initialMovieState,
	search:initialSearchState
}

/*export default function rootReducer(state=initialRootState,action){
	return{
		movies:movies(state.movies,action),
		search:search(state.search,action)
	}
}*/

export default combinereducers({
	movies: movies, //can use movies only in place of movies: movies, since both have same name
	search: search
});