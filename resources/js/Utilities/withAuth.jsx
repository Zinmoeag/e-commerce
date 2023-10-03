import {useEffect} from 'react'
import {useNavigate, useSearchParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import useAuth from "../Hooks/useAuth"

const withAuth = (WrappedComponents) => {

	return (props) => {

		const {authUser, authStatus, getUser} = useAuth({url:null})

		useEffect(() => {
			if(!authStatus){
				getUser();
			}else if(authStatus === 401){
				window.location.href = '/pos'
			}
		},[authStatus])

		if(authStatus === 200){		
			return (
				<WrappedComponents 
					{...props}
					authUser = {authUser}
					authStatus = {authStatus}
				/>
			)
		}

	}
}

export default withAuth;