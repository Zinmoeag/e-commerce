import {useNavigate} from 'react-router-dom'

import {
	showCartApi,
	createCartApi,
	addItemCartApi,
	removeItemCartApi,
	increaseItemApi,
	decreaseItemApi,
	resetCartApi
} from '../Api/apiUrl'

import axiosClient from '../Libs/axios-client'

const useBuy = () => {

	const navigate = useNavigate();

	const fetchBuyCart = (buyData) => {

		const url = createCartApi();
		axiosClient.post(url,buyData)
			.then(res => {
				if(res.status === 200){
					navigate(`/user/order/ct_buy/${res.data.cart.token}`)
				}		
			})
	}

	const resetingBuyCart = (token) => {

		const url = resetCartApi(token);
		axiosClient.post(url)
			.then()
		
	}


	return {
		fetchBuyCart,
		resetingBuyCart
	}
}


export default useBuy;