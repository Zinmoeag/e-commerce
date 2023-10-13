import useFetcher from '../Hooks/useFetcher'
import {useSelector} from 'react-redux'

const withCategory = (WrappedComponent) => {
	return (props) => {

		const {categories} = useSelector(state => state.product)

		return <WrappedComponent {...props} data={categories} />

	}
}


export default withCategory;