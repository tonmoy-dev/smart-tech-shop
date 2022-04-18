import { Container, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
const Footer = () => {
    return (
        <Box sx={{ mt: 5 }} style={{ backgroundColor: '#fff', border: '1px solid #ddd' }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                            CONTACT US
                        </Typography>
                        <List>
                            <ListItem sx={{ p: 0 }}>
                                {/* <ListItemIcon>
                        </ListItemIcon> */}
                                <ListItemText primary="The Barn, Ullenhall, Henley in Arden B578 5CC, England" />
                            </ListItem>
                            <ListItem sx={{ p: 0 }}>
                                {/* <ListItemIcon>
                        </ListItemIcon> */}
                                <ListItemText primary="Call Us: (012) 800 456 789" />
                            </ListItem>
                            <ListItem sx={{ p: 0 }}>
                                {/* <ListItemIcon>
                        </ListItemIcon> */}
                                <ListItemText primary="Email: support@masstechnologist.com" />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                            OPENING HOURS
                        </Typography>
                        <List>
                            <ListItem sx={{ p: 0 }}>
                                {/* <ListItemIcon>
                        </ListItemIcon> */}
                                <ListItemText primary="Mon - Fri: 8AM - 10PM" />
                            </ListItem>
                            <ListItem sx={{ p: 0 }}>
                                {/* <ListItemIcon>
                        </ListItemIcon> */}
                                <ListItemText primary="Sat: 9AM-8PM" />
                            </ListItem>
                            <ListItem sx={{ p: 0 }}>
                                {/* <ListItemIcon>
                        </ListItemIcon> */}
                                <ListItemText primary="Sun & National Holidays : Closed" />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{ bgcolor: '#FF3E30', p:2, color: '#fff',mt:2 }}>
                <Typography style={{ textAlign: 'center' }} variant="subtitle1" gutterBottom component="div">
                    Copyright © 2021 Smart Tech Shop. All Rights Reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer ;