import {
	FETCH_BRAND,
	FETCH_CATEGORY,
	FETCH_BEST_SELLER
} from '../type'

const initialState = {
	brands : [],
	categories : [],
	best_seller : [],
}

export const productReducer = (state = initialState, action) => {

	switch(action.type){
		case FETCH_BRAND :
			return {
				...state,
				brands : action.payload	
			}
		case FETCH_CATEGORY :
			return {
				...state,
				categories : action.payload
			}
		case FETCH_BEST_SELLER :
			return {
				...state,
				best_seller : action.payload
			}	
		default : return state
	}
}