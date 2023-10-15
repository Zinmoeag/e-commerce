import {useAppStateContext} from '../Context/AppStateContext'

const useLoader =  () => {

	const {loaderRef} = useAppStateContext();
	const startLoading = () => loaderRef.current.continuousStart();
	const complete = () => loaderRef.current.complete();

	return {
		startLoading,
		complete
	}
}

export default useLoader;