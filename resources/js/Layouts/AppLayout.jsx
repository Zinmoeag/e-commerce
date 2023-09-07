import {Outlet} from 'react-router-dom'
import Nav from '../Components/Nav'

const AppLayout = () => {
	return (
		<>
			<section className="bg-indigo-100" >
				<Nav />
				<div className="mt-[4rem] bg-indigo-100">
					<Outlet />
				</div>

			</section>
		</>
	)
}


export default AppLayout;