import React from 'react'
import { Container, Typography, Divider } from '@mui/material'

const CreateItem = () => {
    return <Container sx={{ py: 4 }}>
        <Typography align='center' variant='h3' color='primary' fontWeight='bold'>
            Create Item
        </Typography>

        <Divider sx={{ mt: 2, mb: 4 }}/>
    </Container>
}

export default CreateItem