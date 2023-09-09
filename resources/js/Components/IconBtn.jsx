import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser, faBars, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

const IconBtn = ({onClick, icon}) => {
	return (
		<button 
			type="button"
			className="hover:text-indigo-400"
			onClick={() => onClick()}
		>
			<FontAwesomeIcon icon={icon} />
		</button>
	)
}

export default IconBtn;