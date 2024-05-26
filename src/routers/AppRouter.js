import React from 'react'  
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NotfoundPage from '../components/NotfoundPage'
import Header from '../components/Header'


const AppRouter = () => (
<BrowserRouter>
    <Header />
    <Routes>
    <Route path='/' element={<ExpenseDashboardPage />} />
    <Route path='/create' element={<AddExpensePage />} />
    <Route path='/edit/:id' element={<EditExpensePage />} />
    <Route path='/help' element={<HelpPage />} />
    <Route path='*'  element={<NotfoundPage />} />
    </Routes>
    </BrowserRouter>
);

export default AppRouter;