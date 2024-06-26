import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { auth } from './firebase/firebase';
import { login, logout } from './actions/auth';
import LoadingPage from './components/LoadingPage'
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


// Create the root once
const root = ReactDOM.createRoot(document.getElementById('app'));

// Render a loading message initially
root.render(<LoadingPage />);

// Dispatch the async action and then render the main app


auth.onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(() => {
            root.render(jsx);
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        });

    } else {
        store.dispatch(logout())
        history.push('/')
        root.render(jsx);
    }
})