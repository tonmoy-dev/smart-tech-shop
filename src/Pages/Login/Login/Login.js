import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Alert, Button, CircularProgress, Container, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const [userLoginData, setUserLoginData] = useState({});
    const { user, logInUser, signInWithGoogle, loading, authError } = useAuth();
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
        const newLoginData = { ...userLoginData };
        newLoginData[field] = value;
        setUserLoginData(newLoginData);
    }

    // handle Login Submit
    const handleLogInSubmit = e => {
        logInUser(userLoginData.email, userLoginData.password, location, history);
        e.preventDefault();
    }

    // handle google Sign In
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <Container>
            <Grid container spacing={0}>
                <Grid item sx={{ mt: 10, p: 3, mx: 'auto', backgroundColor: '#fff' }} xs={8} md={4}>
                    <Typography sx={{ textAlign: 'center' }} variant="h4" gutterBottom>Login</Typography>
                    <form onSubmit={handleLogInSubmit} style={{ width: '80%', margin: ' 0 auto' }}>

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
                        <Button sx={{ width: '100%', mb: 2 }} type="submit" variant="contained">Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button style={{ width: '100%', mx: 'auto' }} variant="text">New User? Please Register</Button>
                        </NavLink>
                        {loading && <CircularProgress/>}
                        {
                            user?.email && <Alert severity="success">Login successfully!</Alert>
                        }
                        {
                            authError && <Alert severity="error">{authError}</Alert>
                        }
                        <Button sx={{ width: '100%', mt: 2 }} onClick={handleGoogleSignIn} variant="contained">Continue With Google</Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login ;