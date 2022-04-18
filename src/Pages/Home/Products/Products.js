import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Product from "../../Shared/Product/Product";

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://smart-tech-shop-server.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0,8)))
        
    }, []);

    return (
        <div>
            <Box sx={{ flexGrow: 1, py:3 }}>
                <Container>
                    <Typography sx={{ mb: 5, textAlign: 'center', lineHeight:'0.5', fontWeight:'500' }} variant="h4" component="div">
                        Our Best Products 
						<hr style={{width:'21%',border: '0.5px solid #FF3E30'}}/>
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