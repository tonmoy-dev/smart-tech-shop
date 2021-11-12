import { Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import React from "react";
import { useForm } from "react-hook-form";
import useCustomStyles from '../../../../Hooks/useCustomStyles';
// const axios = require('axios');

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const {formStyle,fieldStyle} = useCustomStyles();
    const onSubmit = data => {
        /* axios.post('https://rocky-brushlands-10899.herokuapp.com/booking_places', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added succesfully');
                    reset();
            }
        }) */
    };
    

    return (
        <div>
            <Grid container >
                <Grid item xs={12} md={5} sx={{mx:'auto'}}>
                    <Card sx={{ p: 3}} variant="outlined">
                        <Typography sx={{ textAlign: 'center', mb: 3 }} variant="h5" component="div" gutterBottom>
                            Add a New Product
                        </Typography>
                
                        <form style={formStyle} onSubmit={handleSubmit(onSubmit)}>
                            <input style={fieldStyle} placeholder="Insert Image Url" {...register("img")} />
                            <input style={fieldStyle} placeholder="Booking Place Name" {...register("name", { required: true, maxLength: 20 })} />
                            <textarea style={fieldStyle} placeholder="Description" {...register("description")} />
                            <input style={fieldStyle} placeholder="Booking Price" type="number" {...register("price")} />
                            <input style={fieldStyle} type="submit" />
                        </form>
                    </Card>
                </Grid>
                
            </Grid>
        </div>
    );
}

export default AddProduct;

