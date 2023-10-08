import withAuth from '../../Utilities/withAuth'
import {useState, useEffect} from 'react'
import useOrder from '../../Hooks/useOrder'
import useFetcher from '../../Hooks/useFetcher'
import CartItem from '../../Components/CartItem'
import {useNavigate, useParams} from 'react-router-dom'
import UserInfoForm from './components/UserInfoForm'
import {getBuyingProductApi} from '../../Api/apiUrl'



const BuyOrder = ({authUser, authStatus}) => {

    const navigate = useNavigate()
    const {token} = useParams()
    const {createOrder, getBuyingProduct} = useOrder();

    const url = getBuyingProductApi(token)
    const {data,loading,error} = useFetcher(url);

    const [status, setStatus] = useState(null);
    const [orderId, setOrderId] = useState(null);
    const [returnError, setReturnError] = useState({});

	//handle 201 
	useEffect(() => {
		if(status === 201){
			navigate(`/user/order/confirmation/${orderId}`)
		}
	},[status,orderId])

	//onsubmit
	const onSubmit = (cleanData) => {
		const info = {
			phone : cleanData.phone,
			payment : cleanData.payment,
			address : JSON.stringify({
				city:cleanData.city, 
				country:cleanData.country, 
				address:cleanData.address,
			}),
		}
		createOrder({
			buyProduct : data.buyingProduct,
			info : info,
			setStatus : setStatus,
			setError : setReturnError,
			setOrderId : setOrderId,
		})
	}

	return (
		<section className="py-10 px-6 md:px-20 flex lg:flex-row flex-col">

			<UserInfoForm 
				authUser = {authUser}
				onSubmit = {onSubmit}
				returnError = {returnError}
			/>

			<div className="lg:px-10 md:mt-10 lg:m-none flex-1">
				<div className="bg-white shadow-md md:p-10">
					<h3 className="text-xl font-bold">Ordering Items</h3>
					{Object.keys(data).length > 0 && (
						<CartItem
							name={data.buyingProduct.product.name}
							product_code={data.buyingProduct.product.product_code}
							quantity = {data.buyingProduct.qty}
							totalPrice = {data.buyingProduct.price}
						/>
					)}
				</div>
			</div>

		</section>
	)
}

export default withAuth(BuyOrder);
