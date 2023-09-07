import Login from './Login'
import Register from './Register'
import ForgotPassword from './ForgotPassword'

const AuthSlide = ({show,setIsShow}) => {
	if(show && show === 'login'){
		return(
			<Login 
				setIsShow={setIsShow}
			/>
		)
	}
	if(show && show === 'register'){
		return(
			<Register 
				setIsShow={setIsShow}
			/>
		)
	}
	if(show && show === 'forgot-password'){
		return(
			<ForgotPassword 
				setIsShow={setIsShow}
			/>
		)
	}
}

export default AuthSlide;