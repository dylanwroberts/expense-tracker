import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Header from '../components/Header';
import Dashboard from '../pages/Dashboard';
import AddExpense from '../pages/AddExpense';
import EditExpense from '../pages/EditExpense';
import PageNotFound from '../pages/PageNotFound';

export default () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/add" component={AddExpense} />
            <Route path="/edit/:id" component={EditExpense} />
            <Route component={PageNotFound} />
        </Switch>
    </BrowserRouter>
);