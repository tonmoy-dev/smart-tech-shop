import { Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';
import * as React from 'react';
import useAuth from '../../../../../Hooks/useAuth';
import useCustomStyles from '../../../../../Hooks/useCustomStyles';
import OrderCancelModal from '../OrderCancelModal/OrderCancelModal';

const MyOrders = () => {
    const [orders, setOrders] = React.useState([]);
    // modal states
    const [openCancellation, setOpenCancellation] = React.useState(false);
    const handleCancellationOpen = () => setOpenCancellation(true);
    const handleCancellationClose = () => setOpenCancellation(false);

    const { user } = useAuth();
    React.useEffect(() => {
        fetch(`https://smart-tech-shop-server.herokuapp.com/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
        
    }, [user.email]);
    const { StyledTableCell, StyledTableRow } = useCustomStyles();
    
    return (
        <Box>
            <Typography sx={{ textAlign: 'left', my:2 }} variant="h5" component="div" gutterBottom>
                My Orders
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Product Name</StyledTableCell>
                            <StyledTableCell align="center">Price</StyledTableCell>
                            <StyledTableCell align="center">Email</StyledTableCell>
                            <StyledTableCell align="center">Manage Order</StyledTableCell>
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
                                    <Button color="primary" variant="contained" onClick={handleCancellationOpen}>Cancel</Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <OrderCancelModal
                 orders={orders}
                openCancellation={openCancellation}
                setOpenCancellation={setOpenCancellation}
                handleCancellationClose={handleCancellationClose}
                setOrders={setOrders}
            >
            </OrderCancelModal>
        </Box>
    
    );
};

export default MyOrders;