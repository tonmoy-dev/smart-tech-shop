import { useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@mui/styles';

const useCustomStyles = () => {
    const theme = useTheme();

    // navigation style
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
    const { navItem, navIcon, navLogo, navItemContainer, drawerLink, drawerItem } = useNavStyle();

    // form style
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

    // table style
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));


    return {
        navItem, navIcon, navLogo, navItemContainer, drawerLink, drawerItem,formStyle,fieldStyle,StyledTableCell,StyledTableRow
    };
}

export default useCustomStyles;
