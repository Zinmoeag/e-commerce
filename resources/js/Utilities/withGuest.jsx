import {useEffect} from 'react'
import {useNavigate, useSearchParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import useAuth from "../Hooks/useAuth"

const withAuth = (WrappedComponents) => {

	return (props) => {

		const navigate = useNavigate()
		const [searchParams] = useSearchParams();
		const {authUser, authStatus, getUser} = useAuth({url:null})
		const next = searchParams.get("next") && searchParams.get("next")	
    	const destination = next ? "/"+ next.split("_").join("/") : null;

    	// console.log(destination)


		useEffect(() => {
			if(!authStatus){
				getUser();
			}else if(authStatus === 200){
				//first need to quit from login page
				navigate(-1)
				if(destination){
					 //if authenticate user has to redirect to destination page
					 window.location.href = destination
				}
			}
		},[authStatus])

		
		return (
			<div>
				{(authStatus === 401 || !authStatus)  && (
					<WrappedComponents 
						{...props}
						authUser = {authUser}
						authStatus = {authStatus}
					/>
				)}
			</div>
		)


	}
}

export default withAuth;