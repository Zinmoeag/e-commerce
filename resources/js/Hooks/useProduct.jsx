import {addScoreApi} from '../Api/apiUrl'
import axiosClient from '../Libs/axios-client'


const useProduct = () => {

	const addScore = (data) => {	
		const url = addScoreApi();
		axiosClient.post(url, data)
	}

	return {
		addScore
	}
}

export default useProduct;