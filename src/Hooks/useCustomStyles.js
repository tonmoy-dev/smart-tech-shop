import { useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useCustomStyles = () => {
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
            padding: '20px 0 20px 10px'
        },
        drawerItem: {
            
        }
    });
    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        JustifyContent: 'center',   
    }
    const fieldStyle = {
        width: '80%',
        marginBottom: '10px',
        padding: '20px',
        resize:'none'
    }


    const { navItem, navIcon, navLogo, navItemContainer, drawerLink, drawerItem } = useNavStyle();

    return {
        navItem, navIcon, navLogo, navItemContainer, drawerLink, drawerItem,formStyle,fieldStyle
    };
}

export default useCustomStyles;
