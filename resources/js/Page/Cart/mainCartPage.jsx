import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import MainCartItem from './components/MainCartItem'
import {resetingCart} from '../../Redux/index'
import {Link} from 'react-router-dom'

const MainCartPage = () => {

	const { user, status } = useSelector(state => state.auth)
	const {	token, cartItems, totalPrice, totalQuantity } = useSelector(state => state.cart)
	const navigate = useNavigate()

	const [showInstruction , setShowInstruction] = useState(false)
	const dispatch = useDispatch();

	const handleOrder = () => {

		if(totalQuantity > 0){
			if(status === 200){
				navigate(`/user/order/ct_cart/${token}`)
			}else{
				setShowInstruction(true)
				navigate(`/guest/login?next=user%_order%_ct_cart%_${token}`)
			}
		}else{
			setShowInstruction(true)
		}
	}

	const handleResetCart = () => {
		dispatch(resetingCart(token));
	}

	return (
		<section id="main-cart">

			<div className='grid grid-cols-12 md:px-8 md:px-4 py-10'>
				<div className="lg:col-span-8 col-span-12 my-8 md:border-slate-400 border-[0.05rem] md:p-8 p-4 rounded-lg">
					<h3 className="text-xl uppercase font-bold text-slate-800">Your Cart List</h3>
					{cartItems.length !== 0 ? cartItems.map( cartItem =>

						<MainCartItem
							key={cartItem.id}
							cartItem = {cartItem}
						/>

					) : (
						<p className="text-red-500 text-center">There is no Item to be shown</p>
					)}
				</div>

				
				<div className="text-slate-900 lg:col-span-4 col-span-12 px-8 order-first my-8">
					<p>Make it Order Now</p>
					<ul className="text-slate-600">
						<li>qunatity  - {totalQuantity}</li>
						<li>total - {totalPrice} MMK</li>
					</ul>
					<button
						onClick = {handleOrder}
						className='mt-2 border-[0.05rem] border-slate-400 hover:bg-slate-800 hover:text-white w-full py-1'
					>
						Make Order
					</button>

					
					
					{showInstruction && (
						<p className="text-red-500">There is no Items in Your Shopping Cart</p>
					)}
					

					<div className="border-b-[0.05rem] border-slate-400 my-6"></div>

					<button
						onClick={handleResetCart}
						className='mt-2 bg-red-500 text-white hover:bg-slate-800 hover:text-white w-full py-1'
					>
						Remove All ITems
					</button>
				</div>
			</div>

		</section>
	)
}

export default MainCartPage;