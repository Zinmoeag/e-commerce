import {Outlet} from 'react-router-dom'
import Nav from '../Components/Nav'
import Cart from '../Page/Cart'
import {useState, useEffect} from "react"
import {useScroll} from '../Hooks/useScrollTop'

const AppLayout = () => {


	const [isCartShow, setIsCartShow] = useState(false)

	useScroll();

	return (
		<>
			<section className="bg-indigo-100" >
				<Nav
					setIsCartShow={setIsCartShow}
				/>
				<div className="mt-[6rem] bg-slate-100">
					<Outlet />
				</div>

				<Cart
					isShow= {isCartShow}
					setIsShow = {setIsCartShow}
				/>

			</section>
		</>
	)
}


export default AppLayout;