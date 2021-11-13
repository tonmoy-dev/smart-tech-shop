import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Navigation from "../Shared/Navigation/Navigation";

const PurchaseProduct = () => {
    const { productId } = useParams();
    const { user } = useAuth();
    const [product, setProduct] = useState({});
    const [purchaseInfo, setPurchaseInfo] = useState({});
    
    // load product
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
        
    }, [productId]);
    
    // handle input fields
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...purchaseInfo };
        newInfo[field] = value;
        setPurchaseInfo(newInfo);
    }
    const handlePurchaseSubmit = (e) => {
        // collect data
        const buyProduct = {
            ...purchaseInfo,
            email: user.email,
            productName: product.name,
            productPrice: product.price
        }
        // send to the server
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(buyProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('succesfully purchased')
                }
        })
        e.preventDefault();
    }
    return (
        <>
            <Navigation></Navigation>
            <Grid container spacing={2} sx={{py:4}}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={product.img}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <form onSubmit={handlePurchaseSubmit}>
                        <h3>{product._id}</h3>
                        <TextField sx={{ width: '90%', mb: 2 }}
                            required
                            id="outlined-basic" variant="outlined"
                            label="Name"
                            name="name"
                            defaultValue=""
                            onBlur={handleOnBlur}
                        />
                        <TextField sx={{ width: '90%', mb: 2 }}
                            label="Address"
                            name="address"
                            onBlur={handleOnBlur}
                            defaultValue=""
                            id="outlined-basic" variant="outlined"
                        />
                        <TextField sx={{ width: '90%', mb: 2 }}
                            required
                            label="Email"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            id="outlined-basic" variant="outlined"
                            InputProps={{
                                readOnly: true,
                              }}
                        />
                        <TextField sx={{ width: '90%', mb: 2 }}
                            label="Phone Number"
                            name="phone"
                            onBlur={handleOnBlur}
                            defaultValue=""
                            id="outlined-basic" variant="outlined"
                        />
                        <TextField sx={{ width: '90%', mb: 2 }}
                            label="Country"
                            name="country"
                            onBlur={handleOnBlur}
                            defaultValue=""
                            id="outlined-basic" variant="outlined"
                        />
                        <Button type="submit" variant="contained">
                            Buy
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </>
    );
};

export default PurchaseProduct;
