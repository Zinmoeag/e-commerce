import useFetcher from '../Hooks/useFetcher'
import {brandApi} from '../Api/apiUrl'

const withBrand = (WrappedComponent) => {
	return (props) => {


		const url = brandApi();
		const {data} = useFetcher(url)

		return <WrappedComponent {...props} data={data} />

	}
}


export default withBrand;