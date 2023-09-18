import UserInfo from './Components/UserInfo'
import {useEffect} from 'react'
import OrderList from './Components/OrderList'
import withAuth from '../../Utilities/withAuth'

import {useNavigate, redirect} from 'react-router-dom'

const Profile = ({authUser, authStatus}) => {

		return (
			<>
				<section className='bg-slate-100 h-[100vh]'>
					<div className="lg:grid grid-cols-12 flex flex-col lg:w-full md:w-[80%] sm:w-[90%] w-[98%] mx-auto sm:px-6 p-4">
						<div className=" lg:px-4 lg:col-span-3">
							<UserInfo
								user={authUser} 
							/>
						</div>

						<div className="border-b-2 border-slate-600 mt-6 lg:hidden"></div>

						<div className="w-full lg:col-span-9 mt-10">
							<OrderList />
						</div>

					</div>
				</section>
			</>
		)

}

export default withAuth(Profile);



