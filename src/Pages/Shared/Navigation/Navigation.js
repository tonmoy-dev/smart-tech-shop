import MenuIcon from '@mui/icons-material/Menu';
import { Button, Typography, useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@mui/styles';
import React from "react";
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();

    const [state, setState] = React.useState(false);

    const theme = useTheme();
    const useNavStyle = makeStyles({
        navItem: {
            color: '#fff',
            textDecoration: 'none'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display:'none',
              }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display:'none',
              }
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign:'right',
              }
        },
        drawerLink: {
            textDecoration: 'none',
            color: '#000',
        },
        drawerItem: {
            padding: '20px 0 20px 30px !important'
        }
    });
    const { navItem, navIcon, navLogo, navItemContainer, drawerLink, drawerItem } = useNavStyle();

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                <ListItem className={drawerItem} button >
                    <ListItemText> <Link className={drawerLink} to="/">Home</Link> </ListItemText>
                </ListItem>
                <Divider />
                <ListItem className={drawerItem} button >
                    <ListItemText> <Link className={drawerLink} to="/login">Login</Link> </ListItemText>
                </ListItem>
                <Divider />
                <ListItem className={drawerItem} button >
                    <ListItemText> <Link className={drawerLink} to="/">Explore</Link> </ListItemText>
                </ListItem>
                <Divider />
            </List>
          
        </Box>
    );
    
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={()=> setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            SmartTechShop
                        </Typography>
                        <Box className={navItemContainer}>
                            {
                                user.email ?
                                    <Button onClick={logOut} variant="contained">LogOut</Button>
                            
                                    :
                                    <Link style={{ textDecoration: 'none' }} to="/login">
                                        <Button variant="contained">Login</Button>
                                    </Link>
                            }
                            <Link className={navItem} to="/"><Button variant="contained">Home</Button></Link>
                        </Box>
                    
                    </Toolbar>
                </AppBar>
            </Box>
            <Box>
                    <React.Fragment >
                        <Drawer
                            open={state}
                            onClose={()=> setState(false)}
                        >
                            {list}
                        </Drawer>
                    </React.Fragment>
            </Box>
        </>
    );
}

export default Navigation ;