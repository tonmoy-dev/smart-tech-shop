import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../Shared/Navigation/Navigation";

const PurchaseProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
        
    }, []);
    return (
        <>
            <Navigation></Navigation>
            <Grid container spacing={2}>
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

                </Grid>
            </Grid>
        </>
    );
};

export default PurchaseProduct;
