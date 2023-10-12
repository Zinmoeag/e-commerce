import {useState, useEffect, createContext , useContext , useMemo} from "react"


const appStateContext = createContext();

export const AppStateProvider = ({children}) => {

	const [isCartShow, setIsCartShow] = useState(false)


	return (
		<appStateContext.Provider 
			value={{isCartShow, 
					setIsCartShow}} 
		>
			{children}
		</appStateContext.Provider>
	)
}

export const useAppStateContext = () => useContext(appStateContext);