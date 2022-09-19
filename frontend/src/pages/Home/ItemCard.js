import React from 'react'
import { Grid, Card, CardMedia, CardContent, Typography, ButtonBase } from '@mui/material'

const ItemCard = () => {
    return (
        <Grid item xs={3}>
            <ButtonBase disableRipple>
                <Card elevation={6}>
                    <CardMedia
                        component='img'
                        image='https://upload.wikimedia.org/wikipedia/commons/4/4f/SIG_Pro_by_Augustas_Didzgalvis.jpg'
                        alt='item'
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5'>
                            Gun and Ammo
                        </Typography>
                        <Typography variant='body1' color='text.secondary'>
                            $1200
                        </Typography>
                    </CardContent>
                </Card>
            </ButtonBase>
        </Grid>
    );
}

export default ItemCard