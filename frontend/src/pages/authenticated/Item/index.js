import React from 'react';
import { Container, Grid, Typography, Divider, Box, Stack, Button } from '@mui/material';
import ShareIcon from '@mui/icons-material/ShareOutlined'; 
import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Item = () => {
    return (
        <Container sx={{ py: 8 }}>
            <Grid container spacing={4} justifyContent='center'>
                <Grid item xs={6}>
                    <Box
                        component='img'
                        src='https://airconmidnorthcoast.com.au/wp-content/uploads/2018/11/img-placeholder.png'
                        sx={{ borderRadius: 1 }}
                    />
                    {/* <Box sx={{ width: '100%', height: '100%', borderRadius: 1, backgroundImage: `url(https://airconmidnorthcoast.com.au/wp-content/uploads/2018/11/img-placeholder.png)`, backgroundSize: 'cover' }}>

                    </Box> */}
                </Grid>
                <Grid item xs={3}>
                    <Stack spacing={2}>
                        <Typography variant='h4' fontWeight='bold'>
                            Item Title Here
                        </Typography>
                        <Typography variant='h3' fontWeight='bold'>
                            $550
                        </Typography>
                        <Typography variant='body1'>
                            Last updated about 3 days ago
                        </Typography>
                        <Typography variant='body1'>Condition: New</Typography>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Item