import useFetcher from '../Hooks/useFetcher'
import {categoryApi} from '../Api/apiUrl'

const withCategory = (WrappedComponent) => {
	return (props) => {


		const url = categoryApi();
		const {data} = useFetcher(url)



		return <WrappedComponent {...props} data={data} />

	}
}


export default withCategory;