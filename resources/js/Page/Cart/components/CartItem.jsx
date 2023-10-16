import { faXmark } from '@fortawesome/free-solid-svg-icons';
import IconBtn from '../../../Components/IconBtn'
import {useState, useMemo, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {removingFromCart, increasingQty, decreasingQty} from '../../../Redux/index'

const CartItem = ({cartItem}) => {

	const dispatch = useDispatch();
	const {token} = useSelector(state => state.cart);
	const [stockOut, setStockOut] = useState(false);
	// const totalAmoutOfItem = cartItem.quantity * cartItem.pricePerOneItem;

	const handleRemoveItem = (e) => {
		dispatch(removingFromCart(token,cartItem.id))
	}

	const handleIncrementQty = () =>{
		if(cartItem.stock_qty > cartItem.pivot.quantity){
			dispatch(increasingQty(token, cartItem.id))
		}else{
			setStockOut(true)
		}
	}

	const handleDecrementQty = () =>{
		setStockOut(false)
		if(cartItem.pivot.quantity > 1){
			dispatch(decreasingQty(token, cartItem.id))
		}else{
			dispatch(removingFromCart(token,cartItem.id))
		}	
	}

	return (
		<div>
			<div className="sm:h-[8rem]  h-[20rem]  bg-white  rounded-lg border-slate-400 overflow-hidden flex flex-col sm:flex-row sm:text-md text-sm relative">

				<div className="md:min-w-[6rem] md:max-w-[6rem] md:h-auto h-[16rem] flex items-center justify-center relative">
					<img 
					src={cartItem.image}
					alt=""
					className='w-full h-full object-cover absolute'
					/>
				</div>

				<div className="grid sm:grid-cols-5 grid-cols-4 w-full relative z-20 px-4">
					<div className="sm:col-span-2 col-span-1 flex flex-col justify-center">
						<h3>{cartItem.name}</h3>
						<p className="text-slate-400 text-sm">{cartItem.product_code}</p>
						<p className="text-slate-400 text-sm">{cartItem.brand}</p>
					</div>
					<div className="col-span-1 flex flex-col justify-center items-end px-2">
						<p>{cartItem.price} MMK</p>
					</div>
					<div className="col-span-1 flex flex-col justify-center">
						<div className="flex">
							<button 
								className="bg-slate-800 text-white w-6"
								onClick={handleIncrementQty}
							>
							+
							</button>
							<div className="w-8 text-center">{cartItem.pivot.quantity}</div>
							<button 
								className="bg-slate-800 text-white w-6"
								onClick={handleDecrementQty}
							>
							-
							</button>
						</div>
					</div>

					<div className="col-span-1 flex flex-col justify-center items-end px-2">
						<p>{cartItem.pivot.total_price} Ks</p>
					</div>
				</div>
				<div 
					className="px-2 flex items-center absolute right-0 top-0 text-red-600 cursor-pointer z-20"
					onClick={handleRemoveItem}
				>
					<IconBtn 
						icon={faXmark}

					/>

				</div>

				{stockOut && (
					<div className="absolute right-2 bottom-2">
						<p className='text-red-600 text-sm'>Stock Quantity is out</p>
					</div>
				)}
			</div>
		</div>

	)
}

export default CartItem;