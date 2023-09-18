import {useState, useEffect} from 'react'
import Input from '../../Components/Input'
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import {updatePasswordApi} from "../../Api/ApiUrl"
import useAuth from "../../Hooks/useAuth"
import {updateEmailApi} from '../../Api/ApiUrl'
import withAuth from '../../Utilities/withAuth'

const ChangePassword = ({authUser}) => {

	const updateEmailUrl =  updateEmailApi();
	
	const {updateEmail} = useAuth({url:updateEmailUrl})

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

    const onSubmit = (cleanData) => {

    	// console.log(cleanData)

    	updateEmail({
    		data : cleanData,
    		setStatus,
    		setError : setReturnedError,
    	})
    }

	return (
		<>
			<section id="user-change-email">

				<div className="pt-4 lg:px-8 px-2 text-slate-600">
					<div className="lg:w-[28rem] w-[22rem] h-[100vh]">
						<h3 className="text-2xl text-slate-600 uppercase mb-6">Update Your Email</h3>
						<form onSubmit={handleSubmit(onSubmit)}>


							<h3>Do you really want to update your existed Email?</h3>
							<p className="pt-4">Email</p>
							<p className="text-blue-600">{authUser?.email.slice(0,2) +"******" + authUser?.email.slice(-9)}</p>

							 <Input
			                    {...register("new_email", {
			                        required: "This filled Must be filled", 
			                    })}
			                    label="New Email"
			                    type="email"
			                    placeholder="Enter your new email"
			                    error={errors.new_email ? errors.new_email.message : returnedError?.new_email ? returnedError.new_email[0] : null}
			                />

			                {status === 400 && <p className='text-red-600'>{returnedError.error}</p>}

			                {status === 200 && <p className='text-green-600'>Email have been successfully changed</p>}

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

export default withAuth(ChangePassword);