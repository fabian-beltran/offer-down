import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, TextField, Stack, Button, Box } from '@mui/material'
import { useForm, Controller } from 'react-hook-form';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const { handleSubmit, control, formState: { errors } } = useForm();
    const { login, user, setUser } = useAuth();

    const onSubmit = async (form) => {
        await login(form);
        console.log('contextuser', user);
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
                            { label: 'Email', formName: 'email', rules: { required: true } },
                            { label: 'Password', formName: 'password', rules: { required: true }, type: 'password' },
                        ].map(({ label, formName, rules, type }) => <Box key={formName}>
                                <Controller
                                    name={formName}
                                    control={control}
                                    rules={rules}
                                    render={({ field }) => <TextField {...field} variant='outlined' label={label} type={type} required={rules.required} error={Boolean(errors[formName])} fullWidth/>}
                                />
                            </Box>
                        )
                    }
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