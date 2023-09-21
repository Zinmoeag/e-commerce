import FilterDropDown from '../../../Components/FilterDropDown';
import withBrand from '../../../Utilities/withBrand'
import useProductQuery from '../../../Hooks/useProductQuery'
import {capitalizeFirstLetter} from '../../../Utilities/Str'


const ProductFilterDropDown = ({data}) => {

	const {brand,setQuery} = useProductQuery();
	const modifiedArr = data && data.map(item => ({...item , button : () => setQuery({b : item.slug, p : 1}) }))
	const name = brand === 'all' ? capitalizeFirstLetter("brand") : capitalizeFirstLetter(brand)

	const menu = [
		{id:0,slug:'all',name:"All",button : () => setQuery({b : "all", p : 1})},
		...modifiedArr,
	]

	return(
		<>
			<FilterDropDown
				display={name}
				menu={menu}
			/>
		</>
	)
}

export default withBrand(ProductFilterDropDown);