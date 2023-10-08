import {useEffect, useState} from "react";
import axiosClient from "../Libs/axios-client.js";

export default function useFetcher(uri){
	
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);


	const fetchingData = async (uri) => {
		setLoading(true);
		setError(null);
		setData([]);

		await axiosClient.get(uri)

		 .then(res => {
		 	setError(null)
		 	setLoading(false);
		 	setData(res.data);
		 })
		 .catch(err => {
		 	setData(null);
		 	setLoading(false)
		 	setError(err.response ? err.response.status : 500)

		 	console.log(err)
		 })
	}


	useEffect(() => {
		if(uri){
			fetchingData(uri)
		}
	},[uri])

	return {data,error,loading};
}