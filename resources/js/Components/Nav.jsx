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
	{id:1, name:"Clothing", link:"/clothing"},
	{id:2, name:"Shoes", link:"/shoes"},
]



const Nav = () => {

	const [isShowAuthContainer, setIsShowAuthContainer] = useState(null);

	const [isMobileSearchBarShow, setIsMobileSearchBarShow] = useState(false);

	const loginSlide = {
		transform : isShowAuthContainer ? "translateX(0)" : "translateX(100%)",
		transition : "transform 200ms",
	}

	const [isNavShow, setIsNavShow] = useState(false)

	return (
		<div className="fixed top-0 left-0 right-0 z-40 text-skin-coffee shadow-lg fixed">
			<div className="bg-white shadow-lg border-b-4 border-skin-coffee/50 backdrop-blur-sm">
				
				<div className="flex justify-between py-5 md:px-10 px-4">
					<div className="flex gap-4">
						<div>
							<button
								className="md:hidden"
								onClick={() => setIsNavShow(true)}
							>
								<FontAwesomeIcon icon={faBars} />
							</button>
						</div>

						<div className="brand text-xl uppercase font-bold text-blue-500 flex items-center">
							<Link to="/">
								<h4>LaraCamp</h4>
							</Link>
						</div>
					</div>

					{/*searcher*/}

					<div className={`${isMobileSearchBarShow ? 'translate-y-0' : 'translate-y-[-8rem]'}
									 md:translate-y-0 transition-all duration-2 searcher lg:w-[35rem] md:w-[20rem] w-[100%] 
									 absolute md:relative left-0 top-[4rem] md:top-0 my-2 py-2 md:m-0 md:p-0 z-10`}>
						<Searcher
							setIsShow={setIsMobileSearchBarShow}
						/>
					</div>



					{/*controlls*/}

					<div className="flex gap-8">

						{!isMobileSearchBarShow && (
							<div className="md:hidden">
								<IconBtn
									icon={faMagnifyingGlass}
									onClick={() => setIsMobileSearchBarShow(true) }
								 />
							</div>
						)}

						 <IconBtn
							icon={faUser}
							onClick={() => setIsShowAuthContainer("login") }
						 />

						 <IconBtn
							icon={faCartShopping}
							onClick={() => {}}
						 />
					</div>

				</div>
			</div>

			{/*nav*/}

			<div 
				className="
					 md:translate-x-0 md:text-white text-slate-600 md:bg-slate-800/70 bg-slate-100 py-1 px-8 
					 md:relative md:h-fit fixed top-0 h-[100vh] w-[80%] md:w-full left-0 transition-all duration-2"
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
						<Link to="/brands" className="hover:text-skin-secondary">Brands</Link>
						<Link to="/contact" className="hover:text-skin-secondary">Contact Us</Link>
						<Link to="/about" className="hover:text-skin-secondary">About Us</Link>
					</nav>
				</div>
			</div>


			{/*login / register*/}
			<AuthContainer
				isShow={isShowAuthContainer}
				setIsShow = {setIsShowAuthContainer} 

			/>

		</div>
	)

}

export default Nav;