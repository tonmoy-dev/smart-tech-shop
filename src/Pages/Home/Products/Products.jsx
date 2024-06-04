import { Container, Grid, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { serverBaseURL } from "../../../utility/getURL";
import Product from "../../Shared/Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`${serverBaseURL}/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0, 8));
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Box sx={{ flexGrow: 1, py: 3 }}>
        <Container>
          <Typography
            sx={{
              mb: 5,
              textAlign: "center",
              lineHeight: "0.5",
              fontWeight: "500",
            }}
            variant="h4"
            component="div"
          >
            Our Best Products
            <hr style={{ width: "21%", border: "0.5px solid #FF3E30" }} />
          </Typography>
          <Grid container spacing={2}>
            {isLoading && <CircularProgress color="secondary" />}
            {!isLoading &&
              products.map((product) => (
                <Product key={product.name} product={product}></Product>
              ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Products;
