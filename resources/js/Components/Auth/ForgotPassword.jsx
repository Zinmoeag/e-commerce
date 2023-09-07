import Input from '../../Components/Input';
import {Link} from 'react-router-dom'

const ForgotPassword = ({setIsShow = null}) => {

	return (
			<div 
			className="ForgetPassword w-inherit text-sm w-[20rem] flex flex-col items-center"
			>
				<div className="w-[18rem] text-sm">
					<div className="mb-4 text-sm text-gray-600 text-justify">
			          Forgot your password? No problem. Just let us know your
			          email address and we will email you a password reset link
			          that will allow you to choose a new one.
			        </div>
					<form action="">
						<div className="flex flex-col">
							<Input
								label="Email"
								type="text"
								placeholder="Enter Email"
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
			</div>
	)
}

export default ForgotPassword;