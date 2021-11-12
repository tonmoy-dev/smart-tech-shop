import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { name, description, price, img, _id} = product;
    return (
        <Grid item xs={12} md={4}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
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
                        <Typography variant="body2" color="text.secondary">
                            Price: {price} USD
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={`/purchaseProduct/${_id}`}>
                        <Button size="small" variant="contained" color="primary">
                            Buy Now
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product ;