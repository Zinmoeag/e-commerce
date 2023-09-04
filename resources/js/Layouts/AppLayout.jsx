import {Outlet} from 'react-router-dom'
import Nav from '../Components/Nav'
import Bg1 from '../Assets/imgs/bg1.jpg'

const AppLayout = () => {
	return (
		<>
			<section className="bg-slate-50">
				<Nav />
				<div className="h-[15rem] bg-green-500 overflow-hidden relative">
					<img 
					className="absolute bottom-0 right-0"
					src={Bg1} 
					alt=""
					 />
				</div>
				<Outlet />
			</section>
		</>
	)
}


export default AppLayout;