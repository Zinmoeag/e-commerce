import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconBtn = ({onClick, icon}) => {

	return (
		<>
		<div>
			<FontAwesomeIcon 
				icon={icon} 
				onClick={onClick}
				className="hover:text-skin-secondary cursor-pointer"
			/>
		</div>
		</>
	)
}

export default IconBtn;