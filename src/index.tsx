import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
// import { getPersisted } from './redux/configureStore';
// import { PersistGate } from 'redux-persist/integration/react';
import SnackbarProvider from 'react-simple-snackbar';

const store = createStore(rootReducer);

const app = (
    <React.StrictMode>
        <Provider store={store}>
            <SnackbarProvider>
                <App />
            </SnackbarProvider>
        </Provider>
    </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));

reportWebVitals();
