import { faXmark } from '@fortawesome/free-solid-svg-icons';
import IconBtn from '../../Components/IconBtn'
import {useSelector} from 'react-redux'
import CartItem from './components/CartItem'
import {Link, useNavigate} from 'react-router-dom'

const Cart = ({isShow,setIsShow}) => {

	const {	cartItems, totalPrice, totalQuantity } = useSelector(state => state.cart)
	const navigate = useNavigate();
	const handleProgress = () => {
		navigate("/pos/cart")
		setIsShow(false)
	}

	return (
		<div className={`${isShow ? 'translate-y-0' : 'translate-y-[-400%]'} fixed top-0 left-0 right-0 h-[100vh] z-50 transition-all duration-all`}>

			<div className="w-full h-full bg-slate-900/80 flex items-center justify-center">
 
				<div className='lg:w-[60rem] md:w-[40rem] sm:w-[30rem] w-[23rem] h-[35rem] bg-slate-100 relative'>

					<div className="absolute top-0 bg-slate-900 text-white w-6 h-6 flex items-center justify-center right-0">
						<IconBtn
							icon={faXmark}
							onClick={() => setIsShow(false)}
						/>
					</div>

					<div className="grid grid-cols-10 w-full h-full">
						<div className="col-span-3 bg-slate-800 text-slate-400 py-8 px-6 lg:flex items-center justify-center hidden">
							<div className=" w-full">
								<div className="mb-6">
									<h3 className="text-lg mb-2 font-bold text-center">Quick Cart</h3>
									<p className="text-center">{totalQuantity} items in your Shopping Cart</p>
									<div className="border-slate-400 border-b-2 my-4"></div>
									<div className="flex justify-between mt-4">
										<h3>Total Quantity</h3>
										<h3 className="text-skin-secondary">{totalQuantity}</h3>
									</div>
									<div className="flex justify-between mt-4">
										<h3>Total</h3>
										<h3 className="text-skin-secondary">{totalPrice} Ks</h3>
									</div>
								</div>

								<button 
									onClick={() => setIsShow(false)}
									className="my-2 bg-slate-100 hover:bg-skin-secondary hover:text-slate-800 text-slate-800 w-full py-2"
								>
									Continue Shopping
								</button>

								<button
									onClick={handleProgress}
									className=" w-full my-2 bg-green-500 text-white hover:bg-skin-secondary hover:text-slate-800 text-slate-800 w-full py-2 text-sm"
								>
									Progress
									
								</button>
							</div>
						</div>

						<div className="lg:col-span-7 col-span-10 sm:px-6 px-2 py-4 lg:h-[35rem] h-[31rem] w-full">

								{/*card*/}
								<div className="h-full overflow-auto">
									<h3 className='mb-4'>Your Shopping Cart</h3>

									{/*item*/}

									<div className="flex flex-col gap-8 md:gap-2 px-2">
										{cartItems.length !== 0 ? cartItems.map(item => (
											<CartItem
												key={item.id} 
												cartItem={item}
											/>
										)) : (

											<p className="text-red-500 text-sm text-center">There is no Item to be shown</p>
										)}
									</div>


								</div>



							<div className="total text-end text-blue-600 h-[4rem] mt-4 flex items-center lg:hidden">

								<button
									onClick={handleProgress}
									className="flex-1 w-fit my-2 bg-green-500 text-white hover:bg-skin-secondary hover:text-slate-800 text-slate-800 w-full py-2 text-sm"
								>
									Progress
									
								</button>

								<div className="w-[12rem]">
									total - {totalPrice} Ks
								</div>

							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart;