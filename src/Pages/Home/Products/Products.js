import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Product from "../../Shared/Product/Product";

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://smart-tech-shop-server.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0,6)))
        
    }, []);

    return (
        <div>
            <Box sx={{ flexGrow: 1, py:3 }}>
                <Container>
                    <Typography sx={{ mb: 5, textAlign: 'center' }} variant="h4" component="div">
                        OUR BEST PRODUCTS
                    </Typography>
                    <Grid container spacing={2}>
                        {
                            products.map(product =>
                                <Product
                                    key={product.name}
                                    product={product}
                                ></Product>
                            )}
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Products ;