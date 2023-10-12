import './bootstrap';
import '../css/app.css'

import ReactDOM from 'react-dom/client';        
import Main from './main';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './Redux/store'
import {AppStateProvider} from './Context/AppStateContext'


ReactDOM.createRoot(document.getElementById('app')).render(  

	<>
		<Provider store={store}>
			<AppStateProvider>
			    <Main />   
			</AppStateProvider>
		</Provider >
	</>


);