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
      marginRight:'10px',
      textDecoration: 'none',
    },
    navIcon: {
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      }
    },
    navItemContainer: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      }
    },
    navLogo: {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'right',
      }
    },
    drawerLink: {
      textDecoration: 'none',
      color: '#FF3E30',
      padding: '20px 0 20px 10px',
	  fontWeight:'600'
    },
    drawerItem: {
         //   
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
    padding: '16px',
    resize: 'none',
    fontSize: '14px',
    fontFamily: 'Roboto'
  };

  // table style
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#FF3E30',
      color: theme.palette.common.white,
      fontSize: 16,
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

  // purchase modal style
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    border: '2px solid #ddd',
    boxShadow: 24,
    padding: '40px 0',
    textAlign: 'center',
    borderRadius: '5px'
  };

  return {
    navItem, navIcon, navLogo, navItemContainer, drawerLink, drawerItem, formStyle, fieldStyle, StyledTableCell, StyledTableRow,modalStyle
  };
};

export default useCustomStyles;
