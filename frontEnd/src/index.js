import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {Provider} from 'react-redux';
import { createStore } from 'redux'; 

// arg is the root reducer
const theStore = createStore(reducers);

import reducers from './reducers/index.js';

ReactDOM.render(
	<Provider store={theStore}>	
  		<App />
  	</Provider>,
  document.getElementById('root')
);
