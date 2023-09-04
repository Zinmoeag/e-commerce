import {createBrowserRouter} from "react-router-dom"
import Welcome from './Page/Welcome'
import Home from './Page/Home'
import NotFound from './Page/Error/NotFound'
import AppLayout from './Layouts/AppLayout'


const router = createBrowserRouter([

	{
		path:"/",
		element:<AppLayout />,
		children : [
			{
				path:"/home",
				element:<Home />,
			},
			{
				path:"*",
				element : <NotFound />,
			}
		],
	},
	
]);


export default router;