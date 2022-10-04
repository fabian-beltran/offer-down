import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Typography, Divider, Box, Stack, Button } from '@mui/material';
import ShareIcon from '@mui/icons-material/ShareOutlined'; 
import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { getItem } from '../../services/items';

const usdFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const Item = () => {
    const { id } = useParams();
    const [item, setItem] = useState();

    useEffect(() => {
        getItem(id).then(({ data }) => setItem(data));
    }, [id]);

    return item && (
        <Container sx={{ py: 8 }}>
            <Grid container spacing={4} justifyContent='center'>
                <Grid item xs={12} lg={6}>
                    <Box
                        component='img'
                        src={item.image_url || 'https://airconmidnorthcoast.com.au/wp-content/uploads/2018/11/img-placeholder.png'}
                        sx={{ borderRadius: 1, width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </Grid>
                <Grid item xs={12} lg={3}>
                    <Stack spacing={1.5}>
                        <Typography variant='h4' fontWeight='bold'>
                            { item.title }
                        </Typography>
                        <Typography variant='h3' fontWeight='bold'>
                            { usdFormatter.format(item.price) }
                        </Typography>
                        <Typography variant='body1'>
                            Seller: { item.first_name } { item.last_name }
                        </Typography>
                        <Typography variant='body1'>
                            Last updated about 3 days ago
                        </Typography>
                        <Typography variant='body1'>Condition: { item.condition === 'new' ? 'New' : item.condition === 'used' ? 'Used' : item.condition === 'openbox' ? 'Open Box' : '' }</Typography>
                        <Button
                            variant='contained'
                            endIcon={<AddShoppingCartIcon />}
                        >
                            Add To Cart
                        </Button>
                        <Button variant='outlined' endIcon={<FavoriteIcon />}>
                            Save For Later
                        </Button>
                        <Button variant='outlined' endIcon={<ShareIcon />}>
                            Share
                        </Button>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h5' fontWeight='bold'>
                        Description
                    </Typography>
                    <Divider sx={{ mt: 1, mb: 2 }} />
                    <Typography variant='body1'>
                        { item.description }
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Item