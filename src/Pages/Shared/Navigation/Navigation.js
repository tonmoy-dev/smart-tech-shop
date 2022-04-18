import MenuIcon from '@mui/icons-material/Menu';
import { Button, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import React from "react";
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import useCustomStyles from '../../../Hooks/useCustomStyles';

const Navigation = () => {
    const { user, logOut } = useAuth();
    const [state, setState] = React.useState(false);

    const { navItem, navIcon, navLogo, navItemContainer, drawerLink, drawerItem } = useCustomStyles();
    const list = (
		
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
				{/* small devices */}
                <ListItem
                    className={drawerItem}
                    button >
                    <ListItemText> <Link
                        className={drawerLink}
                        to="/">Home</Link> </ListItemText>
                </ListItem>
                <Divider />
                <ListItem className={drawerItem} button >
                    <ListItemText> <Link className={drawerLink} to="/exploreProducts">Explore</Link> </ListItemText>
                </ListItem>
                <Divider />
                {   user.email &&
                    <ListItem className={drawerItem} button >
                        <ListItemText> <Link className={drawerLink} to="/dashboard">Dashboard</Link> </ListItemText>
                    </ListItem>
                }
                <Divider />
                <ListItem className={drawerItem} button > 
                    {/* <ListItemText> <Link className={drawerLink} to="/login">Login</Link> </ListItemText> */}
                    <ListItemText>
                        {   user.email ?
                            <Button sx={{backgroundColor:'#7bb519'}} color="success" onClick={logOut} variant="contained">LogOut</Button>
                            :
                            <Link style={{ textDecoration: 'none' }} to="/login">
                                <Button sx={{backgroundColor:'#7bb519'}} color="success" variant="contained">Login</Button>
                            </Link>
                        }
                    </ListItemText>
                </ListItem>
                <Divider />
                
            </List>
        </Box>
    );
    
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ color:'#000', backgroundColor:'transparent', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px' }}>
                    <Toolbar>
						<Box className={navIcon}>
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{ mr: 0}}
                            onClick={()=> setState(true)}
                        >
                            <MenuIcon/>
                        </IconButton>
						</Box>
						<div className={navLogo} style={{ fontSize:'24px',flexGrow: 1, marginLeft:'30px', color: '#FF3E30',fontWeight:'700' }}>
						SMART<span style={{color:'#000'}}>life</span>
						</div>
                       
						
						{/* medium & large devices */}
                        <Box className={navItemContainer}>
                            <Link className={navItem} to="/">
								<Button color="primary" variant="contained">Home</Button>
							</Link>
                            <Link className={navItem} to="/dashboard">
								<Button color="primary" variant="contained">Dashboard</Button>
							</Link>
                            {   user.email ?
                                    <Button onClick={logOut} color="primary" variant="contained">LogOut</Button>
                                    :
                                    <Link style={{ textDecoration: 'none' }} to="/login">
                                        <Button color="primary" variant="contained">Login</Button>
                                    </Link>
                            }
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