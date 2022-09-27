import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Container, Toolbar, Typography, Button, IconButton, Stack, Tooltip, Avatar, useTheme, styled } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import useAuth from '../hooks/useAuth';
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Appbar = () => {
    const { user, logout } = useAuth();
    const theme = useTheme();

    return <>
        <AppBar>
            <Container>
                <Toolbar disableGutters>
                    <Typography variant='h5' sx={{ flex: 1, textDecoration: 'none', color: theme.palette.primary.light }} component={Link} to='/'>Offer Down</Typography>
                    {
                        user 
                            ? <Stack spacing={1.5} direction='row' alignItems='center'>
                                <Typography variant='body1'>{user.first_name}</Typography>
                                <Avatar alt={`${user.first_name} ${user.last_name}`}>{ user.first_name.charAt(0) }{ user.last_name.charAt(0) }</Avatar>
                                {/* <Button variant='contained' sx={{ backgroundColor: theme.palette.error.light }} onClick={logout}>Logout</Button> */}
                                <Tooltip title='Add Item' arrow>
                                    <IconButton sx={{ color: theme.palette.primary.light }} component={Link} to='/create'>
                                        <AddCircleIcon/>
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title='Logout' arrow>
                                    <IconButton sx={{ color: theme.palette.primary.light }} onClick={logout}>
                                        <LogoutIcon/>
                                    </IconButton>
                                </Tooltip>
                            </Stack>
                            : <Button sx={{ color: theme.palette.primary.light }} component={Link} to='/login'>Login</Button>
                    }
                </Toolbar>
            </Container>
        </AppBar>
        <Offset/>
    </>
}

export default Appbar;