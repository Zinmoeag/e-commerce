import {
	FETCH_BRAND,
	FETCH_CATEGORY,
	FETCH_BEST_SELLER,
} from '../type'

export const setBrand = (payload) => {
	return {
		type : FETCH_BRAND,
		payload : payload,
	}
}

export const setCategory = (payload) => {
	return {
		type : FETCH_CATEGORY,
		payload : payload,
	}
}

export const setBestSeller = (payload) => {
		return {
		type : FETCH_BEST_SELLER,
		payload : payload,
	}
}