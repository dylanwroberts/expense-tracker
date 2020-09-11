import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import store from './store/store';

render(
    <Provider store={store}><AppRouter /></Provider>,
    document.getElementById('app')
);