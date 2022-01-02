import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Alert, Button, CircularProgress, Container, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const [userRegisterData, setUserRegisterData] = useState({});
    const { user, registerUser, signInWithGoogle, loading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();

    // MUI Input Adornments State
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });
    // MUI Input Adornments handlers
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // handle input fields onBlur
    const handleInputOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...userRegisterData };
        newRegisterData[field] = value;
        setUserRegisterData(newRegisterData);
    }

    // handle Login Submit
    const handleRegisterSubmit = e => {
        if (userRegisterData.password !== userRegisterData.password2) {
            alert('Passwords wrong');
            return;
        }
        registerUser(userRegisterData.email, userRegisterData.password, userRegisterData.name, history);
        e.preventDefault();
    }

    // handle google Sign In
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <Container>
            <Grid container spacing={0}>
                <Grid item sx={{ mt: 10, mx: 'auto', backgroundColor: '#fff' }} xs={12} md={4}>
                    <Typography sx={{color:'#7bb519', textAlign: 'center',mb:3 }} variant="h4" gutterBottom>Create An Account</Typography>
                    {
                        !loading && <form onSubmit={handleRegisterSubmit} style={{ width: '80%', margin: ' 0 auto' }}>

                            <TextField sx={{ width: '100%', mb: 2 }}
                                id="outlined-basic"
                                label="Name"
                                name="name"
                                type="text"
                                onBlur={handleInputOnBlur}
                                variant="outlined" />
                            <TextField sx={{ width: '100%', mb: 2 }}
                                id="outlined-basic"
                                label="Email"
                                name="email"
                                onBlur={handleInputOnBlur}
                                variant="outlined" />
                        
                            <FormControl sx={{ width: '100%', mb: 2 }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                    name="password"
                                    onBlur={handleInputOnBlur}
                                />
                            </FormControl>
                            <TextField sx={{ width: '100%', mb: 2 }}
                                id="outlined-basic"
                                label="Confirm Password"
                                name="password2"
                                type="password"
                                onBlur={handleInputOnBlur}
                                variant="outlined" />
                            <Button sx={{backgroundColor:'#7bb519',width: '100%', mb: 2}} type="submit" variant="contained">Register Now</Button>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login">
                                <Button color="success" style={{ width: '100%', mx: 'auto' }} variant="text">Existing User? Please Login</Button>
                            </NavLink>
                            {
                                user?.email && <Alert severity="success">Login successfully!</Alert>
                            }
                            {
                                authError && <Alert severity="error">{authError}</Alert>
                            }
                            <Button sx={{backgroundColor:'#7bb519',width: '100%', mt: 2}} color="success" onClick={handleGoogleSignIn} variant="contained">Continue With Google</Button>
                        </form>
                    }           
                    {
                        loading && <CircularProgress />
                    }
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register ;