import { faXmark } from '@fortawesome/free-solid-svg-icons';
import {useSelector, useDispatch} from 'react-redux'
import {useState, useEffect} from 'react'
import {removerCartItem, increseQuantity, decreaseQuantity, resetItems} from '../../../Redux/index'
import IconBtn from '../../../Components/IconBtn'
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
		<div className={`${stockOut ? 'border-red-600' : 'border-slate-400'} p-4 my-4 sm:h-[10rem] h-[20rem] rounded-lg overflow-hidden flex flex-col sm:flex-row relative items-center justify-center border-[0.05rem]`}>

			<div className="md:min-w-[6rem] md:max-w-[6rem] h-full w-full flex items-center justify-center md:me-4 bg-slate-800">
				<img 
				src={cartItem.image}
				alt=""
				className='w-full h-full object-cover absolute md:relative z-10'
				/>
			</div>

			<div className="mb-4 font-bold md:hidden relative z-30">
				<h3>{cartItem.name}</h3>
			</div>

			<div className="flex w-full relative z-30">
				<div className="lg:w-[15rem] md:w-[10rem] flex flex-col justify-center text-md hidden sm:block">
					<h3>{cartItem.name}</h3>
					<p className="text-slate-400 text-sm">{cartItem.product_code}</p>
				</div>
				<div className="col-span-1 flex-1 flex flex-col justify-center items-center">
					<div className="flex">
						<button 
							className="bg-slate-800 text-white w-8 h-8 hover:bg-slate-600" 
							onClick={handleIncrementQty}
						>
						+
						</button>
						<div className="w-12 text-center flex items-center justify-center">{cartItem.pivot.quantity}</div>
						<button 
							className="bg-slate-800 text-white w-8 h-8 hover:bg-slate-600"
							onClick={handleDecrementQty}
						>
						-
						</button>
					</div>
				</div>
				<div className="col-span-1 flex-1 flex flex-col justify-center items-end px-2">
					<p>{cartItem.price} MMK</p>
				</div>

				<div className="col-span-1 flex-1 flex flex-col justify-center items-end px-2 text-skin-secondary font-bold">
					<p>{cartItem.pivot.total_price} Ks</p>
				</div>

			</div>
			<div className="px-2 flex items-center absolute right-0 top-0 text-red-600">
				<button>
					<IconBtn 
						icon={faXmark}
						onClick={handleRemoveItem}
					/>
				</button>

			</div>
		</div>
	)
}

export default CartItem;