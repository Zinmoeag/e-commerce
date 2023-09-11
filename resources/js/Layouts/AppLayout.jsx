import {Outlet} from 'react-router-dom'
import Nav from '../Components/Nav'
import Cart from '../Page/Cart'
import {useState} from "react"

const AppLayout = () => {


	const [isCartShow, setIsCartShow] = useState(false)

	return (
		<>
			<section className="bg-indigo-100" >
				<Nav
					setIsCartShow={setIsCartShow}
				/>
				<div className="mt-[4rem] bg-indigo-100">
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