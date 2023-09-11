import {createBrowserRouter} from "react-router-dom"
import Welcome from './Page/Welcome'
import Home from './Page/Home'
import Product from './Page/Product'
import NotFound from './Page/Error/NotFound'
import AppLayout from './Layouts/AppLayout'
import Register from './Page/Auth/Register'
import ForgotPassword from './Page/Auth/ForgotPassword'
import Login from './Page/Auth/Login'


const router = createBrowserRouter([

	{
		path:"/",
		element:<AppLayout />,
		children : [
			{
				path:"/pos",
				element:<Home />,
			},
			{
				path:"/pos/products",
				element:<Product />,
			},
			{
				path:"/guest/register",
				element : <Register />,
			},
			{
				path:"/guest/forgot-password",
				element : <ForgotPassword />,
			},
			{
				path:"/guest/login",
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