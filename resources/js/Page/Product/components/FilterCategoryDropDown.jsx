import FilterDropDown from '../../../Components/FilterDropDown';
import withCategory from '../../../Utilities/withCategory'
import useFetcher from '../../../Hooks/useFetcher'
import {categoryApi} from '../../../Api/apiUrl'
import useProductQuery from '../../../Hooks/useProductQuery'
import {capitalizeFirstLetter} from '../../../Utilities/Str'


const CategoryDropDown = ({data}) => {

	const {category,setQuery} = useProductQuery();
	const url = categoryApi();

	const modifiedArr = data && data.map(item => ({...item , button : () => setQuery({c : item.slug, p : 1}) }))
	const name = category === 'all' ? capitalizeFirstLetter("category") : capitalizeFirstLetter(category)

	const menu = [
		{id:0,slug:'all',name:"All",button : () => setQuery({c : "all", p : 1})},
		...modifiedArr,
	]

	return(
		<>
			<FilterDropDown
				display={name}
				menu ={menu}
			/>
		</>
	)
}

export default withCategory(CategoryDropDown);