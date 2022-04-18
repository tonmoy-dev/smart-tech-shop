import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Alert, Button, Container, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import GoogleButton from 'react-google-button'
import Navigation from '../../Shared/Navigation/Navigation.js';
import Footer from '../../Shared/Footer/Footer.js';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Login = () => {
    const [userLoginData, setUserLoginData] = useState({});
    const { user, logInUser, signInWithGoogle, loading, authError } = useAuth();
	const [progress, setProgress] = React.useState(0);
	const [buffer, setBuffer] = React.useState(10);
    const location = useLocation();
    const history = useHistory();
	// Linear Progress bar
	
	const progressRef = React.useRef(() => {});
	  React.useEffect(() => {
		progressRef.current = () => {
		  if (progress > 100) {
			setProgress(0);
			setBuffer(10);
		  } else {
			const diff = Math.random() * 10;
			const diff2 = Math.random() * 10;
			setProgress(progress + diff);
			setBuffer(progress + diff + diff2);
		  }
		};
	});
	React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
		  clearInterval(timer);
		};
	}, []);
	
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
		<>
		<Navigation></Navigation>
        <Container>
            <Grid container spacing={0}>
                <Grid item sx={{ mt: 8, mx: 'auto', backgroundColor: '#fff' }} xs={10} sm={8} md={5} lg={5}>
					<Paper elevation={6}>
					<Box sx={{py:5}}>
                    <Typography sx={{color:'#000000', textAlign: 'center',mb:2 }} variant="h5" gutterBottom>Get's started</Typography>
					<Box sx={{textAlign:'center',mb:2}}>
						Don't have an account?
						<NavLink
                            style={{ textDecoration: 'none',color:'#FF3E30',marginLeft:'10px', fontWeight:'600' }}
                            to="/register">Register Now
						</NavLink>
					</Box>
                    <form onSubmit={handleLogInSubmit} style={{ width: '80%', margin: ' 0 auto' }}>

                        <TextField sx={{ width: '100%', mb: 2 }}
                            id="outlined-basic"
                            label="Email"
                            name="email"
                            onBlur={handleInputOnBlur}
                            variant="outlined" 
							required />
                        
                        <FormControl sx={{ width: '100%', mb: 2 }} variant="outlined">
                            <InputLabel required htmlFor="outlined-adornment-password">Password</InputLabel>
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
                        <Button sx={{width: '100%',height:'50px', mb: 2, textTransform:'capitalize',fontSize:'16px'}} color="primary" type="submit" variant="contained">Login</Button>
						<GoogleButton label="Continue with Google" style={{width: '100%', marginBottom:'10px',textAlign:'center'}} type="dark" onClick={handleGoogleSignIn} />
                        
                        {loading && <LinearProgress variant="buffer" value={progress} sx={{my:3}} valueBuffer={buffer} />}
                        {
                            user?.email && <Alert severity="success">Login successfully!</Alert>
                        }
                        {
                            authError && <Alert severity="error">{authError}</Alert>
                        }
                        
						
                    </form>
					</Box>
					</Paper>
                </Grid>
            </Grid>
        </Container>
		<Footer></Footer>
		</>
    );
};

export default Login ;