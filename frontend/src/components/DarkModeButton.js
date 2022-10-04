import React, { useContext } from 'react';
import { Fab } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { DarkModeContext } from './DarkModeContext'


const DarkModeButton = () => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <Fab size='small' onClick={toggleDarkMode} color='primary' sx={{ position: 'fixed', top: 'auto', bottom: 20, right: 20, left: 'auto' }}>
            {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
        </Fab>
    );
}

export default DarkModeButton