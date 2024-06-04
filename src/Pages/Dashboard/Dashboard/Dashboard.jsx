import MenuIcon from '@mui/icons-material/Menu';
import { Button, List, ListItem, ListItemText } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import useCustomStyles from '../../../Hooks/useCustomStyles';
import AddProduct from '../Admin/AddProduct/AddProduct';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import ManageAllOrders from '../Admin/ManageAllOrders/ManageAllOrders';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import MyOrders from '../User/MyOrders/MyOrders/MyOrders';
import Pay from '../User/Pay/Pay';
import Review from '../User/Review/Review';

// dashboard drawer
const drawerWidth = 200;
function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { logOut, admin } = useAuth();
    const { drawerItem,drawerLink } = useCustomStyles();
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            {!admin && <List>
                <ListItem className={drawerItem} button >
                    <ListItemText>
                        <Link className={drawerLink} to="/">Home</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem className={drawerItem} button >
                    <ListItemText>
                        <Link className={drawerLink} to={`${url}/pay`}>Pay</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem className={drawerItem} button >
                    <ListItemText>
                        <Link className={drawerLink} to={`${url}`}>My Orders</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem className={drawerItem} button >
                    <ListItemText>
                        <Link className={drawerLink} to={`${url}/review`}>Review</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem className={drawerItem} button >
                    <ListItemText>
                    <Button color="primary" onClick={logOut} variant="contained">LogOut</Button>
                    </ListItemText>
                </ListItem>
                <Divider />
            </List>}
            {admin && <List>
                <ListItem className={drawerItem} button >
                    <ListItemText>
                        <Link className={drawerLink} to="/">Home</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem className={drawerItem} button >
                    <ListItemText>
                        <Link className={drawerLink} to={`${url}`}>Manage All Orders</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem className={drawerItem} button >
                    <ListItemText>
                        <Link className={drawerLink} to={`${url}/addProduct`}>Add A Product</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem className={drawerItem} button >
                    <ListItemText>
                        <Link className={drawerLink} to={`${url}/makeAdmin`}>Make Admin</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem className={drawerItem} button >
                    <ListItemText>
                        <Link className={drawerLink} to={`${url}/manageProducts`}>Manage All Products</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem className={drawerItem} button >
                    <ListItemText>
                    <Button color="primary" onClick={logOut} variant="contained">LogOut</Button>
                    </ListItemText>
                </ListItem>
                <Divider />
            </List>}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
					backgroundColor:'#FF3E30'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {!admin && <Switch>
                    <Route exact path={path}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                </Switch>}
                {admin && <Switch>
                    <Route exact path={path}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                </Switch>}
            </Box>
        </Box>
    );
};

export default Dashboard;
