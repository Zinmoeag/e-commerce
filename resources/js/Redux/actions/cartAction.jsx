import {
	GET_CART,
	ADD_TO_CART,
	REMOVE_CART_ITEM,
	INCRESEQUANTITY,
	DECREASEQUANTITY,
	RESET_ITEMS
} from '../type'

import {
	showCartApi,
	createCartApi,
	addItemCartApi,
	removeItemCartApi,
	increaseItemApi,
	decreaseItemApi,
	resetCartApi
} from '../../Api/apiUrl'

import axiosClient from '../../Libs/axios-client'



export const getCart = (payload) => {
	return {
		type: GET_CART,
		payload : payload,
	}
}

export const fetchCart = (fetchUrl=null) => {
	return (dispatch) => {
	const url = fetchUrl ? fetchUrl : createCartApi();
		axiosClient.post(url)
			.then(res => dispatch(getCart(res.data)))
			.catch(err =>{
				console.log(err)
				if(err.response.status === 404){
					dispatch(fetchCart())
				}
			})
	}
}


export const addToCart = (payload) =>{
	return {
		type : ADD_TO_CART,
		payload : payload,
	}
}


export const addingToCart = (token, product) => {
	return (dispatch) => {
		const url = addItemCartApi(token)

		const data = {
			product_id : product.id ,
			quantity : product.quantity 
		}

		axiosClient.post(url,data)
			.then(res => dispatch(addToCart(res.data)))
			.catch(err => console.log(err))
	}
}

export const removerCartItem = (payload) => {
	return {
		type : REMOVE_CART_ITEM,
		payload : payload
	}
}


export const removingFromCart = (token,product_id) => {
	return (dispatch) => {
		const url = removeItemCartApi(token)
		const data = {
			product_id : product_id
		}

		axiosClient.post(url, data)
			.then(res => dispatch(removerCartItem(res.data)))
			.catch(err => console.log(err))
	}
}

export const increseQuantity = (payload) => {
	return {
		type : INCRESEQUANTITY,
		payload : payload
	}
}

export const increasingQty = (token, product_id) => {
	return (dispatch) => {
		const url = increaseItemApi(token);
		const data = {
			product_id : product_id,
		}

		axiosClient.post(url, data)
			.then(res => dispatch(increseQuantity(res.data)))
			.catch(err => console.log(err))
	}
}

export const decreaseQuantity = (payload) => {
	return {
		type : DECREASEQUANTITY,
		payload : payload
	}
}


export const decreasingQty = (token, product_id) => {
	return (dispatch) => {
		const url = decreaseItemApi(token)
		const data = {
			product_id : product_id,
		}

		axiosClient.post(url, data)
			.then(res => dispatch(decreaseQuantity(res.data)))
			.catch(err => console.log(err))
	}
}

export const resetItems = (payload) => {
	return {
		type : RESET_ITEMS,
		payload : payload
	}
}

export const resetingCart = (token) => {
	return (dispatch) => {
		const url = resetCartApi(token);

		axiosClient.post(url)
			.then(res => {
				if(res.status === 204){
					dispatch(fetchCart())
				}
			})
			.catch()
	}
}