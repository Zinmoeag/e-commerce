import { useMemo } from 'react'
import { useParams,useSearchParams, useLocation, useNavigate} from 'react-router-dom'

const useProductQuery = (WrappedComponent) => {

		const location = useLocation()
		const navigate = useNavigate();
		const [searchParams, setSearchParams] = useSearchParams();

		const search = searchParams.get("q") || "";
		const brand = searchParams.get('b') || "all";
		const category = searchParams.get('c') || "all";
		const page = searchParams.get('p') || "1";

		const url = useMemo(() => {

			let params = {
				search : search,
				brand : brand,
				category : category,
				page : page
			}

			let query = new URLSearchParams(params)

			return `/api/products/?${query}`

		},[searchParams])


		const setQuery = (newQuery) => {
			
			//redirect it user is not on product page
			if(location.pathname !== '/pos/products'){
				navigate("/pos/products")
			}

			setSearchParams((prevSearchParams) => {
				let prevQuery = Object.fromEntries([...prevSearchParams])
				return {...prevQuery, ...newQuery}

			});
		}

		return ({

			search,
			category,
			brand,
			url,
			setQuery,
		})


}

export default useProductQuery;


