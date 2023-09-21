import { useMemo } from 'react'
import { useParams,useSearchParams, useLocation} from 'react-router-dom'

const withProductQuery = (WrappedComponent) => {
	return (props) => {

		const {type} = useParams();

		const location = useLocation()

		const [searchParams, setSearchParams] = useSearchParams();

		const search = searchParams.get("q") || "all";
		const brand = searchParams.get('b') || "all";
		const category = searchParams.get('c') || "all";
		const page = searchParams.get('p') || "1";

		const url = useMemo(() => {
			let params = {
				search : 	search,
				brand : brand,
				category : category,
				page : page
			}

			let query = new URLSearchParams(params)

			return `/products/${type}?${query}`

		},[type, searchParams])


		console.log(url)



		return (
			<WrappedComponent
				{...props}
				type ={type}
			/>
		)
	}

}

export default withProductQuery;


