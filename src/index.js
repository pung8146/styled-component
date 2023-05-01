import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';

    const darkTheme = {
        backgroundColor:"black",
        textColor:"white",
    }

    const whiteTheme = {
        backgroundColor : "#9e9e9e",
        textColor:"black",
    }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <ThemeProvider theme={whiteTheme}>
        <App />
    </ThemeProvider>
);
