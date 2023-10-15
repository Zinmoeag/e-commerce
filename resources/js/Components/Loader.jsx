import LoadingBar from 'react-top-loading-bar'
import {useAppStateContext} from '../Context/AppStateContext'
// import useLoader from '../Hooks/useLoader'

const Loader = () => {

	const {loaderRef} = useAppStateContext();

	return (
		<div className="fixed top-0 z-50 w-full" id="loader">
			<LoadingBar
				color='#04f491' 
				ref={loaderRef}
			/>
		</div>
	)
}




export default Loader;