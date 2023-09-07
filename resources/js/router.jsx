import {createBrowserRouter} from "react-router-dom"
import Welcome from './Page/Welcome'
import Home from './Page/Home'
import NotFound from './Page/Error/NotFound'
import AppLayout from './Layouts/AppLayout'
import Register from './Page/Auth/Register'
import ForgotPassword from './Page/Auth/ForgotPassword'


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
				path:"/pos/sign-up",
				element : <Register />,
			},
			{
				path:"/pos/forgot-password",
				element : <ForgotPassword />,
			}
		],
	},
	{
		path:"*",
		element: <NotFound />
	}
	
]);


export default router;