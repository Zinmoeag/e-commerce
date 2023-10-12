import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import Input from "../../../Components/Input";
import Textarea from '../../../Components/Textarea'
import {useState, useEffect} from 'react'

const UserInfoForm = ({authUser,onSubmit,returnError,previousData=null,autoSetUserInfo=false}) => {
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

    //for using profile address
    const [useCustomerAddress ,setUseCustomerAddress] = useState(autoSetUserInfo)
    const [useCustomerPhone ,setUseCustomerPhone] = useState(autoSetUserInfo)

   	useEffect(() => {

   		if(previousData && !useCustomerAddress){
   			let {city, country, address} = JSON.parse(previousData?.address);
   			setValue('address',address)
			setValue('city',city)
			setValue('country',country)

   		}else if(authUser.address && useCustomerAddress){
			let {city, country, address} = JSON.parse(authUser?.address) ;
			setValue('address',useCustomerAddress ? address : "")
			setValue('city',useCustomerAddress ? city : "")
			setValue('country',useCustomerAddress ? country : "")
		}else{
			setValue('address', "")
			setValue('city', "")
			setValue('country', "")
		}

		if(previousData && !useCustomerPhone){
			setValue('phone', previousData.phone)
		}else if(authUser.phone && useCustomerPhone){
			let phone = authUser.phone;
			setValue('phone', useCustomerPhone ? phone : "")
		}
	},[authUser ,previousData, useCustomerAddress, useCustomerPhone])

	return (
		<div className='md:w-[28rem] w-full my-2 flex-none'>
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
                	Confirm
                </button>
			</form>
		</div>
	)
}

export default UserInfoForm;