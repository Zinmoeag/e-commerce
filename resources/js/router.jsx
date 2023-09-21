import {createBrowserRouter} from "react-router-dom"
import Home from './Page/Home/index'
import Product from './Page/Product/index'
import ProductShow from './Page/Product/Show'
import NotFound from './Page/Error/NotFound'
import AppLayout from './Layouts/AppLayout'
import Register from './Page/Auth/Register'
import ForgotPassword from './Page/Auth/ForgotPassword'
import Login from './Page/Auth/Login'
import Profile from './Page/User/Profile'
import Edit from './Page/User/Edit'
import ChangePassword from './Page/User/ChangePassword'
import ChangeEmail from './Page/User/ChangeEmail'


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
				path:"pos/products",
				element:<Product />,
			},
			{
				path:"pos/products/:code",
				element:<ProductShow />,
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
				path:"user/change-email",
				element : <ChangeEmail />,
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