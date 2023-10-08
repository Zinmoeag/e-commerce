import { ToastContainer, toast } from 'react-toastify';

import {
	GET_CART,
	ADD_TO_CART,
	REMOVE_CART_ITEM,
	INCRESEQUANTITY,
	DECREASEQUANTITY,
	RESET_ITEMS,
} from '../type'


const initialState = {
	cartItems : [],
	token : localStorage.getItem("cart_token") || null,
	totalQuantity : 0,
	totalPrice : 0,
}


const storInLocalStorage = (value) => localStorage.setItem("cart_token", value);


export const cartReducer = (state = initialState, action) => {

	const modifiedItems = [ ...state.cartItems ]

	switch (action.type){

		case GET_CART :	
			const token = action.payload.cart.token
			storInLocalStorage(token)
			return {
				cartItems: action.payload.cartItem,
				token : token,
				totalQuantity : action.payload.cart.total_quantity,
				totalPrice : action.payload.cart.total_price,
			}

		case ADD_TO_CART :
			let cartItems = state.cartItems
			const itemIndex = cartItems.findIndex(item => item.id === action.payload.product.id)
			if(itemIndex >= 0){
				let modifiedCartItems = cartItems.filter(item => item.id !== action.payload.product.id);

				return {
					...state,
					cartItems : [...modifiedCartItems, action.payload.product],
					totalQuantity : action.payload.cart.total_quantity,
					totalPrice : action.payload.cart.total_price,
				}
			}else{
				
				return {
					...state,
					cartItems : [...cartItems, action.payload.product],
					totalQuantity : action.payload.cart.total_quantity,
					totalPrice : action.payload.cart.total_price,
				}
			}
			
		case REMOVE_CART_ITEM :
			//remove selected item
			const filteredItem = modifiedItems.filter(item => item.id !== action.payload.targetProduct.id)
			
			return {
				...state,
				cartItems : filteredItem,
				totalQuantity : action.payload.cart.total_quantity,
				totalPrice : action.payload.cart.total_price,
			}

		case INCRESEQUANTITY :
			let newQty = action.payload.product.pivot.quantity;
			let newPrice = action.payload.product.pivot.total_price;

			let modifiedCartItems	= state.cartItems;
			const productIndex = modifiedCartItems.findIndex(item => item.id === action.payload.product.id)
			let targetCartItems = modifiedCartItems[productIndex];

			targetCartItems.pivot.quantity = newQty;
			targetCartItems.pivot.total_price = newPrice

			return {
				...state,
				cartItems : [...modifiedCartItems],
				totalQuantity : action.payload.cart.total_quantity,
				totalPrice : action.payload.cart.total_price,
			}

		case DECREASEQUANTITY :

			let removedQty = action.payload.product.pivot.quantity;
			let removedPrice = action.payload.product.pivot.total_price;

			let removedCartItems = state.cartItems;
			const removedItemIndex = removedCartItems.findIndex(item => item.id === action.payload.product.id)
			let targetRemoveItem = removedCartItems[removedItemIndex];

			targetRemoveItem.pivot.quantity = removedQty;
			targetRemoveItem.pivot.total_price = removedPrice

			return {
				...state,
				cartItems : [...removedCartItems],
				totalQuantity : action.payload.cart.total_quantity,
				totalPrice : action.payload.cart.total_price,
			}

		default : return state
	}
}