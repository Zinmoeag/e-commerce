import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faUser, faBars, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react'
import {Link} from 'react-router-dom'
import LinkDropDown from '../Components/LinkDropDown'
import Input from '../Components/Input';
import AuthContainer from '../Components/AuthContainer';
import IconBtn from '../Components/IconBtn'
import Searcher from '../Components/Searcher'
import {useSelector} from 'react-redux'
import UserDisplayText from '../Utilities/UserDisplayText'



const dropdownMenu = [
	{id:1, name:"Clothing", link:"/pos/products"},
	{id:2, name:"Shoes", link:"/shoes"},
]


const Nav = ({setIsCartShow}) => {

	const {cartItems, totalQuantity} = useSelector(state => state.cart)
	const {status, user} = useSelector(state => state.auth)

	// console.log(user.photo)

	const [isMobileSearchBarShow, setIsMobileSearchBarShow] = useState(false);

	const [isNavShow, setIsNavShow] = useState(false)

	const displayText = UserDisplayText(user ? user.name : " ")


	return (
		<div className="fixed top-0 left-0 right-0 z-40 text-skin-coffee shadow-lg fixed">
			<div className="bg-white shadow-lg border-b-4 border-skin-coffee/50 backdrop-blur-sm h-[6rem] flex items-center">
				
				<div className="flex justify-between items-center md:px-10 px-4 w-full">
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
								<h4 className="font-raleway">LaraCamp</h4>
							</Link>
						</div>
					</div>



					<div className={`${isMobileSearchBarShow ? "translate-x-0" : "translate-x-[500%]"} md:translate-x-0 lg:w-[40rem] md:w-[28rem] w-[95%] md:relative absolute top-[7rem] md:top-0 transition-all duration-200`}>
						<Searcher 
							setIsShow={setIsMobileSearchBarShow}
						/>
					</div>

					{/*controlls*/}

					<div className="flex md:gap-8 gap-6 items-center justify-center">

						<div className="text-slate-800 flex gap-6 md:gap-8 items-center justify-center">

							<div className='text-sm md:hidden bg-gray-200 border-[0.05rem] border-slate-500 flex items-center justify-center w-6 h-6 rounded-md'>
								 <IconBtn
									icon={faMagnifyingGlass}
									onClick={() => {setIsMobileSearchBarShow(true)}}

								 />
							</div>

							<div 
								className="relative cursor-pointer hover:text-skin-secondary md:text-2xl text-lg"
								onClick={() => {setIsCartShow(true)}}
							>
								 <IconBtn
									icon={faBagShopping}
								 />

								 {totalQuantity > 0 && (
									 <div className="absolute top-4 left-[-0.5rem] bg-red-600 w-4 h-4 rounded-full text-center text-sm text-white flex items-center justify-center">
									 	<p>{cartItems.length}</p>
									 </div>
								 )} 
							</div>


							<div className="text-[1rem]">

								{status === 200 ? (
									<Link
										to="/user/profile"
									>
										<div className="w-[2.2rem] h-[2.2rem] bg-skin-fourth rounded-full my-6 flex items-center justify-center overflow-hidden">
											{
												user.photo ? (
													<img 
														src={user.photo}
														alt="dd" 
														className="w-full h-full object-cover"
													/>
												) : (
													<h3 className="uppercase text-[1.3rem] text-center font-bold  text-white">
														{displayText}
													</h3>
												)
											}
										</div>
									</Link>
								) : (
									<div className="flex flex-col md:flex-row text-sm">
										<Link
											to='/guest/login'
											className="hover:text-skin-coffee"
										>
											Login
										</Link>

										<p className="hidden md:block">|</p>

										<Link
											to="/guest/register"
											className="hover:text-skin-coffee"
										>
										Register
										</Link>
									</div>

								)}
							</div>
						</div>
					</div>

				</div>
			</div>

			{/*nav*/}

			<div
				className={`${isNavShow ? "translate-x-0" : "translate-x-[-100%]"}
									 md:translate-x-0 md:text-white text-slate-600 md:bg-slate-800 bg-slate-100 py-1 px-8 
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
					<nav className="flex flex-col md:flex-row gap-8 justify-center items-center h-full">
						<LinkDropDown 
							innerText={"Our Products"}
							menu={dropdownMenu}
						/>		
						{/*<Link to="#brand" className="hover:text-skin-secondary">Brands</Link>*/}
						<Link to="/contact" className="hover:text-skin-secondary">Contact Us</Link>
						<Link to="/contact" className="hover:text-skin-secondary">Contact Us</Link>
						<Link to="/contact" className="hover:text-skin-secondary">Contact Us</Link>
						<Link to="/about-us" className="hover:text-skin-secondary">About Us</Link>
					</nav>
				</div>
			</div>

		</div>
	)

}

export default Nav;