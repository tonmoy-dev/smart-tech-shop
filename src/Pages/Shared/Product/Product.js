import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { name, description, price, img, _id} = product;
    return (
        <Grid sx={{mb:1}} item xs={12} md={4}>
            <Card 
				sx={{
					"&:hover": {
					  boxShadow:'#7bb519 0px 0px 0px 2px, #7bb519 0px 4px 6px -1px, rgb(255 255 255 / 8%) 0px 1px 0px inset'
					},
					p:1,borderRadius:'5px'
				  }}
				variant="outlined">
                <CardActionArea>
                    <CardMedia
                        sx={{
                            width: '100%', objectFit:'contain'}}
                        component="img"
                        height="250"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div" color="text.secondary"> 
                            Price: {price} USD
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link style={{textDecoration:'none'}} to={`/purchaseProduct/${_id}`}>
                        <Button sx={{backgroundColor:'#7bb519',ml:1}}  size="large" variant="contained" color="success">
                            Buy Now
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product ;