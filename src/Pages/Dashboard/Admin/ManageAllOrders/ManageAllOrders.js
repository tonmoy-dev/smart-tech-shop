import { Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';
import * as React from 'react';
import useCustomStyles from '../../../../Hooks/useCustomStyles';

const ManageAllOrders = () => {
    const [orders, setOrders] = React.useState([]);
    
    React.useEffect(() => {
        fetch(`https://smart-tech-shop-server.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrders(data))
        
    }, []);
    const { StyledTableCell, StyledTableRow } = useCustomStyles();
    
    return (
        <Box>
            <Typography sx={{ textAlign: 'left', my:2 }} variant="h5" component="div" gutterBottom>
                Manage All Orders
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Product Name</StyledTableCell>
                            <StyledTableCell align="center">Price</StyledTableCell>
                            <StyledTableCell align="center">Email</StyledTableCell>
                            <StyledTableCell align="center">Update Status</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <StyledTableRow key={order._id}>
                                <StyledTableCell component="th" scope="row">
                                    {order.productName}
                                </StyledTableCell>
                                <StyledTableCell align="center">${order.productPrice}</StyledTableCell>
                                <StyledTableCell align="center">{order.email}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <Button color="primary" variant="contained">Pending</Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
        </Box>
    
    );
};

export default ManageAllOrders;