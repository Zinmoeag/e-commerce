import Input from '../../Components/Input';
import {useEffect} from 'react';
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form"
import useAuth from '../../Hooks/useAuth'

const Register = () => {

	  const {
	    register,
	    handleSubmit,
	    watch,
	    formState: { errors },
	  } = useForm()

	  const {getUser} = useAuth({
	  	url:null
	  });

	  const onSubmit = (cleanData) => {
	  		console.log(cleanData)
	  }


	  console.log(errors)



	return (
			<div 
			className="Register text-sm"
			>
				<h3 className="text-xl font-bold uppercase text-center">Register</h3>

				<div className="w-[18rem] text-sm">

					<form onSubmit={handleSubmit(onSubmit)}>

						<div className="flex flex-col">
							<Input
								{...register('email')}
								name="email"
								label="Email"
								type="text"
								placeholder="Enter Email"
								error={errors.email ? errors.email : error.email || {}}
							/>


							<Input
								label="password"
								type="text"
								placeholder="password"
							/>

							<Input
								label="Confirm password"
								type="text"
								placeholder="Confirm password"
							/>

							<button
								type="submit"
								className="bg-blue-600 hover:bg-blue-800 px-4 py-1 text-white w-fit my-2"
							>
								Submit
							</button>
						</div>
					</form>
				</div>

				<div className="border-b-2 border-slate-400 mt-4"></div>

				<button
					type="button"
					onClick = {() => setIsShow("login")}
				>
					Login
				</button>
			</div>
	)
}

export default Register;