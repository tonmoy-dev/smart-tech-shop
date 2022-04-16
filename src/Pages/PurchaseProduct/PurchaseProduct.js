import { Container, Grid } from "@mui/material";
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
        fetch(`https://smart-tech-shop-server.herokuapp.com/products/${productId}`)
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
        fetch('https://smart-tech-shop-server.herokuapp.com/orders', {
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
            <Container>
            <Grid container spacing={2} sx={{py:5}}>
                <Grid item xs={12} md={6}>
                    <Card variant="outlined" sx={{ maxWidth: 345, boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px' }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="auto"
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
                            <Typography sx={{ml:1}} gutterBottom variant="h5" component="div">
                                Price: ${product.price}
                            </Typography>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} style={{border:'2px solid #ddd', padding:'20px 0',borderRadius:'10px'}}>
                    <form onSubmit={handlePurchaseSubmit} style={{width:'80%',margin:'0 auto'}}>
                    <Typography sx={{textAlign:'center',mb:5}} variant="h4" gutterBottom component="div">
                    Fill The Form
      </Typography>
                    <Typography variant="body" gutterBottom component="div">
                    Product Name: {product.name}
      </Typography>
                        <TextField sx={{ width: '100%', mb: 2 }}
                            required
                            id="outlined-basic" variant="outlined"
                            label="Name"
                            name="name"
                            defaultValue=""
                            onBlur={handleOnBlur}
                        />
                        <TextField sx={{ width: '100%', mb: 2 }}
                            label="Address"
                            name="address"
                            onBlur={handleOnBlur}
                            defaultValue=""
                            id="outlined-basic" variant="outlined"
                        />
                        <TextField sx={{ width: '100%', mb: 2 }}
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
                        <TextField sx={{ width: '100%', mb: 2 }}
                            label="Phone Number"
                            name="phone"
                            onBlur={handleOnBlur}
                            defaultValue=""
                            id="outlined-basic" variant="outlined"
                        />
                        <TextField sx={{ width: '100%', mb: 2 }}
                            label="Country"
                            name="country"
                            onBlur={handleOnBlur}
                            defaultValue=""
                            id="outlined-basic" variant="outlined"
                        />
                        <Button sx={{backgroundColor:'#7bb519'}} color="success" size="large" type="submit" variant="contained">
                            Book Order
                        </Button>
                    </form>
                </Grid>
            </Grid>
            </Container>
        </>
    );
};

export default PurchaseProduct;
