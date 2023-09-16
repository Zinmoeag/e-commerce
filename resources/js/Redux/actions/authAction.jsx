import {
	FETCH_AUTH_USER_SUCCESS,
	FETCH_AUTH_USER_FAIL,
} from '../type'



export const setAuthUserSuccess = (payload) =>{
	return {
		type : FETCH_AUTH_USER_SUCCESS,
		payload: payload,
	}
}

export const setAuthUserFail = (payload) => {
	return {
		type : FETCH_AUTH_USER_FAIL,
		payload : payload,
		
	}
}