import { Card, Grid, Typography } from "@mui/material";
import React from "react";

const Review = ({review}) => {
    return (
        <div>
            <Grid item item xs={12} md={12} sx={{mb:1}}>
                <Card variant="outlined" sx={{px:3,py:2}}>
                    <Typography variant="h6" component="div">
                        {review.name}
                    </Typography>
                    <Typography  sx={{ fontSize: 14 }}  color="text.secondary">
                        {review.customerReview}
                    </Typography>
                </Card>
            </Grid>
                
        </div>
    );
};

export default Review;