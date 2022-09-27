import React from 'react'
import { Grid, Card, CardMedia, CardContent, Typography, ButtonBase } from '@mui/material'

const ItemCard = ({ title, price }) => {
    return (
        <Grid item xs={3}>
            <ButtonBase disableRipple>
                <Card elevation={6}>
                    <CardMedia
                        component='img'
                        image='https://airconmidnorthcoast.com.au/wp-content/uploads/2018/11/img-placeholder.png'
                        alt='item'
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5'>
                            { title }
                        </Typography>
                        <Typography variant='body1' color='text.secondary'>
                            ${ price }
                        </Typography>
                    </CardContent>
                </Card>
            </ButtonBase>
        </Grid>
    );
}

export default ItemCard