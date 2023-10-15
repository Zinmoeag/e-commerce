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
import useLoader from '../Hooks/useLoader'

const useOrder = () => {
	const {cartItems, totalAmount, totalQuantity} = useSelector(state => state.cart)
	const dispatch = useDispatch();
	const {resetingBuyCart} = useBuy();
	const {startLoading, complete} = useLoader();

	const getOrder = ({setOrder}) => {
		const url = userOrderApi();
		startLoading()
		axiosClient.get(url)
			.then(res => {
				complete()
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
		startLoading()
		axios.post(url,data)
			.then(res => {
				complete()
				setStatus(res.status)
				setOrderId(res.data.order_id)

				if(res.status === 201 && type === "cart"){
					dispatch(resetingCart(cart_token))
				}else if(res.status === 201 && type === 'buy'){
					resetingBuyCart(cart_token);
				}

			})
			.catch(err => {
				complete()
				if(err.response.status === 422){
					setError(err.response.data.message)
				}
			})
	}

	const editOrderAddress = ({id, info, setError, setStatus}) => {
		const url = editOrderAddressApi(id)
		startLoading()
		axios.post(url,info)
			.then(res => {
				complete()
				setStatus(res.status)
			})
			.catch(err => {
				complete()
				if(err.response.status === 422){
					setError(err.response.data.message)
				}
			})


	}

	const cancelOrder = ({id, setCancelStatus}) => {
		const url = deleteOrder(id)
		startLoading()
		axiosClient.delete(url)
			.then(res => {
				complete()
				setCancelStatus(res.status)
			})
			.catch(err => {
				complete()
				if(err.response.status === 404){
					setCancelStatus(404)
				}
			})
	}

	const createBuyToken = ({productCode, quantity, setStatus, setToken}) => {
		const url = createBuyTokenApi(productCode, quantity);
		startLoading()
		axiosClient.post(url)
			.then(res => {
				complete()
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