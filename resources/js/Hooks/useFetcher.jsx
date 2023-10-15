import {useEffect, useState} from "react";
import axiosClient from "../Libs/axios-client.js";
import useLoader from '../Hooks/useLoader'

export default function useFetcher(uri, status = null){
	
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const {startLoading, complete} = useLoader();


	const fetchingData = async (uri) => {
		setLoading(true);
		setError(null);
		setData([]);
		startLoading()

		await axiosClient.get(uri)

		 .then(res => {
		 	setError(null)
		 	setLoading(false);
		 	setData(res.data);
		 	complete()
		 })
		 .catch(err => {
		 	setData(null);
		 	setLoading(false)
		 	setError(err.response ? err.response.status : 500)
		 	complete()
		 })
	}


	useEffect(() => {
		if(uri){
			fetchingData(uri)
		}
	},[uri, status])

	return {data,error,loading};
}