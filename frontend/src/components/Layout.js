import React, { useEffect } from 'react'
import useAuth from '../hooks/useAuth';
import Appbar from './Appbar'

const Layout = ({ children }) => {
    const { loadUser } = useAuth();

    useEffect(() => {
        loadUser();
    }, [])
    return (
        <>
            <Appbar />
            {children}
        </>
    );
}

export default Layout