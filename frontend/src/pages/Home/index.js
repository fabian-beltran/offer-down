import React from 'react'
import { Typography, Container, Grid, Divider } from '@mui/material';
import ItemCard from './ItemCard';

const Home = () => {
    return (
        <Container sx={{ py: 4 }}>
            <Typography align='center' variant='h3' color='primary' fontWeight='bold'>
                The Marketplace
            </Typography>

            <Divider sx={{ mt: 2, mb: 4 }}/>

            <Grid container spacing={2}>
                
            </Grid>
        </Container>
    );
}

export default Home