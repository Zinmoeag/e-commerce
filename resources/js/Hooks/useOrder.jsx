import {
	orderCreateApi, 
	userOrderApi, 
	deleteOrder, 
	createBuyTokenApi, 
	getBuyingProductApi,
	editOrderAddressApi
} from '../Api/apiUrl'
import axiosClient from '../Libs/axios-client'
import {useSelector, useDispatch} from 'react-redux'
import {resetingCart} from '../Redux/index'
import useBuy from '../Hooks/useBuy'

const useOrder = () => {
	const {cartItems, totalAmount, totalQuantity} = useSelector(state => state.cart)
	const dispatch = useDispatch();
	const {resetingBuyCart} = useBuy();

	const getOrder = ({setOrder}) => {
		const url = userOrderApi();

		axiosClient.get(url)
			.then(res => {
				const filteredDupOrderArr = res.data.orders.filter((version,i,arr) => arr.findIndex(version2=>(version2.id===version.id)) === i);
				setOrder(filteredDupOrderArr)
			})
	}

	const createOrder = ({ info, type, cart_token, setStatus,setError, setOrderId}) => {
		const url = orderCreateApi()

		const data = {
			...info,
			cart_token : cart_token,
		}

		axios.post(url,data)
			.then(res => {
				setStatus(res.status)
				setOrderId(res.data.order_id)

				if(res.status === 201 && type === "cart"){
					dispatch(resetingCart(cart_token))
				}else if(res.status === 201 && type === 'buy'){
					resetingBuyCart(cart_token);
				}

			})
			.catch(err => {
				console.log(err)
				if(err.response.status === 422){
					setError(err.response.data.message)
				}
			})
	}

	const editOrderAddress = ({id, info, setError, setStatus}) => {
		const url = editOrderAddressApi(id)

		axios.post(url,info)
			.then(res => {
				setStatus(res.status)
			})
			.catch(err => {
				if(err.response.status === 422){
					setError(err.response.data.message)
				}
			})


	}

	const cancelOrder = ({id, setCancelStatus}) => {
		const url = deleteOrder(id)

		axiosClient.delete(url)
			.then(res => {
				setCancelStatus(res.status)
			})
			.catch(err => {
				if(err.response.status === 404){
					setCancelStatus(404)
				}
			})
	}

	const createBuyToken = ({productCode, quantity, setStatus, setToken}) => {
		const url = createBuyTokenApi(productCode, quantity);

		axiosClient.post(url)
			.then(res => {
				setStatus(200)
				setToken(res.data.token)
			})
	}

 
	return {
		createOrder,
		getOrder,
		editOrderAddress,
		cancelOrder,
		createBuyToken,
	}
}

export default useOrder;