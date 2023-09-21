import {Outlet} from 'react-router-dom'
import Nav from '../Components/Nav'
import Cart from '../Page/Cart'
import {useState, useEffect} from "react"

const AppLayout = () => {


	const [isCartShow, setIsCartShow] = useState(false)

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

			</section>
		</>
	)
}


export default AppLayout;