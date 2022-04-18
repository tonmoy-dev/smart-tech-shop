import { Alert, Button, Card, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import useCustomStyles from "../../../../Hooks/useCustomStyles";

const MakeAdmin = () => {
    const { formStyle } = useCustomStyles();
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    // const { token } = useAuth();
    const handleFieldOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = (e) => {
        const user ={email}
        fetch('https://smart-tech-shop-server.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                // 'authorization':`Bearer ${token}`,
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                    setEmail('');
                }
            })
        

        e.preventDefault();
    }
    return (
        <Grid container>
            <Grid item xs={12} md={4} sx={{mx:'auto'}}>
                <Card sx={{ p: 4 }} variant="outlined">
                    <Typography sx={{ textAlign:'center'}} variant="h5" gutterBottom component="div">
                        Make An Admin
                    </Typography>
                    <form onSubmit={handleAdminSubmit} style={formStyle}>
                        <TextField
                            sx={{width:'90%', mb:2}}
                            label="Email"
                            type="email"
                            onBlur={handleFieldOnBlur}
                            variant="standard" />
                        <Button color="primary" type="submit" variant="contained">Make Admin</Button>
                    </form>
                    {success && <Alert severity="success">Making Admin successfully!</Alert>}
                </Card>
            
            </Grid>
            
        </Grid>
    );
};

export default MakeAdmin ;