export default function movies(state=[], action){
	if(action.type===ADD_MOVIES){
		return action.movies;
	}
	return state;
}
const ADD_MOVIES="ADD_MOVIES";