import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import bgImg from "../../../../images/reviewBg/reviewBg.jpg";
import Review from "../Review/Review";

const CustomerReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://smart-tech-shop-server.herokuapp.com/customerReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    const reviewBg = {
        background: `url(${bgImg})`,
        backgroundColor: 'rgba(45, 58, 74, 0.9)',
        backgroundBlendMode: 'darken,luminosity ',
        backgroundSize: 'cover'
    }
    return (
        <Box style={reviewBg} sx={{ flexGrow: 1, py:6}}>
            <Container>
                <Typography style={{textAlign:'center', color:'#fff'}} sx={{mb:3}} variant="h4">
                    Customer Reviews
					</Typography>
            <Grid container spacing={2}>
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