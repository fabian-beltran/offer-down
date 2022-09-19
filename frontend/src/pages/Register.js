import React from 'react'
import { Container, Typography, TextField, Stack, Button, Box } from '@mui/material';
import { useForm, Controller } from 'react-hook-form'
import useAuth from '../hooks/useAuth';

const Register = () => {
    const { handleSubmit, control, formState: { errors } } = useForm();
    const { register } = useAuth();
    
    const onSubmit = async (form) => {
        const res = await register(form);
        console.log(res);
    }

    return (
        <Container sx={{ py: 4 }} maxWidth='xs'>
            <Typography align='center' variant='h3' color='primary' sx={{ mb: 4 }}>
                Register
            </Typography>
            <Box component='form' noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2}>
                    {
                        [
                            { label: 'First Name', formName: 'first_name', rules: { required: true } },
                            { label: 'Last Name', formName: 'last_name', rules: { required: true } },
                            { label: 'Email', formName: 'email', rules: { required: true } },
                            { label: 'Password', formName: 'password', rules: { required: true }, type: 'password' },
                        ].map(({ label, formName, rules, type }) => <Box key={formName}>
                                <Controller
                                    name={formName}
                                    control={control}
                                    rules={rules}
                                    render={({ field }) => <TextField {...field} variant='outlined' label={label} type={type} required={Boolean(rules.required)} error={Boolean(errors[formName])} fullWidth/>}
                                />
                            </Box>
                        )
                    }
                    <Button variant='contained' type='submit'>Register</Button>
                </Stack>
            </Box>
        </Container>
    );
}

export default Register