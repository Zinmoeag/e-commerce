import {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom'


const LinkDropDown = ({onClick, innerText,menu}) => {

	const [toggle, setToggle] = useState(false)
	const navigate = useNavigate();

	const dropdownMenu = {
		display : toggle ? "block" : "none"
	}

	const handleMouseIN = () => {
		if(!window.matchMedia("(pointer: coarse)").matches) {
			setToggle(true)
		}
	}

	const handleMouseOff = () => {
		if(!window.matchMedia("(pointer: coarse)").matches) {
			setToggle(false)
		}
	}

	const togglerHandler = () => {
		setToggle(!toggle)
	}

	return (
		<>
			<div 
				className="relative flex flex-col items-center justify-center md:block"
				onMouseOver={handleMouseIN}
				onMouseLeave={handleMouseOff}
				onClick={togglerHandler}
			>
				<button 
					className="hover:text-skin-secondary text-center h-full"
				>{innerText}
				</button>

				<div 
					className="bg-white dropdown-menu md:absolute relative md:right-0"
					style = {dropdownMenu}
				>
					<div className="rounded-md shadow-lg  md:w-[10rem] w-[15rem]">
						<ul className="text-skin-coffee text-center md:text-left">
							{menu.map(item => (
								<li
									key={item.id}
									className="p-1 px-4 hover:text-skin-secondary cursor-pointer"
									onClick = {() => {
										setToggle(false)
										onClick()
									}}
									>
									<Link to={item.link}>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

			</div>
		</>
	)

}

export default LinkDropDown;