import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Product from "../../Shared/Product/Product";

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
        
    }, []);

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography sx={{ my: 4, textAlign: 'center' }} variant="h4" component="div">
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