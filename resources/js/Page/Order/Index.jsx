import withAuth from '../../Utilities/withAuth'
import {useSelector} from 'react-redux'
import {useState, useEffect} from 'react'
import Input from "../../Components/Input";
import Textarea from '../../Components/Textarea'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import useOrder from '../../Hooks/useOrder'
import CartItem from '../../Components/CartItem'
import {useNavigate} from 'react-router-dom'

const Order = ({authUser, authStatus}) => {

	const {
        register,
        unregister,
        control,
        setValue,
        setError,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate()

    const {cartItems, totalQuality, totalAmount} = useSelector(state => state.cart)
    const {createOrder} = useOrder();

    const [useCustomerAddress ,setUseCustomerAddress] = useState(true)
    const [useCustomerPhone ,setUseCustomerPhone] = useState(true)
    const [status, setStatus] = useState(null);
    const [orderId, setOrderId] = useState(null);
    const [returnError, setReturnError] = useState({});

	useEffect(() => {

		if(authUser.address){
		let {city, country, address} = JSON.parse(authUser.address) ;
			setValue('address',useCustomerAddress ? address : "")
			setValue('city',useCustomerAddress ? city : "")
			setValue('country',useCustomerAddress ? country : "")

		}

		if(authUser.phone){
			let phone = authUser.phone;
			setValue('phone', useCustomerPhone ? phone : "")
		}
	},[authUser , useCustomerAddress, useCustomerPhone])


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
			info : info,
			setStatus : setStatus,
			setError : setReturnError,
			setOrderId : setOrderId,
		})
	}

	return (
		<section className="py-10 px-20 flex lg:flex-row md:flex-col">

			<div className='w-[28rem] my-2 flex-none'>
				<h3 className="text-2xl text-blue-700 font-bold">Making Order</h3>
				<ul className="text-slate-600">
					<h3 className="text-slate-900 text-lg font-bold mb-2">Customer's Information</h3>
					<li>
						<p><FontAwesomeIcon className='text-green-600 pe-4' icon={faUser} /> <span>Customer Name : {authUser.name}</span></p>
					</li>

					{authUser.address && (
						<li>
							<p><FontAwesomeIcon className='text-red-600 pe-4' icon={faLocationDot} /><span>Delievery Address : {Object.values(JSON.parse(authUser.address)).join(", ")} </span></p>
						</li>		
					)}

				</ul>

				<form onSubmit={handleSubmit(onSubmit)}>
					<div>
						<h3 className="text-xl text-slate-800 mt-8 mb-2 font-bold">Contact</h3>
						{authUser.phone && (
							<div>
								<input
									type="checkbox"
									className="me-4"
									id="useCustomerPhone" 
									checked = {useCustomerPhone}
									onChange = {() => setUseCustomerPhone(prev => !prev)}
								/>
								<label htmlFor="useCustomerPhone">Use Phone Number from Your Profile</label>		
							</div>
						)}	
						<Input
							{...register("phone", {
		                        required: "This filled Must be filled",
		                    })}
		                    label="phone"
		                    type="tel"
		                    placeholder="phone"
		                    error={errors.phone ? errors.phone.message : returnError?.phone ? returnError.phone[0] : null}
		                />
					</div>

					<div>
						<h3 className="text-xl text-slate-800 mt-8 mb-2 font-bold">Delivery</h3>
						<div>
							{authUser.address && (
								<div>
									<input
										type="checkbox"
										className="me-4"
										id="useCustomerAddress" 
										checked = {useCustomerAddress}
										onChange = {() => setUseCustomerAddress(prev => !prev)}
									/>
									<label htmlFor="useCustomerAddress">Use Address from Your Profile</label>		
								</div>
							)}				
						</div>

		                <Input
		                    {...register("city", {
		                        required: "This filled Must be filled",
		                    })}
		                    label="City"
		                    type="text"
		                    placeholder="city"
		                    error={errors.city ? errors.city.message : null}
		                />

		                <Input
		                    {...register("country", {
		                        required: "This filled Must be filled",
		                    })}
		                    label="Country/region"
		                    type="text"
		                    placeholder="country"
		                    error={errors.country ? errors.country.message : null}
		                />

		                <Textarea 
		                	{...register('address', {
		                		required : "This filled Must be filled",
		                	})}
		                	label="Address"
		                    type="text"
		                    placeholder="address"
		                    error={errors.address ? errors.address.message : null}
		                />


		                {returnError?.address && <p className="text-red-600">{returnError.address[0]}</p>}

		                {returnError?.products && <p className="text-red-600">{Object.keys(returnError.products).length} invalid  item is presented in your cart</p>}
					</div>

	                <div>
	                	<h3 className="text-xl font-bold mb-4">Payment</h3>
	                	<div>
	                		<input
	                			{...register('payment', {
			                		required : "This filled Must be filled",
	                			})}
	                			className="me-4"
	                			id="COD"
	                			value="Cash On Delivery"
	                			type='radio'
	                			checked
	                		/>
	                		<label htmlFor="payment">Cash On Delivery</label>
	                	</div>
	                </div>

	                <button
	                	type="submit"
	                	className='bg-slate-800 w-full py-1 text-white hover:bg-slate-700 my-4'
	                >
	                	Order Now
	                </button>
				</form>
			</div>

			<div className="lg:px-10 md:mt-10 lg:m-none flex-1">
				<div className="bg-white shadow-md p-10">
					<h3 className="text-xl font-bold">Ordering Items</h3>
					{cartItems.length !== 0 && cartItems.map((cartItem) => (
						<CartItem
							key={cartItem.id}
							name={cartItem.name}
							brand={cartItem.brand}
							product_code={cartItem.product_code}
							quantity = {cartItem.quantity}
							totalPrice = {cartItem.totalPrice}
						/>
					))}
				</div>
			</div>

		</section>
	)
}

export default withAuth(Order);


