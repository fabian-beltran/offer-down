import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, TextField, Stack, Button } from '@mui/material'

const Login = () => {
    return (
        <Container sx={{ py: 4 }} maxWidth='xs'>
            <Typography align='center' variant='h3' color='primary' sx={{ mb: 4 }}>
                Login
            </Typography>
            <Stack spacing={2}>
                <TextField variant='outlined' label='Email' fullWidth/>
                <TextField variant='outlined' label='Password' fullWidth/>
                <Stack spacing={1} direction='row' justifyContent='center'>
                    <Button variant='contained'>Login</Button>
                    <Button component={Link} to='/register'>Register</Button>
                </Stack>
            </Stack>
            
        </Container>
    );
}

export default Login