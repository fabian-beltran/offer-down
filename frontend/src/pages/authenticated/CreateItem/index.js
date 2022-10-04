import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Divider, Box, Grid, Stack, TextField, MenuItem, ToggleButtonGroup, ToggleButton, IconButton, Tooltip, Button, InputAdornment } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { createItem } from '../../../services/items';
import { uploadImage } from '../../../services/images';

const CreateItem = () => {
    const { control, handleSubmit, watch, setValue } = useForm();
    const navigate = useNavigate();

    const onSubmit = (form) => {
        createItem(form).then(() => {
            navigate('/');
        })
    };

    const handleImageUpload = async (e) => {
        if (!e.target.files.length) return;
        const formData = new FormData();
        formData.append('image', e.target.files[0]);
        const uploadResult = await uploadImage(formData);
        setValue('image_url', uploadResult.data.image_url);
        console.log('WATCH', watch())
    }

    return <Container sx={{ py: 4 }}>
        <Typography align='center' variant='h3' color='primary' fontWeight='bold'>
            Create Item
        </Typography>
        <Divider sx={{ mt: 2, mb: 4 }}/>

        <Box component='form' noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={4} justifyContent='center'>
                <Grid item xs={7}>
                    <Box sx={{ width: '100%', height: '100%', borderRadius: 1, backgroundImage: `url(${watch('image_url') || 'https://airconmidnorthcoast.com.au/wp-content/uploads/2018/11/img-placeholder.png'})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <Controller
                            name='image_url'
                            control={control}
                            render={({ field }) => <Tooltip title='Upload Image' placement='left' arrow>
                                <IconButton {...field} disableRipple component='label'>
                                    <input hidden accept="image/*" type="file" name='image' onChange={handleImageUpload} />
                                    <FileUploadIcon/>
                                </IconButton>
                            </Tooltip>}
                        />
                        
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Stack spacing={2}>
                        <Controller
                            name='title'
                            control={control}
                            render={({ field }) => <TextField variant='outlined' label='Title' required {...field} />}
                        />
                        <Controller
                            name='price'
                            control={control}
                            rules={{ min: 0, max: 9999999 }}
                            render={({ field }) => <TextField variant='outlined' label='Price' type='number' InputProps={{ startAdornment: <InputAdornment sx={{ mr: 1 }}>$</InputAdornment> }} required {...field} />}
                        />
                        <Controller
                            name='condition'
                            control={control}
                            render={({ field }) => <TextField {...field} variant='outlined' label='Condition' select required>
                                <MenuItem value='new'>New</MenuItem>
                                <MenuItem value='used'>Used</MenuItem>
                                <MenuItem value='open_box'>Open Box (not used)</MenuItem>
                            </TextField>}
                        />
                        <Controller
                            name='description'
                            control={control}
                            render={({ field }) => <TextField {...field} variant='outlined' label='Description' multiline rows={5} />}
                        />
                        <Controller
                            name='exchange_method'
                            control={control}
                            render={({ field }) => <ToggleButtonGroup {...field} fullWidth color='primary' defaultValue='pickup'>
                                <ToggleButton value='pickup'>Pickup</ToggleButton>
                                <ToggleButton value='delivery'>Delivery</ToggleButton>
                            </ToggleButtonGroup>}
                        />
                        
                    </Stack>
                </Grid>
                <Grid item xs={12} display='flex' justifyContent='center'>
                    <Button variant='contained' size='large' type='submit'>Publish</Button>
                </Grid>
            </Grid>
        </Box>
    </Container>
}

export default CreateItem