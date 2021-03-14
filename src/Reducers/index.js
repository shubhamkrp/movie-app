import {ADD_MOVIES,ADD_TO_FAVORITES,REMOVE_FROM_FAVORITES,SET_SHOW_FAVORITES} from '../actions';

const initialMovieState={
	list:[],
	favorites:[],
	showFavorites:false
}

export default function movies(state=initialMovieState, action){
	
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
