import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {faAngleDown } from '@fortawesome/free-solid-svg-icons';

const DropDown = ({name,data}) => {
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		setToggle(false)
	},[])



	return (
		<>
			<div>
				<button 
					className="bg-white text-blue-500 outline-none w-full py-2 flex justify-between px-4 hover:text-skin-secondary items-center"
					onClick = {() => {setToggle(prev => !prev)}}
				>
					{name}
					<FontAwesomeIcon 
						icon={faAngleDown}
					/>
				</button>

				
				<ul className={`${toggle ? 'h-fit' : "h-[0rem]"} bg-white flex flex-col gap-2 overflow-hidden transition-all duration-500`}>
					{data && data.map(item => (

						<li  className="hover:bg-slate-400 w-full" key={item.id}>
							{item.link && (
								<Link 
									className="w-full bg-slate-400" 
									to={item.link}
								>
									<h3 className="px-4">{item.name}</h3>
									
								</Link>
							)}


							{item.button && (
								<button
									onClick={item.button}
								>
								{item.name}
								</button>
							)}
						</li>

					))}
				</ul>

			</div>
		</>
	)
}


export default DropDown;