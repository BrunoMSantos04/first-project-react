import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Users from './pages/users'
import GlobalStyle from './globalStyle';

ReactDOM.render(
    <> 
        <Users /> 
        <GlobalStyle /> 
    </>, 
    document.getElementById('root')
);

