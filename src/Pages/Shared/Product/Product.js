import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { name, description, price, img, _id} = product;
    return (
        <Grid sx={{mb:1}} item xs={12} md={3}>
            <Card 
				sx={{
					"&:hover": {
					  boxShadow:'#FF3E30 0px 0px 0px 2px, #FF3E30 0px 4px 6px -1px, rgb(255 255 255 / 8%) 0px 1px 0px inset'
					},
					p:0.5, borderRadius:'5px'
				  }}
				variant="outlined">
                <CardActionArea>
                    <CardMedia
                        sx={{
                            width: '100%', objectFit:'contain'}}
                        component="img"
                        height="180"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description.slice(0,100)}...
                        </Typography>
                        <Typography variant="body2" sx={{marginTop:"10px"}} gutterBottom component="div" color="text.secondary"> 
                            Price: {price} USD
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link style={{textDecoration:'none'}} to={`/purchaseProduct/${_id}`}>
                        <Button sx={{ml:1}} color="primary"  size="large" variant="contained" >
                            Buy Now
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product ;