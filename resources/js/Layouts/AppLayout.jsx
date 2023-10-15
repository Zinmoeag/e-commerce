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
import useProduct from '../Hooks/useProduct'
import {useAppStateContext} from '../Context/AppStateContext'
import Loader from '../Components/Loader'


const AppLayout = () => {

	const product = useSelector(state => state.product)
	const {brands, categories, best_seller} = product;
	const {getUser, authUser, authStatus} = useAuth({url:null})
	const {token} = useSelector(state => state.cart)
	const {isCartShow, setIsCartShow} = useAppStateContext();
	const {fetchBrand, fetchCategory, fetchBestSeller} = useProduct();
	const dispatch = useDispatch();

	useEffect(() => {
		if(!authStatus){
			getUser()
		}

		if(brands.length <= 0){
			fetchBrand()
		}

		if(categories.length <= 0){
			fetchCategory()
		}

		if(best_seller <= 0){
			fetchBestSeller()
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
			<Loader />
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