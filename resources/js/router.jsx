import {createBrowserRouter} from "react-router-dom"
import Welcome from './Page/Welcome'
import Home from './Page/Home'
import Product from './Page/Product'
import NotFound from './Page/Error/NotFound'
import AppLayout from './Layouts/AppLayout'
import Register from './Page/Auth/Register'
import ForgotPassword from './Page/Auth/ForgotPassword'
import Login from './Page/Auth/Login'
import Profile from './Page/User/Profile'
import Edit from './Page/User/Edit'
import ChangePassword from './Page/User/ChangePassword'


const router = createBrowserRouter([

	{
		path:"/",
		element:<AppLayout />,
		children : [
			{
				path:"pos",
				element:<Home />,
			},
			{
				path:"pos/products/:type",
				element:<Product />,
			},
			{
				path:"guest/register",
				element : <Register />,
			},
			{
				path:"user/profile",
				element : <Profile />,
			},
			{
				path:"user/edit",
				element : <Edit />,
			},
			{
				path:"user/change-password",
				element : <ChangePassword />,
			},
			{
				path:"guest/forgot-password",
				element : <ForgotPassword />,
			},
			{
				path:"guest/login",
				element : <Login />,
			},
			{
				path:"*",
				element: <NotFound />
			}
		],
	},
	
]);


export default router;