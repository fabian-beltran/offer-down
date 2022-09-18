import React from 'react'
import { Container, Typography, TextField, Stack, Button } from '@mui/material'

const Register = () => {
    return (
        <Container sx={{ py: 4 }} maxWidth='xs'>
            <Typography align='center' variant='h3' color='primary' sx={{ mb: 4 }}>
                Register
            </Typography>
            <Stack spacing={2}>
                <TextField variant='outlined' label='First Name' required fullWidth/>
                <TextField variant='outlined' label='Last Name' required fullWidth/>
                <TextField variant='outlined' label='Email' required fullWidth/>
                <TextField variant='outlined' label='Password' required fullWidth/>
                <Button variant='contained'>Register</Button>
            </Stack>
            
        </Container>
    );
}

export default Register