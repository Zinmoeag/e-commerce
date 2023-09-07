import {Link} from "react-router-dom"
import Input from '../../Components/Input'
import { useForm } from "react-hook-form"

const ForgotPassword = () => {

	  const {
	    register,
	    handleSubmit,
	    watch,
	    formState: { errors },
	  } = useForm()

	  const onSubmit = (cleanData) => {
	  		console.log(cleanData)
	  }

	return(
		<div>
			<div 
			className="Register text-sm pt-10 h-[100vh] flex items-center px-10 text-slate-600"
			>

				<div className="w-[30rem] text-sm px-4 py-2">
					<div className="mb-8">
						<h3 className="text-2xl font-bold uppercase mb-4">Forgot Password ?</h3>
						<p className="bg-slate-400 text-white py-1 px-2">We will send you an email to reset your password</p>
					</div>


					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="flex flex-col gap-4">
							<Input
								{...register('email',{
									required : 'This filled Must be filled',
									pattern : {
										value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
										message : "Your Email is not valid format"
									},
								})}
								label="Your Email"
								type="text"
								placeholder="Enter Email"
								error = {errors.email || []}
							/>

							<button
								type="submit"
								className="bg-slate-700 hover:bg-slate-600 px-4 py-2 text-white my-2"
							>
								Submit
							</button>

						</div>
					</form>


					<div className="border-b-2 border-slate-400 mt-5"></div>

					<button>
						<a href="/pos/sign-up" className="hover:text-blue-400">Create New Account?</a>
					</button>
				</div>

			</div>
		</div>
	)
}

export default ForgotPassword;