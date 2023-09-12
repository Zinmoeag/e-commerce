import DropDown from '../../../Components/DropDown';
import withCategory from '../../../Utilities/withCategory'

const CategoryDropDown = ({data}) => {

	console.log(data)

	const name = 'Category'
	return(
		<>
			<DropDown 
				name={name}
				data={data}
			/>
		</>
	)
}

export default withCategory(CategoryDropDown);