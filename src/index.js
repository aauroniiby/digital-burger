import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import burgerBuilderReducer from './store/reducers/burgerBuilder'
import thunk from 'redux-thunk'
import orderReducer from './store/reducers/order'
import menusReducer from './store/reducers/menus'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    burgerBuilder : burgerBuilderReducer,
    order : orderReducer,
    menus : menusReducer
})


const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
))

const app = (
    <Provider store = {store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
