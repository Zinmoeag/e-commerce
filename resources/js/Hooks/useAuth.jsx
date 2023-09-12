import axiosClient from '../Libs/axios-client'
import axios from 'axios'
import {useEffect} from 'react'

// import {setAuthUser, setAuthUserFail, clearAuthUser} from '../redux'
// import {useDispatch, useSelector} from 'react-redux'

const useAuth = ({url=null}) => {

	const csrf = () => axiosClient.get("/sanctum/csrf-cookie");

	const getUser =  () => axiosClient.get('/api/user')



	const signUp = async ({data,setError, setStatus}) => {

		await csrf();

		axiosClient.post(url,data)
			.then(res => {
				setStatus(res.status)
				getUser()
			})
			.catch(err => {
				if(err.response.status === 422){
					setError(err.response.data.message)
				}
			})

	}

	const login = async ({data,setError, setStatus}) => {

		await csrf();

		axiosClient.post(url,data)
			.then(res => {
				setStatus(res.status)
				getUser()
			})
			.catch(err => {
				if(err.response.status === 422){
					setError(err.response.data.message)
				}

				if(err.response.status === 401 ){
					setError(err.response.data)
				}
			})
	}

	const logout = async () => {

	 	await axiosClient.post("/api/logout")
		.then(res => {
			getUser();
		})

	}

	return {
		getUser,
		signUp,
		login,
	}
}

export default useAuth;