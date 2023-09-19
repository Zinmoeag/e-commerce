import './bootstrap';
import '../css/app.css'

import ReactDOM from 'react-dom/client';        
import Main from './main';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './Redux/store'


ReactDOM.createRoot(document.getElementById('app')).render(  

	<>
		<Provider store={store}>
		    <Main />   
		</Provider >
	</>


);