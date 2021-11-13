import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const CustomerReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/customerReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <Box sx={{ flexGrow: 1, py:5}}>
            <Container>
                <Typography style={{textAlign:'center'}} sx={{mb:3}} variant="h4">
                    Customer Reviews
                </Typography>
            <Grid container>
                {reviews.map(review =>
                        <Review
                            key={review._id}
                            review={review}
                        ></Review>
                    )}
            </Grid>
            </Container>
            </Box>
    );
};

export default CustomerReviews;