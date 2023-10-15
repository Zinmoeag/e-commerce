import {useState, useEffect, createContext , useContext , useMemo, useRef} from "react"

const appStateContext = createContext();

export const AppStateProvider = ({children}) => {

	const [isCartShow, setIsCartShow] = useState(false)
	const [isNavShow, setIsNavShow] = useState(false)
	const loaderRef = useRef(null)


	return (
		<appStateContext.Provider 
			value={{
				isCartShow, 
				setIsCartShow,
				isNavShow,
				setIsNavShow,
				loaderRef
			}} 
		>
			{children}
		</appStateContext.Provider>
	)
}

export const useAppStateContext = () => useContext(appStateContext);