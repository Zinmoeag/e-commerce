import {useEffect, useState} from 'react'
import {useNavigate, useSearchParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import useAuth from "../Hooks/useAuth"

const withAuth = (WrappedComponents) => {

	return (props) => {

		const navigate = useNavigate()
		const [searchParams] = useSearchParams();
		const {user,status} = useSelector( state => state.auth)
		const {getUser} = useAuth({url:null})
		const next = searchParams.get("next") && searchParams.get("next")
		const step = searchParams.get("step") ?? 1;		
    	const destination = next ? "/"+ next.split("%_").join("/") : null;

    	const goBacktoPrevPage =() => {

    		navigate(-Math.abs(step));
    	}

		useEffect(() => {
			if(!status){
				getUser();
			}else if(status === 200){
				//first need to quit from login page
					goBacktoPrevPage();
			}

			return () => {
				if(destination && status === 200){
					 //if authenticate user has to redirect to destination page
					navigate(destination)
				}
			}
		},[status])

		
		return (
			<div>
				{(status === 401 || !status)  && (
					<WrappedComponents 
						{...props}
						authUser = {user}
						authStatus = {status}
						step = {step}
					/>
				)}
			</div>
		)


	}
}

export default withAuth;