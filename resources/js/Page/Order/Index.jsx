import withAuth from '../../Utilities/withAuth'
import {useSelector} from 'react-redux'
import {useState, useEffect} from 'react'
import { useForm } from "react-hook-form";
import useOrder from '../../Hooks/useOrder'
import useFetcher from '../../Hooks/useFetcher'
import CartItem from '../../Components/CartItem'
import {useNavigate, useParams} from 'react-router-dom'
import UserInfoForm from './components/UserInfoForm'
import {showCartApi} from '../../Api/apiUrl'
import {useDispatch} from 'react-redux'
import useBuy from '../../Hooks/useBuy'

const Order = ({authUser, authStatus}) => {
    const {cartType} = useParams();
    const type = cartType.split("_")[1];
    const {createOrder} = useOrder();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [status, setStatus] = useState(null);
    const [orderId, setOrderId] = useState(null);
    const [returnError, setReturnError] = useState({});

    const {resetingBuyCart} = useBuy();

	const {token} = useParams();

	console.log(token)
    const url = token ? showCartApi(token) : null;
    const {data, loading, error} = useFetcher(url);


    useEffect(() => {

    	if(!(type === "cart" || type === "buy")){
    		navigate(-1)
    	}

    	if(error === 404){
    		navigate(-1)
    	}
    },[type,error])

    useEffect(() =>{

    	if(status === 201){
			navigate(`/user/order/confirmation/${orderId}`)
		}

    },[token,status,error])


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
			info : info,
			type : type,
			cart_token : token,
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
				{returnError?.cart_token && <p className="text-red-600">{returnError.cart_token[0]}</p>}
				<div className="bg-white shadow-md md:p-10">
					<h3 className="text-xl font-bold">Ordering Items</h3>
					{data?.cartItem?.length !== 0 && data?.cartItem?.map((cartItem) => (
						<CartItem
							key={cartItem.id}
							name={cartItem.name}
							brand={cartItem.brand}
							product_code={cartItem.product_code}
							quantity = {cartItem.pivot?.quantity}
							totalPrice = {cartItem.pivot?.total_price}
						/>
					))}
				</div>
			</div>

		</section>
	)
}

export default withAuth(Order);




