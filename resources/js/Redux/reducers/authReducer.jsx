import {
	FETCH_AUTH_USER_SUCCESS,
	FETCH_AUTH_USER_FAIL,
} from '../type'

const initialState = {
	user : null,
	status : null,
}


export const authReducer = (state = initialState, action) => {
	switch(action.type){

		case FETCH_AUTH_USER_SUCCESS :
			return {
				user: action.payload.user,
				status: action.payload.status,
			}

		case FETCH_AUTH_USER_FAIL : 
			return {
				user : null,
				status : action.payload.status
			}

		default : return state
	}
}