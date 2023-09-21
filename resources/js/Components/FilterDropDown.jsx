import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown } from '@fortawesome/free-solid-svg-icons';
import {useState, useEffect} from 'react'

const FilterDropDown = ({display,menu}) => {

	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		setToggle(false)
	},[])


	return (
		<>
			<div className="relative text-slate-600 text-sm">
				<button
					type="button"
					className = "bg-white text-slate-800 border-[0.1rem] border-slate-600 px-2 flex gap-4 items-center hover:bg-slate-700 hover:text-white"
					onClick = {() => setToggle(prev => !prev)}
				>
					<div>
						{display}
					</div>
					<FontAwesomeIcon 
						icon={faAngleDown}
					/>
				</button>


				<ul className={`${toggle ? 'h-fit' : "h-[0rem]"} bg-white/80 backdrop-blur-sm flex flex-col gap-2 overflow-hidden transition-all duration-500 w-[10rem] absolute right-0 z-20 shadow-lg`}>
					
					{menu.map((item) => 
						(
							<li  className="w-full hover:bg-slate-300 px-2" key={item.id}>
								<button
									onClick={() => {
										setToggle(prev => !prev);
										item.button();
									}}
								>
									{item.name}
								</button>
							</li>
						)
					)}
				</ul>
			</div>
		</>
	)
}

export default FilterDropDown;