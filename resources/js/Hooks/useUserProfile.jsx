import {userInfoUpdateApi} from '../Api/apiUrl'
import axiosClient from '../Libs/axios-client'

const useUserProfile = () => {

	const updateUserInfo = async ({data,setError, setStatus, setLoading}) => {

		const url = userInfoUpdateApi();
		setLoading(true);
	
		axiosClient.post(url,data,{
			headers : {
				'Content-Type': 'multipart/form-data'
			}
		})
		.then(res => {
			setLoading(false)
			setError({})
			setStatus(200)

		}).catch(err => {
			setLoading(false)
			setStatus(null)
			if(err.response.status === 422){
				setError(err.response.data.message)
			}
			// handle if unauthorized 401
		})
	}
	
	return {
		updateUserInfo,
	}

}


export default useUserProfile;