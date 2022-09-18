import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'

const _ThemeProvider = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            { children }
        </ThemeProvider>
    )
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#00A87E',
            light: '#fff'
        },
    },
    typography: {},
});

export default _ThemeProvider