import axiosClient from '../Libs/axios-client'
import axios from 'axios'
import {useEffect} from 'react' 
import {setAuthUserSuccess, setAuthUserFail} from '../Redux/index'
import {useSelector, useDispatch} from 'react-redux'
import useLoader from '../Hooks/useLoader'


const useAuth = ({url}) => {

	const {user,status} = useSelector( state => state.auth)
	const {startLoading, complete} = useLoader()

	const dispatch = useDispatch();

	const csrf = () => axiosClient.get("/sanctum/csrf-cookie");

	const getUser = () => {
		startLoading()
		axiosClient.get('/api/user')
		.then(res => {
			complete()
			if(res.status === 200){
				dispatch(setAuthUserSuccess({
					user : res.data,
					status : res.status
				}));
			}
		})
		.catch(err => {
			complete()
			if(err.response.status === 401){
				dispatch(setAuthUserFail({
					status : err.response.status
				}))
			}
		})
	}



	const signUp = async ({data,setError, setStatus}) => {

		await csrf();
		startLoading()

		axiosClient.post(url,data)
			.then(res => {
				complete()
				setStatus(res.status)
				getUser()
			})
			.catch(err => {
				complete()
				if(err.response.status === 422){
					setError(err.response.data.message)
				}
			})

	}

	const login = async ({data,setError, setStatus}) => {

		await csrf();
		startLoading()

		axiosClient.post(url,data)
			.then(res => {
				complete()
				setStatus(res.status)
				getUser()
			})
			.catch(err => {
				complete()
				if(err.response.status === 422){
					setError(err.response.data.message)
				}

				if(err.response.status === 401 ){
					setError(err.response.data)
				}
			})
	}

	const logout = async ({setStatus}) => {
		startLoading()
	 	await axiosClient.post("/api/logout")
		.then(res => {
			complete()
			getUser()
		})
	}

	const updatePassword = async ({data, setStatus, setError}) => {

		await csrf();
		startLoading()
		axiosClient.post(url,data)
			.then(res => {
				complete()
				setStatus(res.status)
			})
			.catch(err => {
				complete()
				if(err.response.status === 422){
					setError(err.response.data.errors)
				}

				if(err.response.status === 400){
					setError(err.response.data)
					setStatus(err.response.status)
				}
			})
	}

	const updateEmail = async ({data, setStatus, setError}) => {

		await csrf();
		startLoading()
		axiosClient.post(url,data)
			.then(res => {
				complete()
				setStatus(res.status)
			})
			.catch(err => {
				complete()
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
		updateEmail,
	}
}

export default useAuth;