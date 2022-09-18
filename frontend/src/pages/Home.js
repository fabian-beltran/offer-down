import React from 'react'
import { Typography, Container } from '@mui/material';

const Home = () => {
    return (
        <Container sx={{ py: 4 }}>
            <Typography align='center' variant='h3' color='primary'>
                The Marketplace
            </Typography>
        </Container>
    );
}

export default Home