import React, { useEffect, useState } from 'react'
import { Typography, Container, Grid, Divider } from '@mui/material';
import ItemCard from './ItemCard';
import { getItems } from '../../services/items';

const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems().then(({ data }) => setItems(data));
    }, [])

    return (
        <Container sx={{ py: 4 }}>
            <Typography align='center' variant='h3' color='primary' fontWeight='bold'>
                The Marketplace
            </Typography>

            <Divider sx={{ mt: 2, mb: 4 }}/>

            <Grid container spacing={2}>
                {
                    items.map(({ title, price, image_url }) => <ItemCard
                        title={title}
                        price={price}
                        imageUrl={image_url}
                    />)
                }
                
            </Grid>
        </Container>
    );
}

export default Home