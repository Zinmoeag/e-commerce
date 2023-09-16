import axiosClient from '../Libs/axios-client'
import axios from 'axios'
import {useEffect} from 'react' 
import {setAuthUserSuccess, setAuthUserFail} from '../redux'
import {useSelector, useDispatch} from 'react-redux'


const useAuth = ({url}) => {

	const {user,status} = useSelector( state => state.auth)

	const dispatch = useDispatch();

	const csrf = () => axiosClient.get("/sanctum/csrf-cookie");

	const getUser = () => {
		axiosClient.get('/api/user')
		.then(res => {
			if(res.status === 200){
				dispatch(setAuthUserSuccess({
					user : res.data,
					status : res.status
				}));
			}
		})
		.catch(err => {
			if(err.response.status === 401){
				dispatch(setAuthUserFail({
					status : err.response.status
				}))
			}
		})
	}



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

	const logout = async ({setStatus}) => {

	 	await axiosClient.post("/api/logout")
		.then(res => getUser())
	}

	const updatePassword = async ({data, setStatus, setError}) => {

		// console.log(url, data)

		await csrf();
		axiosClient.post(url,data)
			.then(res => {
				setStatus(res.status)
			})
			.catch(err => {
				if(err.response.status === 422){
					setError(err.response.data.errors)
				}

				if(err.response.status === 400){
					setError(err.response.data)
					setStatus(err.response.status)
				}
			})
	}

	return {
		authUser : user,
		authStatus : status,
		getUser,
		signUp,
		login,
		logout,
		updatePassword,
	}
}

export default useAuth;