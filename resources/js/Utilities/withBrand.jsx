import useFetcher from '../Hooks/useFetcher'
import {useSelector} from 'react-redux'

const withBrand = (WrappedComponent) => {
	return (props) => {

		const {brands} = useSelector(state => state.product)

		return <WrappedComponent {...props} data={brands} />

	}
}


export default withBrand;