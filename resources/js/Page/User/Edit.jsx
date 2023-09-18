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
			setValue('username', authUser?.name)
			setValue('phone',authUser?.phone)
			setValue('address',authUser?.address)
		}
	},[authStatus,setValue])


    const {updateUserInfo} = useUserProfile();
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);
    const [returnedError, setReturnedError] = useState({})

    const navigate = useNavigate()

    const onSubmit = (cleanData) => {
    	updateUserInfo({
    		data:cleanData,
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
			<section id="user-edit">

				<div className="pt-4 md:px-8 px-4 text-slate-600">
					<div className="md:w-[28rem] w-[22rem] h-[100vh]">
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

                            <Textarea
                           		{...register('address', {
                           			required : "This field shouldn't be empty"
                           		})}
                            	label="Enter Your Address"
                            	placeholder="Address"
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