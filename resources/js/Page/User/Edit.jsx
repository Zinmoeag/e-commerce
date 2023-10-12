import Input from '../../Components/Input'
import Textarea from '../../Components/Textarea'
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react'
import DropZone from './Components/DropZone'
import useUserProfile from '../../Hooks/useUserProfile'
import {useSelector, useDispatch} from 'react-redux'
import useAuth from '../../Hooks/useAuth'
import withAuth from '../../Utilities/withAuth'


const Edit = ({authUser, authStatus}) => {

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


	// console.log(authUser)

	useEffect(() => {


		if(authStatus === 200){
			let {city, country, address} = authUser?.address ? JSON.parse(authUser?.address) : {};
			setValue('username', authUser?.name)
			setValue('phone',authUser?.phone)
			setValue('address',address || "")
			setValue('city',city || "")
			setValue('country',country || "")
		}
	},[authStatus,setValue])


    const {updateUserInfo} = useUserProfile();
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);
    const [returnedError, setReturnedError] = useState({})

    const navigate = useNavigate()

    const onSubmit = (cleanData) => {

    	const data = {
    		photo : cleanData.photo,
    		username : cleanData.username,
    		phone : cleanData.phone,
    		address : JSON.stringify({city:cleanData.city, country:cleanData.country, address:cleanData.address})
    	}

    	updateUserInfo({
    		data:data,
    		setError:setReturnedError,
    		setStatus,
    		setLoading
    	})
    }


    if(authStatus === 401){
		navigate('/pos')
	}


    if(status === 200) {
    	navigate(0)
    }


 
	return (
		<>
			<section id="user-edit" className="h-fit">

				<div className="pt-4 md:px-8 px-4 text-slate-600">
					<div className="md:w-[28rem] w-[22rem]">
						<h3 className="text-2xl text-slate-600 uppercase mb-6">Update Your Information</h3>
						<form onSubmit={handleSubmit(onSubmit)}>

							<DropZone
								preValue ={authUser?.photo}
								name = "photo"
								formHook = {{
									register,unregister,watch,setValue,setError
								}}

							/>

							 <Input
			                    {...register("username", {
			                        required: "This filled Must be filled", 
			                    })}
			                    label="Your name"
			                    type="text"
			                    placeholder="Update Your Display Name"
			                    error={errors.username ? errors.username.message : returnedError ? returnedError.username : null}
			                />

			                <Input
			                    {...register("phone", {
			                        required: "This filled Must be filled",
			                    })}
			                    label="Let us Know Your Phone Number to contact"
			                    type="tel"
			                    placeholder="Phone"
			                    error={errors.phone ? errors.phone.message : returnedError ? returnedError.phone : null}
			                />


			                <h3 className="text-xl text-slate-800 mt-8 mb-2">Address</h3>


			                <Input
			                    {...register("city", {
			                        required: "This filled Must be filled",
			                    })}
			                    label="City"
			                    type="text"
			                    placeholder="city"
			                    error={errors.city ? errors.city.message : returnedError ? returnedError.city : null}
			                />

			                <Input
			                    {...register("country", {
			                        required: "This filled Must be filled",
			                    })}
			                    label="Country/region"
			                    type="text"
			                    placeholder="country"
			                    error={errors.country ? errors.country.message : returnedError ? returnedError.country : null}
			                />

			                <Textarea 
			                	{...register('address', {
			                		required : "This filled Must be filled",
			                	})}
			                	label="address"
			                    type="text"
			                    placeholder="address"
			                    error={errors.address ? errors.address.message : returnedError ? returnedError.address : null}
			                />

			                <button
			                	className="bg-white hover:bg-slate-400  border-2 border-slate-400 text-center w-full text-slate-800 mt-6 py-1 rounded-lg"
			                	type="submit"
			                >
			                	Update
			                </button>	
						</form>
					</div>
				</div>

			</section>
		</>
	)
}

export default withAuth(Edit);