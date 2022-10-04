import React, { useContext } from 'react'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { DarkModeContext } from '../components/DarkModeContext';

const _ThemeProvider = ({ children }) => {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline/>
            { children }
        </ThemeProvider>
    )
}

const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#00A87E',
            light: '#fff',
        },
    },
});

const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#00A87E',
            light: '#fff',
        },
        mode: 'dark',
    },
});

export default _ThemeProvider