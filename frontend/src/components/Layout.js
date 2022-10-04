import React, { useEffect } from 'react'
import useAuth from '../hooks/useAuth';
import Appbar from './Appbar'
import DarkModeButton from './DarkModeButton';

const Layout = ({ children }) => {
    const { loadUser } = useAuth();

    useEffect(() => {
        loadUser();
    }, [])
    return (
        <>
            <Appbar />
            <DarkModeButton/>
            {children}
        </>
    );
}

export default Layout