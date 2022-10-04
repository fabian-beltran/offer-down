import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Card, CardMedia, CardContent, Typography, ButtonBase } from '@mui/material'

const usdFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const ItemCard = ({ item }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/item/${item.id}`);
    }

    return (
        <Grid item xs={6} md={4} lg={3}>
            <ButtonBase disableRipple onClick={handleClick} sx={{ height: '100%', width: '100%' }}>
                <Card elevation={6} sx={{ height: '100%', width: '100%' }}>
                    <CardMedia
                        component='img'
                        image={item.image_url || 'https://airconmidnorthcoast.com.au/wp-content/uploads/2018/11/img-placeholder.png'}
                        alt={item.title}
                        sx={{ height: '50%' }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5'>
                            { item.title }
                        </Typography>
                        <Typography variant='body1' color='text.secondary'>
                            { usdFormatter.format(item.price) }
                        </Typography>
                    </CardContent>
                </Card>
            </ButtonBase>
        </Grid>
    );
}

export default ItemCard