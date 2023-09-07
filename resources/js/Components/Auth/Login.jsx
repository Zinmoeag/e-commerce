import Input from '../../Components/Input';
import {Link} from 'react-router-dom'

const Login = ({setIsShow = null}) => {

	return (
			<div 
			className="login"
			>
				<h3 className="text-xl font-bold uppercase text-center">Login</h3>

				<div className="w-[18rem] text-sm">
					<form action="">
						<div className="flex flex-col">
							<Input
								label="Email"
								type="text"
								placeholder="Enter Email"
							/>


							<Input
								label="password"
								type="text"
								placeholder="password"
							/>

							<button
								type="button"
								className="text-red-500 w-fit"
							>
								<a href="/pos/forgot-password">
									Forgot Password?
								</a>
							</button>

							<button
								type="submit"
								className="bg-blue-600 hover:bg-blue-800 px-4 py-1 text-white w-fit my-2"
							>
								Submit
							</button>
							</div>
						</form>

						<div className="border-b-2 border-slate-400 mt-4"></div>

						<button
							type="button"
						>
							<a href="/pos/forgot-password">
								Register 
							</a>
						</button>
				</div>
			</div>
	)
}

export default Login;