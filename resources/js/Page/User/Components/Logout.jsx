import useAuth from '../../../Hooks/useAuth'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'


const Logout = () => {

	const {logout} = useAuth({url:null})
	const [status, setStatus] = useState(null);
	const navigate = useNavigate();


	useEffect(() => {
		if(status === 204){
			navigate(0)
		}	
	},[status])

	const handleLogout = () => {
		logout({
			setStatus
		});
	}

	return (
		<button 
			className="bg-red-600 text-white w-full mt-5 hover:bg-red-400 py-1"
			onClick={handleLogout}
		>
			Log out
		</button>
	)

}

export default Logout;