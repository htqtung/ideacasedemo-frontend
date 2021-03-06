import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import { MuiThemeProvider } from '@material-ui/core/styles';
// import theme from './styles/theme';
// import CssBaseline from 'material-ui/core/CssBaseline';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import rootReducer from './reducers';

const store = createStore(
    rootReducer(),
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
 );

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
