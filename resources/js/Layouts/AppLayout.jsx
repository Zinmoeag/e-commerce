import {Outlet} from 'react-router-dom'
import Nav from '../Components/Nav'
import Cart from '../Page/Cart/index'
import {useState, useEffect} from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useSelector} from 'react-redux'
import useAuth from '../Hooks/useAuth'

const AppLayout = () => {


	const [isCartShow, setIsCartShow] = useState(false)
	const {getUser, authUser, authStatus} = useAuth({url:null})

	useEffect(() => {
		if(!authStatus){
			getUser()
		}
	},[authStatus])

	return (
		<>
			<section className="bg-indigo-100" >
				<Nav
					setIsCartShow={setIsCartShow}
				/>
				<div className="md:mt-[7.5rem] mt-[4rem] bg-slate-100">
					<Outlet />
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