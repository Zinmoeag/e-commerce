import {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom'


const LinkDropDown = ({innerText,menu}) => {

	const [toggle, setToggle] = useState(false)
	const navigate = useNavigate();

	const dropdownMenu = {
		display : toggle ? "block" : "none"
	}


	return (
		<>
			<div className="relative flex flex-col items-center justify-center md:block">
				<button 
					className="hover:text-skin-secondary text-center"
					onClick={() => setToggle(prev => !prev)}
				>	
					{innerText}
				</button>

				<div 
					className="bg-white dropdown-menu md:absolute relative md:right-0 mt-2"
					style = {dropdownMenu}
				>
					<div className="rounded-md shadow-lg  md:w-[10rem] w-[15rem]">
						<ul className="text-skin-coffee text-center md:text-left">
							{menu.map(item => (
								<li
									key={item.id}
									className="p-2 px-4 hover:text-skin-secondary cursor-pointer">
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