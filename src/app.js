import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

// Create the root once
const root = ReactDOM.createRoot(document.getElementById('app'));

// Render a loading message initially
root.render(<p>Loading...</p>);

// Dispatch the async action and then render the main app
store.dispatch(startSetExpenses()).then(() => {
    root.render(jsx);
});
