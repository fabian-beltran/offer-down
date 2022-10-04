import React, { useState } from 'react'
import { Container, Typography, TextField, Stack, Button, Box } from '@mui/material';
import { useForm, Controller } from 'react-hook-form'
import useAuth from '../hooks/useAuth';

const Register = () => {
    const { handleSubmit, control } = useForm();
    const { register } = useAuth();
    const [errors, setErrors] = useState([]);

    const onSubmit = async (form) => {
        const res = await register(form);
        if (res.errors) setErrors(res.errors);
    }

    return (
        <Container sx={{ py: 4 }} maxWidth='xs'>
            <Typography align='center' variant='h3' color='primary' sx={{ mb: 4 }} fontWeight='bold'>
                Register
            </Typography>
            <Box component='form' noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2}>
                    {
                        [
                            { label: 'First Name', formName: 'first_name' },
                            { label: 'Last Name', formName: 'last_name' },
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
                    <Button variant='contained' type='submit'>Register</Button>
                </Stack>
            </Box>
        </Container>
    );
}

export default Register