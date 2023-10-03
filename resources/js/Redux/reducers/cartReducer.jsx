import { ToastContainer, toast } from 'react-toastify';
import {
	ADD_TO_CART,
	REMOVE_CART_ITEM,
	INCRESEQUANTITY,
	DECREASEQUANTITY,
	RESET_ITEMS
} from '../type'

const initialState = localStorage.getItem('cart') ? JSON.parse( localStorage.getItem('cart')) : {
	cartItems : [],
	totalQuantity : 0,
	totalAmount : 0,
}


const storInLocalStorage = (state) => localStorage.setItem("cart", JSON.stringify(state));


export const cartReducer = (state = initialState, action) => {

	const modifiedItems = [ ...state.cartItems ]

	switch (action.type){
		case ADD_TO_CART :
			
			let totalCartQuantity = modifiedItems.reduce((accumulator, currentValue) => accumulator + currentValue.quantity , action.payload.quantity)
			let totalAmount =  modifiedItems.reduce((accumulator, currentValue) => accumulator + currentValue.totalPrice , action.payload.totalPrice)
			const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)

			//handle if item already exist
			if(itemIndex >= 0){

				// if item is already is exist add quantity
				let newQuantity = modifiedItems[itemIndex].quantity += action.payload.quantity

				modifiedItems[itemIndex] = {
					...modifiedItems[itemIndex],
					quantity : newQuantity,
					totalPrice : newQuantity * modifiedItems[itemIndex].pricePerOneItem,
				}


				toast.success(`${action.payload.name}'s quantity is increased`, {
					position: "bottom-left",
					autoClose: 5000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});

				let modifiedState = {
					...state,
					cartItems : [...modifiedItems],
					totalQuantity : totalCartQuantity,
					totalAmount : totalAmount,
				}

				storInLocalStorage(modifiedState);
				return modifiedState;
			}

			//add new cart item
			modifiedItems.push(action.payload)

			// for nofify user
			toast.success(`${action.payload.name} is added to cart`, {
				position: "bottom-left",
				autoClose: 5000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});

			let modifiedState = {
				...state,
				cartItems : [...modifiedItems],
				totalQuantity : totalCartQuantity,
				totalAmount : totalAmount,

			}

			storInLocalStorage(modifiedState);
			return modifiedState;

		case REMOVE_CART_ITEM :
			//remove selected item
			const filteredItem = modifiedItems.filter(item => item.id !== action.payload.id)

			//return state
			const removedCartState = {
				...state,
				cartItems : filteredItem,
				totalQuantity : filteredItem.reduce((accumulator, currentValue) => accumulator + currentValue.quantity , 0),
				totalAmount : filteredItem.reduce((accumulator, currentValue) => accumulator + currentValue.totalPrice , 0)
			}

			storInLocalStorage(removedCartState)

			return removedCartState;

		case INCRESEQUANTITY :
			const targetItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
			let newQuantity = modifiedItems[targetItemIndex].quantity + 1

			if(targetItemIndex >= 0){
				const modifiedItems = [...state.cartItems];

				modifiedItems[targetItemIndex] = {
					...modifiedItems[targetItemIndex],
					quantity : newQuantity,
					totalPrice : newQuantity * modifiedItems[targetItemIndex].pricePerOneItem,
				}

				const modifiedState = {
					...state,
					cartItems : modifiedItems,
					totalQuantity : state.totalQuantity + 1,
					totalAmount : state.totalAmount + action.payload.pricePerOneItem,
				}

				storInLocalStorage(modifiedState)
				return modifiedState;
			}

		case DECREASEQUANTITY :

			const decreaseItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)

			if(modifiedItems[decreaseItemIndex].quantity > 1){
				//decrease qty if qty is over 0
				let newQuantity = modifiedItems[decreaseItemIndex].quantity - 1

				modifiedItems[decreaseItemIndex] = {
					...modifiedItems[decreaseItemIndex],
					quantity : newQuantity,
					totalPrice : newQuantity * modifiedItems[decreaseItemIndex].pricePerOneItem,
				}


				const decreasedState = {
					...state,
					cartItems : modifiedItems,
					totalQuantity : state.totalQuantity - 1,
					totalAmount : state.totalAmount - action.payload.pricePerOneItem,
				}

				storInLocalStorage(decreasedState)
				return decreasedState;
			}else{
				//remove item if qty is 0 
				const filteredItem = state.cartItems.filter(item => item.id !== action.payload.id)

				const removedCartState = {
					...state,
					cartItems : filteredItem,
					totalQuantity : filteredItem.reduce((accumulator, currentValue) => accumulator + currentValue.quantity , 0),
					totalAmount : filteredItem.reduce((accumulator, currentValue) => accumulator + currentValue.totalPrice , 0),
				}

				storInLocalStorage(removedCartState)
				return removedCartState;

			}

		case 'RESET_ITEMS' : 

			const resetedCart = {
				cartItems : [],
				totalAmount : 0,
				totalQuantity : 0,
			}

			storInLocalStorage(resetedCart);
			return resetedCart;


		default : return state
	}
}