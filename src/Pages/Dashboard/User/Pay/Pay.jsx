import { Card, Grid, Typography } from "@mui/material";
import React from "react";

const Pay = () => {
    const payStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7bb519',
        color: '#fff',
        height: '250px'
    }
    return (
        <div>
            <Grid container xs={12} md={5} sx={{mx:'auto',py:3}}>
                <Card variant="outlined" sx={{px:5}} style={payStyle}>
                    <Typography variant="h4">
                        Payment Sytem Coming Soon
                    </Typography>
                </Card>
            </Grid>
        </div>
    );
};

export default Pay ;