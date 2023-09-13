import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser, faBars, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react'
import {Link} from 'react-router-dom'
import LinkDropDown from '../Components/LinkDropDown'
import Input from '../Components/Input';
import AuthContainer from '../Components/AuthContainer';
import IconBtn from '../Components/IconBtn'
import Searcher from '../Components/Searcher'



const dropdownMenu = [
	{id:1, name:"Clothing", link:"/pos/products"},
	{id:2, name:"Shoes", link:"/shoes"},
]



const Nav = ({setIsCartShow}) => {

	const [isMobileSearchBarShow, setIsMobileSearchBarShow] = useState(false);

	const [isNavShow, setIsNavShow] = useState(false)

	return (
		<div className="fixed top-[2rem] left-0 right-0 z-40 text-skin-coffee shadow-lg fixed">
			<div className="bg-white shadow-lg border-b-4 border-skin-coffee/50 backdrop-blur-sm">
				
				<div className="flex justify-between py-3 md:px-10 px-4">
					<div className="flex gap-4">
						<div>
							<button
								className="md:hidden"
								onClick={() => setIsNavShow(true)}
							>
								<FontAwesomeIcon icon={faBars} />
							</button>
						</div>

						<div className="brand text-xl uppercase font-bold text-blue-500 flex items-center cursor-pointer">
							<Link to="/pos">
								<h4>LaraCamp</h4>
							</Link>
						</div>
					</div>



					<div className={`${isMobileSearchBarShow ? "translate-x-0" : "translate-x-[500%]"} md:translate-x-0 lg:w-[40rem] md:w-[28rem] w-[95%] md:relative absolute top-[5rem] md:top-0 transition-all duration-200`}>
						<Searcher 
							setIsShow={setIsMobileSearchBarShow}
						/>
					</div>

					{/*controlls*/}

					<div className="flex gap-8">

	
						<div className='md:hidden'>
							 <IconBtn
								icon={faMagnifyingGlass}
								onClick={() => {setIsMobileSearchBarShow(true)}}

							 />
						</div>


						 <IconBtn
							icon={faCartShopping}
							onClick={() => {setIsCartShow(true)}}
						 />
					</div>

				</div>
			</div>

			{/*nav*/}

			<div
				className={`${isNavShow ? "translate-x-0" : "translate-x-[-100%]"}
									 md:translate-x-0 md:text-white text-slate-600 md:bg-slate-800/70 bg-slate-100 py-1 px-8 
									 md:relative md:h-fit fixed top-0 h-[100vh] w-[80%] md:w-full left-0 transition-all duration-2`}
				>
				<div className="absolute top-4 right-4 md:hidden">
					<button
						type="button"
						className="text-red-600"
						onClick={() => setIsNavShow(false)}
					>
						close
					</button>
				</div>

				<div className="flex items-center justify-center mt-[5rem] md:m-0">
					<nav className="flex flex-col md:flex-row gap-8 justify-center items-center">
						<LinkDropDown 
							innerText={"Our Products"}
							menu={dropdownMenu}
						/>		
						{/*<Link to="#brand" className="hover:text-skin-secondary">Brands</Link>*/}
						<a href="#brand" className="hover:text-skin-secondary">Brands</a>
						<Link to="/contact" className="hover:text-skin-secondary">Contact Us</Link>
						<Link to="/about" className="hover:text-skin-secondary">About Us</Link>
					</nav>
				</div>
			</div>


		</div>
	)

}

export default Nav;