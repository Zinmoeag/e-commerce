import {orderCreateApi, userOrderApi, deleteOrder} from '../Api/apiUrl'
import axiosClient from '../Libs/axios-client'
import {useSelector, useDispatch} from 'react-redux'
import {resetItems} from '../Redux/index'

const useOrder = () => {
	const {cartItems, totalAmount, totalQuantity} = useSelector(state => state.cart)
	const dispatch = useDispatch();


	const getOrder = ({setOrder}) => {
		const url = userOrderApi();

		axiosClient.get(url)
			.then(res => {
				const filteredDupOrderArr = res.data.orders.filter((version,i,arr) => arr.findIndex(version2=>(version2.id===version.id)) === i);
				setOrder(filteredDupOrderArr)
			})
			.catch(err =>{})
	}

	const createOrder = ({info,setStatus,setError, setOrderId}) => {
		const url = orderCreateApi()

		const products = cartItems.map(item => ({
			product_id : item.id,
			quantity : item.quantity,
			price : item.pricePerOneItem,
		}))
		
		const data = {
			...info,
			products : products
		}

		axios.post(url,data)
			.then(res => {
				setStatus(res.status)
				setOrderId(res.data.order_id)
				dispatch(resetItems())
			})
			.catch(err => {
				if(err.response.status === 422){
					//modified returned errors
					let error = {
						...err.response.data.message,
					}

					let arr = Object.keys(error)
					error["products"] = {}
					arr.forEach((err,i) => {
						if(err.includes("products")){
							const errroMsg =  error[err];

							//remove existed error message
							delete error[err]

							let location = err.split('.')
							const parent = location[0]
							const index = location[1]
							const key = products[index].product_id

							error["products"][key] = errroMsg
						}
					})
					setError(error)
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

	return {
		createOrder,
		getOrder,
		cancelOrder
	}
}

export default useOrder;