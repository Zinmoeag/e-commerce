import {addScoreApi, brandApi, categoryApi, bestSellerApi} from '../Api/apiUrl'
import axiosClient from '../Libs/axios-client'
import {setBrand, setCategory, setBestSeller} from '../Redux/index'
import {useDispatch} from 'react-redux'


const useProduct = () => {

	const dispatch = useDispatch();

	const fetchBrand = () => {
		const url = brandApi();
		axiosClient.get(url)
			.then(res => {
				dispatch(setBrand(res.data))

			})
	}

	const fetchCategory = () => {
		const url = categoryApi();
		axiosClient.get(url)
			.then(res => {
				dispatch(setCategory(res.data))
			})
	}

	const fetchBestSeller = () => {

		const url = bestSellerApi();

		axiosClient.get(url)
			.then(res => dispatch(setBestSeller(res.data.bestSeller)))
	}

	const addScore = (data) => {	
		const url = addScoreApi();
		axiosClient.post(url, data)
	}

	return {
		addScore,
		fetchBrand,
		fetchCategory,
		fetchBestSeller
	}
}

export default useProduct;