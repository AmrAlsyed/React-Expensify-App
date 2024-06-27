// AppRouter.js
import React from 'react';
import { Routes, Route, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import LoginPage from '../components/LoginPage';
import NotfoundPage from '../components/NotfoundPage';
import PrivateRoute from './PrivateRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
    <HistoryRouter history={history}>
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/dashboard' element={<PrivateRoute><ExpenseDashboardPage /></PrivateRoute>} />
            <Route path='/create' element={<PrivateRoute><AddExpensePage /></PrivateRoute>} />
            <Route path='/edit/:id' element={<PrivateRoute><EditExpensePage /></PrivateRoute>} />
            <Route path='*' element={<NotfoundPage />} />
        </Routes>
    </HistoryRouter>
);

export default AppRouter;
