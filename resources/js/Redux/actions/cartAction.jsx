import { toast } from 'react-toastify';
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

import {useNavigate} from 'react-router-dom'

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

const toastConfig = {
	position: "bottom-left",
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "dark",
}



export const addingToCart = (token, product, setStatus) => {

	return (dispatch) => {
		const url = addItemCartApi(token)

		const data = {
			product_id : product.id ,
			quantity : product.quantity 
		}

		toast.promise(
			axiosClient.post(url,data)
				.then(res => {
					setStatus(200)
					return dispatch(addToCart(res.data))
				})
				.catch(err => console.log(err)),
		    {
			    pending: {
		      		render(){
		      			return 'adding To Cart'
		      		},
		      		...toastConfig
			    },
			    success: {
		      		render({data}){
		      			return `${data.payload.product.name} is added To Cart`
		      		}, 
		      		...toastConfig
			    },
			    error: {
			    	render(){
			    		return "Fail to add to Cart"
			    	}
			    },
		    }
		)

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

		toast.promise(
			axiosClient.post(url, data)
				.then(res => dispatch(removerCartItem(res.data)))
				.catch(err => console.log(err.message)),
		{
			pending : {
				render(){
					return 'Removing from cart'
				},
				...toastConfig
			},
			success : {
				render({data}){
					return `${data.payload.targetProduct.name} is removed From Cart`
				},
				...toastConfig
			}
		}

		)
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

		toast.promise(
			axiosClient.post(url)
				.then(res => {
					if(res.status === 204){
						dispatch(fetchCart())
					}
				})
				.catch(),
			{
				pending : {
					render(){
						return 'Reseting Cart'
					},
					...toastConfig
				},
				success : {
					render(){
						return 'Reset Your Cart'
					},
					...toastConfig
				}
			}
		)
	}
}