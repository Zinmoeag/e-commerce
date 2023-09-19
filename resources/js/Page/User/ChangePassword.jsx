import {useState, useEffect} from 'react'
import Input from '../../Components/Input'
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import {updatePasswordApi} from "../../Api/ApiUrl"
import useAuth from "../../Hooks/useAuth"
import withAuth from "../../Utilities/withAuth"

const ChangePassword = ({authUser, authStatus}) => {

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

    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);
    const [returnedError, setReturnedError] = useState({})

    const url = updatePasswordApi();

    const {updatePassword} = useAuth({url:url})

    const onSubmit = (cleanData) => {
    	updatePassword({
    		data : cleanData,
    		setStatus,
    		setError : setReturnedError,
    	})
    }

	return (
		<>
			<section id="user-change-password">

				<div className="pt-4 lg:px-8 px-2 text-slate-600">
					<div className="lg:w-[28rem] w-[22rem] h-[100vh]">
						<h3 className="text-2xl text-slate-600 uppercase mb-6">Update Your Password</h3>
						<form onSubmit={handleSubmit(onSubmit)}>


							<Input
			                    {...register("old_password", {
			                        required: "This filled Must be filled", 
			                    })}
			                    label="Old Password"
			                    type="password"
			                    placeholder="**********"
			                    error={errors.old_password ? errors.old_password.message : returnedError ? returnedError.old_password : null}
			                />

							 <Input
			                    {...register("new_password", {
			                        required: "This filled Must be filled", 
			                    })}
			                    label="New Password"
			                    type="password"
			                    placeholder="**********"
			                    error={errors.new_password ? errors.new_password.message : returnedError?.new_password ? returnedError.new_password[0] : null}
			                />


							 <Input
			                    {...register("new_password_confirmation", {
			                        required: "This filled Must be filled", 
			                    })}
			                    label="Confirm Password"
			                    type="password"
			                    placeholder="**********"
			                    error={errors.new_password_confirmation ? errors.new_password_confirmation.message : returnedError ? returnedError.new_password_confirmation : null}
			                />

			                {status === 400 && <p className='text-red-600'>{returnedError.error}</p>}

			                {status === 200 && <p className='text-green-600'>Password have been successfully changed</p>}

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

export default ChangePassword;