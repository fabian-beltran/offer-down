import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const AuthRoutes = () => {
    const { user } = useAuth();
    return (
        user ? <Outlet/> : <Navigate to='/login'/>
    )
}

export default AuthRoutes;