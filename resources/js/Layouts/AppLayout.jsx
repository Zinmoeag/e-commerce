import {Outlet} from 'react-router-dom'
import Nav from '../Components/Nav'
import Cart from '../Page/Cart/index'
import {useState, useEffect} from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useSelector, useDispatch} from 'react-redux'
import useAuth from '../Hooks/useAuth'
import {fetchCart} from '../Redux/index'
import {showCartApi} from '../Api/apiUrl'

const AppLayout = () => {

	const [isCartShow, setIsCartShow] = useState(false)
	const {getUser, authUser, authStatus} = useAuth({url:null})
	const {token} = useSelector(state => state.cart)

	const dispatch = useDispatch();

	useEffect(() => {
		if(!authStatus){
			getUser()
		}
	},[authStatus])


	useEffect(() => {
		if(token){	
			const url = showCartApi(token);
			dispatch(fetchCart(url));
		}else{
			dispatch(fetchCart());
		}
	},[token])

	return (
		<>
			<section className="bg-indigo-100" >
				<Nav
					setIsCartShow={setIsCartShow}
				/>
				<div className="md:mt-[7.5rem] mt-[4rem] bg-slate-100">
					<Outlet 
						context={[authUser,authStatus]}
					/>
				</div>

				<Cart
					isShow= {isCartShow}
					setIsShow = {setIsCartShow}
				/>

				<ToastContainer />
			</section>
		</>
	)
}


export default AppLayout;