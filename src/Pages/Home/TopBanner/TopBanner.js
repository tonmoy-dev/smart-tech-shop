import { Button, Container } from "@mui/material";
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import Img from "../../../images/headphone-banner.jpg";

// background image
const bannerImg = {
    backgroundImage: `url(${Img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',    
}
// banner custom style
const bannerStyle = {
    height: 550,
    color:'#fff'
}

const TopBanner = () => {
    return (
        <div style={bannerImg}>
            <Container>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column', justifyContent: 'center',
                    alignItems:'flex-start'
                }} style={bannerStyle}>
                    <Typography variant="h3" gutterBottom component="div">
                        Best Solo <br/>
                        Headphones
                    </Typography>
                    <Typography sx={{ mb:5}} variant="subtitle2" gutterBottom component="div">
                        Custom Print & Innovative Design
                    </Typography>
                    <Button variant="contained">
                        <Link style={{textDecoration:'none',color:'#fff'}} to="/exploreProducts">Explore</Link>
                    </Button>
                </Box>
            </Container>
            
        </div>
    );
};

export default TopBanner ;