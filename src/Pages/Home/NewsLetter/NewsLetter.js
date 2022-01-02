import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
const NewsLetter = () => {
    return (
        <Container sx={{py:6}}>
            <Typography sx={{textAlign:'center',mb:3}} variant="h4" gutterBottom component="div">
            SIGN UP FOR LATEST NEWS
            </Typography>
            <Box sx={{ width: '70%', mx: 'auto', display:'flex',flexWrap: 'wrap',justifyContent: 'center'}} >
                <TextField sx={{flexGrow: 1 }} id="outlined-basic" label="Enter your email address here..." variant="outlined" />
                <Button sx={{backgroundColor:'#7bb519'}} variant="contained" color="success"  size="large">Subscribe</Button>
            </Box>
        </Container>
    );
};

export default NewsLetter ;