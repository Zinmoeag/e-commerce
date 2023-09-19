import DropDown from '../../../Components/DropDown';
import withCategory from '../../../Utilities/withCategory'
import useFetcher from '../../../Hooks/useFetcher'
import {categoryApi} from '../../../Api/apiUrl'

const CategoryDropDown = () => {

	const url = categoryApi();

	const {data,loading,error} = useFetcher(url)

	const menu = data && data.map(item => ({...item, link : '/pos/products/'+item.slug}))

	const name = 'Category'
	return(
		<>
			<DropDown 
				name={name}
				data={menu}
			/>
		</>
	)
}

export default withCategory(CategoryDropDown);