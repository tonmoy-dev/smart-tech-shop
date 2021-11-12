import { Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import React from "react";
import { useForm } from "react-hook-form";
import useCustomStyles from '../../../../Hooks/useCustomStyles';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const {formStyle,fieldStyle} = useCustomStyles();
    const onSubmit = data => {
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully added');
                    reset();
            }
        })
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
                            <input style={fieldStyle} placeholder="Product Image Url" {...register("img",{ required: true })} />
                            <input style={fieldStyle} placeholder="Product Name" {...register("name", { required: true })} />
                            <textarea style={fieldStyle} placeholder="Product Description" {...register("description",{ required: true })} />
                            <input style={fieldStyle} placeholder="Product Price" type="number" {...register("price",{ required: true })} />
                            <input style={fieldStyle} type="submit" />
                        </form>
                    </Card>
                </Grid>
                
            </Grid>
        </div>
    );
}

export default AddProduct;

