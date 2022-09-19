import React from 'react'
import { Container, Typography, Divider, Box, Grid, Stack, TextField, MenuItem, ToggleButtonGroup, ToggleButton, IconButton, Tooltip, Button } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import FileUploadIcon from '@mui/icons-material/FileUpload';

const CreateItem = () => {
    const { control } = useForm();
    
    return <Container sx={{ py: 4 }}>
        <Typography align='center' variant='h3' color='primary' fontWeight='bold'>
            Create Item
        </Typography>
        <Divider sx={{ mt: 2, mb: 4 }}/>

        <Grid container spacing={4} justifyContent='center'>
            <Grid item xs={6}>
                <Box sx={{ width: '100%', height: '100%', borderRadius: 1, backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/4/4f/SIG_Pro_by_Augustas_Didzgalvis.jpg)`, backgroundSize: 'cover' }}>
                    <Tooltip title='Upload Image' placement='left' arrow>
                        <IconButton>
                            <FileUploadIcon/>
                        </IconButton>
                    </Tooltip>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Stack spacing={2}>
                    <Controller
                        name='title'
                        control={control}
                        render={({ fields }) => <TextField {...fields} variant='outlined' label='Title' required />}
                    />
                    <Controller
                        name='condition'
                        control={control}
                        render={({ fields }) => <TextField {...fields} variant='outlined' label='Condition' select required>
                            <MenuItem value='new'>New</MenuItem>
                            <MenuItem value='used'>Used</MenuItem>
                            <MenuItem value='open_box'>Open Box (not used)</MenuItem>
                        </TextField>}
                    />
                    <Controller
                        name='title'
                        control={control}
                        render={({ fields }) => <TextField {...fields} variant='outlined' label='Description' multiline rows={5} />}
                    />
                    <ToggleButtonGroup fullWidth color='primary' value='pickup'>
                        <ToggleButton value='pickup'>Pickup</ToggleButton>
                        <ToggleButton value='delivery'>Delivery</ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </Grid>
            <Grid item xs={12} display='flex' justifyContent='center'>
                <Button variant='contained' size='large'>Publish</Button>
            </Grid>
        </Grid>

    </Container>
}

export default CreateItem