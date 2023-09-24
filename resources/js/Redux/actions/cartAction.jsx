import {
	ADD_TO_CART,
	REMOVE_CART_ITEM,
	INCRESEQUANTITY,
	DECREASEQUANTITY,
} from '../type'

export const addToCart = (payload) =>{
	return {
		type : ADD_TO_CART,
		payload : payload,
	}
}

export const removerCartItem = (payload) => {
	return {
		type : REMOVE_CART_ITEM,
		payload : payload
	}
}

export const increseQuantity = (payload) => {
	return {
		type : INCRESEQUANTITY,
		payload : payload
	}
}

export const decreaseQuantity = (payload) => {
	return {
		type : DECREASEQUANTITY,
		payload : payload
	}
}