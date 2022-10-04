import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, TextField, Stack, Button, Box } from '@mui/material'
import { useForm, Controller } from 'react-hook-form';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const { handleSubmit, control } = useForm();
    const { login } = useAuth();
    const [errors, setErrors] = useState([]);

    const onSubmit = async (form) => {
        const res = await login(form);
        if (res.errors) setErrors(res.errors);
    };

    return (
        <Container sx={{ py: 4 }} maxWidth='xs'>
            <Typography align='center' variant='h3' color='primary' sx={{ mb: 4 }} fontWeight='bold'>
                Login
            </Typography>
            <Box component='form' noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2}>
                    {
                        [
                            { label: 'Email', formName: 'email' },
                            { label: 'Password', formName: 'password', type: 'password' },
                        ].map(({ label, formName, rules, type }) => <Box key={formName}>
                                <Controller
                                    name={formName}
                                    control={control}
                                    rules={rules}
                                    render={({ field }) => <TextField {...field} variant='outlined' label={label} type={type} fullWidth/>}
                                />
                            </Box>
                        )
                    }
                    <Stack>
                        {
                            errors.map(e => <Typography variant='caption' color='error' sx={{ marginTop: '0 !important' }}>{e.msg}</Typography>)
                        }
                    </Stack>
                    <Stack spacing={1} direction='row' justifyContent='center'>
                        <Button variant='contained' type='submit'>Login</Button>
                        <Button component={Link} to='/register'>Register</Button>
                    </Stack>
                </Stack>
            </Box>
        </Container>
    );
}

export default Login