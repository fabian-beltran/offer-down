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
        <Grid item xs={3}>
            <ButtonBase disableRipple onClick={handleClick}>
                <Card elevation={6}>
                    <CardMedia
                        component='img'
                        image='https://airconmidnorthcoast.com.au/wp-content/uploads/2018/11/img-placeholder.png'
                        //image={imageUrl}
                        alt={item.title}
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