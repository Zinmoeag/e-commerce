import DropDown from '../../../Components/DropDown';
import withCategory from '../../../Utilities/withCategory'
import useFetcher from '../../../Hooks/useFetcher'
import {brandApi} from '../../../Api/apiUrl'


const CategoryDropDown = () => {

	const url = brandApi();


	const {data,loading,error} = useFetcher(url)

	const menu = data && data.map(item => ({...item , link: `/pos/products?b=${item.slug}`}))
	
	const name = "Brand"
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