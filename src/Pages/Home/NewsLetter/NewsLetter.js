import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const NewsLetter = () => {
    return (
        <Container sx={{py:6}}>
            <Typography sx={{textAlign:'center',mb:3}} variant="h4" gutterBottom component="div">
            Our NewsLetter
            </Typography>
            <Box sx={{ width: '70%', mx: 'auto', display:'flex',flexWrap: 'wrap',justifyContent: 'center'}} >
                <TextField sx={{flexGrow: 1 }} id="outlined-basic" label="Enter your email address here..." variant="outlined" />
                <Button variant="contained" color="primary"  size="large">Subscribe</Button>
            </Box>
        </Container>
    );
};

export default NewsLetter ;