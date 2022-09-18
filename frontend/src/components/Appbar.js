import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Container, Toolbar, Typography, Button, useTheme, styled } from '@mui/material';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Appbar = () => {
    const theme = useTheme();
    return <>
        <AppBar>
            <Container>
                <Toolbar disableGutters>
                    <Typography variant='h5' sx={{ flex: 1, textDecoration: 'none', color: theme.palette.primary.light }} component={Link} to='/'>Offer Down</Typography>
                    <Button sx={{ color: theme.palette.primary.light }} component={Link} to='/login'>Login</Button>
                </Toolbar>
            </Container>
        </AppBar>
        <Offset/>
    </>
}

export default Appbar;