import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../../Hooks/useAuth";

const Review = () => {
    const { user } = useAuth();
    const [review, setReview] = useState('');

    // handle review
    const handleFieldOnBlur = (e) => {
        setReview(e.target.value);
    }
    const handleSendReview = (e) => {
        const userReview = {
            email: user.email,
            name: user.displayName,
            customerReview: review,
        }
        fetch('https://smart-tech-shop-server.herokuapp.com/customerReviews', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('succesfully purchased')
                }
            })
            
            setReview('');
        e.preventDefault();
    }
    

    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={5} sx={{ mx: 'auto' }}>
                    <Card sx={{ p: 3 }} variant="outlined">
                        <CardContent>
                            <Typography sx={{ mb: 5, textAlign: 'center' }} variant="h4" gutterBottom>
                                Customer Review
                            </Typography>
                            <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                                Hi, {user.displayName}
                            </Typography>
                            <Typography sx={{ mb: 2 }} variant="body1">
                                Email: {user.email}
                            </Typography>
                            <form onSubmit={handleSendReview} >
                                <TextField
                                    sx={{ width: '100%',mb:2}}
                                    id="outlined-textarea"
                                    label="Write Your Review Here"
                                    onBlur={handleFieldOnBlur}
                                    placeholder="Review"
                                    multiline
                                />
                                <Button color="primary"  type="submit" variant="contained">Send Review</Button>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Review ;