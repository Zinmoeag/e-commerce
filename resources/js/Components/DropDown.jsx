import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState} from 'react'
import {Link} from 'react-router-dom'
import {faAngleDown } from '@fortawesome/free-solid-svg-icons';

const DropDown = ({name,data}) => {
	const [toggle, setToggle] = useState(false);

	return (
		<>
			<div>
				<button 
					className="bg-white shadow-lg w-full py-2 flex justify-between px-4 hover:text-skin-secondary items-center"
					onClick = {() => {setToggle(prev => !prev)}}
				>
					{name}
					<FontAwesomeIcon 
						icon={faAngleDown}
					/>
				</button>

				<ul className={`${toggle ? 'h-fit' : "h-[0rem]"} bg-white flex flex-col gap-2 overflow-hidden transition-all duration-500`}>
					{data && data.map(item => (

						<li  className="hover:bg-slate-400 px-6 py-1" key={item.id}>
							<Link className="" to={`/pos/products/${item.slug}`}>{item.name}</Link>
						</li>

					))}
				</ul>
			</div>
		</>
	)
}


export default DropDown;